/* 1. condition

    1-1 ternary operator 삼항조건연산자 */
var age = 21;
var isAdult = (age >= 21) ? "Grown-up" : "unmature";
    // console.log(isAdult);
    // >> Grown-up
var n = prompt("Enter your birthyear",1999);
var cut = 21
var message = (2019-n >= 21) ? 'Welcome' : 'NO YOU CAN\'T';
alert(message)


    /* 1-2 Switch and Case
        if else 를 써야하는 경우가 너무 많을 때 */
var color = "yellow"
var message
switch (color) {
    case "blue":
      message = "This is blue.";
      break;
    case "red ":
      message = "this is red.";
      break;
    case "pink":
      message = "This is pink.";
      break;
    default:
      message = "Color not found";
}
    // console.log(message);
    // >>Color not found


// 2. loop
    // 2-1 for loop

var i = 0;
for (; i<10 ; i++){
  console.log(i)
}


for (i = 0;; i<10; ) {
  i++;
}
console.log(i)

    // 2-2 while and do...while

var i = 0;
while (i<=10) {
  i++
};
console.log(i);
 // 위와 아래는 동일하다.
var i = 0
do {
  i++
} while (i<=10);
console.log(i)


/* 3. alert, prompt, confirm
    - alert : 메세기자 있는 팝업박스를 띄운다. ok를 눌러야 다음으로 진행된다
    - confirm : 취소/ok 를 선택할 수 있는 메세지가 있는 팝업 박스. cancel : false, ok : true를 리턴한다
    - prompt : ok또는 취소를 눌러야 진행되는 메세지가 있는 팝업박스. input을 받을 수 있고 입력이 없으면 null을 리턴한다. */

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("the square root of ",n," is ",answer)



/*4. Object

   4-1 methods
   method는 오브젝트 속성properties으로 저장된 함수다. 오브젝트는 "this" 로 참조할 수 있다.
  */

  // constructor 내부에서 정의하기
function person(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function(newname) {
    this.name = newname; //
  }
}

var p = new person("David", 21);
p.changeName("John");
      /*
      p는 다음과 같이 저장된다
      p = {
      name : "John",
      age : 21,
      changeName : [fuction]
      }
      */

  // constructor 외부에서 정의하기
function person(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear(){
  return 2019 - this.age
}
var p = new person("David", 21);



/* 5. Arrays
      index를 사용할 수 있는 literal 오브젝트. */

var list = new Array('l','i','s','t');
  // list = ['l','i','s','t']
  // 혹은
var list = new Array(4);
list[0] = 'l';
list[1] = 'i';
list[2] = 's';
list[3] = 't';
  // 혹은
var list = new Array();
list[0] = 'l';
list[1] = 'i';
list[2] = 's';
list[3] = 't';
  // 가장 간단하게는
var list = ['l','i','s','t']
list[3] = 'z'

    // 5-1 array의 properties
var jtbc = ['skycastle','shining','misty'] ;
var mbc = ['redmoon','springspring'] ;
var kdramas = jtbc.concat(mbc);
// console.log(kdramas)

    /* 5-2 Associated Arrays
    array의 인덱스를 name으로 사용 -> 오브젝트처럼 사용 */
var spring = [] ;
spring['bom2'] = '2U2';
spring['chunhee'] = 'uhm' ;
spring['year'] = 2019;
    //console.log(spring)
    // >> [ bom2: '2U2', chunhee: 'uhm', year: 2019 ]

    /* 5-3 Date Object
    날짜 오브젝트 */

var d = new Date() // 현재 날짜와 시간을 알려줌
    //console.log(d)
    //>>2019-05-02T17:58:12.815Z
var hours = d.getHours()
    // console.log(hours);
    // >>3   (왜 갑자기 한국시간으로 알려주지.. 컴 기준인가봄)

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  // document.body.innerHTML = hours + ":"+mins+":"+secs;
    // innerHTML : 매초 계속해서 프린트하는 대신 덮어씌우는 방식
}
setInterval(printTime, 1000)  // 1000ms마다 printTime을 동작시켜줌. 1초마다 시간 찍어주는 동작.
