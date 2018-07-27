# LOAD DATA INFILE을 사용해보기 위한 삽질 정리

*발단*
1. 데이터의 사이즈가 너무 크고 최대 1GB를 넘는다. 분석할때 지장이 있을 것 같았다.
2. 분석해야할 트레인 데이터가  총 여섯가지 였고 '%acc_id' 로 연결되어있다. 
	 * label
	 * activity
	 * trade
	 * guild
	 * party
	 '%acc_id'를 key로 쓰면 mysql에서 관계를 나타낼 수도 있고 join을 쓰면 테이블 변형이 쉬울 것 같았다.  


*전개*
처음에는 heidi에서 `import csv` 를 사용하려고 했다. 데이터 베이스 생성, 테이블 생성 후 import를 시도했다.  갖가지 에러가 났다. 
stack over에서 [load data](https://dev.mysql.com/doc/refman/8.0/en/load-data.html)로 csv를 불러오면 훨씬 편하다는 답변을 봤다. 

구문은 간단하다
> >http://moonlighting.tistory.com/140?category=217705
https://huhushow.github.io/huhushow/mysql-load-data-infile-upsert.html


문제는 [security](https://dev.mysql.com/doc/refman/8.0/en/load-data-local.html).

server와 client 둘다 설정을 바꿔야 하는거 같아서 그냥 cmd에서 mysql을 여는 방법을 선택함. 


> On the server side:

-   The  [`local_infile`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile)  system variable controls server-side  `LOCAL`  capability. Depending on the  [`local_infile`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile)  setting, the server refuses or permits local data loading by clients that have  `LOCAL`  enabled on the client side. By default,  [`local_infile`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile)  is disabled.
    
-   To explicitly cause the server to refuse or permit  [`LOAD DATA LOCAL`](https://dev.mysql.com/doc/refman/8.0/en/load-data.html "13.2.7 LOAD DATA INFILE Syntax")  statements (regardless of how client programs and libraries are configured at build time or runtime), start  [**mysqld**](https://dev.mysql.com/doc/refman/8.0/en/mysqld.html "4.3.1 mysqld — The MySQL Server")  with  [`local_infile`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile)  disabled or enabled, respectively.[`local_infile`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile)  can also be set at runtime.

...무슨말인지 잘 모르겟다. 

[local_infile을 활성하하는 방법](https://dba.stackexchange.com/questions/48751/enabling-load-data-local-infile-in-mysql)을 찾아봤다. 

    SHOW GLOBAL VARIABLES LIKE 'local_infile';
    SET GLOBAL local_infile = 'ON';

이 명령어로 local_infile은 활성화시켰다.
그런데

    ERROR 1290 (HY000): The MySQL server is running with the --secure-file-priv option so it cannot execute this statement

**--secure-file-priv** 
이 에러는 workbench에서 load data를 실행시켰을 때도 봤던 에러다.

찾아봤다.


> MySQL 5.6.34 이후 부터 보안이슈로 인하여  
secure-file-priv=dir_name 변수를 설정하지 않으면 into outfile... load data 구문을 사용 할 수 없습니다.  
> 
> ex) secure-file-priv="/usr/local/mysql/mysql-files"     
> /usr/local/mysql/mysql-files/ 디렉토리 하단에 일별로 디렉토리 생성하면 되겠습니다.   즉
> 
> /usr/local/mysql/mysql-files/ 하단에서만 가능하단 뜻입니다.      디렉토리 퍼미션은 755 정도주면 되겠습니다.
>   
>   
>     
> *출처: [into outfile 과 load data 실행 문제](http://www.mysqlkorea.com/gnuboard4/bbs/board.php?bo_table=community_03&wr_id=4811&page=)*

디렉토리 퍼미션은 뭔지 모르겠다. 어쨌든 secure-file-priv로 로드할 파일의 경로를 제한하는 이유는 해킹을 방지하기 위함인 것 같다. ([load data의 경로 제한하기](http://coffeenix.net/board_print.php?bd_code=1707))



**변수의 경로를 삭제하는 방법**
http://sssunho.tistory.com/56

    secure-file-priv = " "
근데 보안도 가져가고 싶으니까 mysql server 8.0 폴더의 my.ini에 로드할 데이터가 있는 경로를 넣었다.

그런데 mysql에서는 여전히 secure_file_priv가 

 

    mysql> show variables like 'secure%';

    +------------------+------------------------------------------------+
    | Variable_name    | Value                                          |
    +------------------+------------------------------------------------+
    | secure_file_priv | C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\ |
    +------------------+------------------------------------------------+


...mysql을 재실행해야 한다고 한다.

workbench로 shutdown하고 workbench를 종료했다가 다시 열어서 server start를 했다.

mysql을 열어서 load data를 실행했더니 



> load data infile 'C:\Users\sohyun\Documents\Classification
> Project\champion_data\train_trade.csv' into table
> champion_train.train_trade fields terminated by "
> Error Code: 29.
> File 'C:\ProgramData\MySQL\MySQL Server  8.0\Data\UserssohyunDocumentsClassification Projectchampion_data rain_trade.csv' not found (OS errno 2 - No such file or directory)	
> 0.015 sec

AIGO 
왜째서 TABLE 디렉토리가 엉망인 것인가... 


저에게 답을 알려주실 분을 기다립니다...

