<h1 id="tensorflow-를-불러오고-싶다">TensorFlow 를 불러오고 싶다</h1>
<p><em>발단</em><br>
데이터 분석 강의가 어느덧 신경망 모형에 접어들었다. 새로운 것을 배울 때마다 새로운 도구가 필요하다. 오늘은 <a href="http://deeplearning.net/software/theano/tutorial/index.html">Theano</a>의 기본 튜토리얼을 패스트하게 건너뛰고 부랴부랴 설치를 마치자 마자 sklearn의 iris data로 분류모형을 만들었다. 아무튼 다음시간에 필요한건 Keras와 TensorFlow. 박사님은 강의시간에 패키지를 설치할 여유따위 주지 않는다. 미리 설치를 해놓기로 했다.</p>
<h2 id="section"></h2>
<p><em>전개</em><br>
우선 <em>pip로</em> 가벼워보이는<code>Keras</code>를 설치했다. 하지만 주피터 노트북에서  dataset을 import 시도했지만 <code>module TensorFlow를 찾을 수 없다</code>는 엑셉션을 맞딱뜨린다. 어리석었다… TensorFlow -GPU를 설치했다. *아마도 pip로 *그런데</p>
<h2 id="section-1"></h2>
<p><em>위기</em><br>
사용중인 랩탑에는 NVDia의 GPU가 장착되어있다. TensorFlow가 GPU를 사용하기 위해서는 cuDNN과 cuba toolkit가 필요하다.</p>
<p><code>cudnn-9.0-windows10-x64-v7.1</code> 와  <code>cuda v9.2</code>를 설치하고 환경변수를 <code>cucudart64_90.dll</code>가 들어있는 bin디렉토리에, cudacudnn은 document에 따라 cuda의 디렉토리들에 넣어주었다.</p>
<p>하지만…</p>
<pre><code>import tensorflow 
</code></pre>
<blockquote>
<p>ImportError: Could not find ‘cudart64_90.dll’. TensorFlow requires that this DLL be installed in a directory that is named in your %PATH% environment variable. Download and install CUDA 9.0 from this URL: <a href="https://developer.nvidia.com/cuda-toolkit">https://developer.nvidia.com/cuda-toolkit</a></p>
</blockquote>
<p>keras도…</p>
<pre><code>from keras.datasets import mnist
</code></pre>
<blockquote>
<p>ImportError: Could not find ‘cudart64_90.dll’. TensorFlow requires that this DLL be installed in a directory that is named in your %PATH% environment variable. Download and install CUDA 9.0 from this URL: <a href="https://developer.nvidia.com/cuda-toolkit">https://developer.nvidia.com/cuda-toolkit</a></p>
</blockquote>
<p>왜죠?<br>
일단 오늘은 여기서 턴을 마친다.</p>
<p>2018.07.28.</p>
<h1 id="결국-모든-것은-pip의-문제">결국 모든 것은 pip의 문제</h1>
<p>conda를 이용하는 윈도우는 pip로 설치하면 안된다고 한다. conda의 가상환경에서 파이썬과 그에 필요한 패키지, 모듈 등등을 설치해서 사용해왔기 때문인 것 같다. () 수업 초반에 잘 들을걸… 강사님 따라 환경설정하고 커널에 install 치기 바빴다.</p>
<pre><code>$conda install -c anaconda keras-gpu
</code></pre>
<p>커널에서 를 실행하면 다음과 같은 패키지들이 함께 설치된다.</p>
<p>The following packages will be downloaded:</p>
<pre><code>package                    |            build
---------------------------|-----------------
tensorboard-1.8.0          |   py36he025d50_0         3.1 MB  anaconda
tensorflow-gpu-base-1.8.0  |   py36h376609f_0        75.4 MB  anaconda
cudnn-7.1.4                |        cuda9.0_0       192.3 MB  anaconda
keras-preprocessing-1.0.1  |           py36_0          45 KB  anaconda
openssl-1.0.2o             |       h8ea7d77_0         5.4 MB  anaconda
markdown-2.6.11            |           py36_0         122 KB  anaconda
keras-base-2.2.0           |           py36_0         451 KB  anaconda
termcolor-1.1.0            |           py36_1           8 KB  anaconda
astor-0.6.2                |           py36_1          43 KB  anaconda
ca-certificates-2018.03.07 |                0         155 KB  anaconda
protobuf-3.5.2             |   py36h6538335_0         512 KB  anaconda
html5lib-0.9999999         |           py36_0         178 KB  anaconda
gast-0.2.0                 |           py36_0          15 KB  anaconda
absl-py-0.3.0              |           py36_0         137 KB  anaconda
keras-applications-1.0.2   |           py36_0          48 KB  anaconda
grpcio-1.12.1              |   py36h1a1b453_0         1.4 MB  anaconda
cudatoolkit-9.0            |                1       339.8 MB  anaconda
libprotobuf-3.5.2          |       he0781b1_0         2.0 MB  anaconda
certifi-2018.4.16          |           py36_0         143 KB  anaconda
bleach-1.5.0               |           py36_0          22 KB  anaconda
tensorflow-gpu-1.8.0       |       h21ff451_0           4 KB  anaconda
keras-gpu-2.2.0            |                0           3 KB  anaconda
------------------------------------------------------------
                                       Total:       621.1 MB
</code></pre>
<p>The following NEW packages will be INSTALLED:</p>
<pre><code>absl-py:             0.3.0-py36_0          anaconda
astor:               0.6.2-py36_1          anaconda
cudatoolkit:         9.0-1                 anaconda
cudnn:               7.1.4-cuda9.0_0       anaconda
gast:                0.2.0-py36_0          anaconda
grpcio:              1.12.1-py36h1a1b453_0 anaconda
keras-applications:  1.0.2-py36_0          anaconda
keras-base:          2.2.0-py36_0          anaconda
keras-gpu:           2.2.0-0               anaconda
keras-preprocessing: 1.0.1-py36_0          anaconda
libprotobuf:         3.5.2-he0781b1_0      anaconda
markdown:            2.6.11-py36_0         anaconda
protobuf:            3.5.2-py36h6538335_0  anaconda
tensorboard:         1.8.0-py36he025d50_0  anaconda
tensorflow-gpu:      1.8.0-h21ff451_0      anaconda
tensorflow-gpu-base: 1.8.0-py36h376609f_0  anaconda
termcolor:           1.1.0-py36_1          anaconda
</code></pre>
<p>그러니까 굳이 찾아다니면서 tensorflow와 cudatoolkit와 cudnn을 설치할 필요가 없었다.</p>
<p>여러가지 패키지들이 한데 묶여서 설치되기 때문에 설치도 상당히 오래 걸린다. 그동안 나는 pip로 설치한 다른 패키지들을 삭제해도 충돌이 없을까 걱정을 하고 있다. 프로그래밍 초짜는 패키지는 설치가 반이고 설정이 제일 어렵다.</p>
<p>…중간에 condasignalinterrupt 메세지가 뜨고 설치가 중단됐다. 쉩. 선생님 제가 뭘 잘못햇을까요? 밥이나 먹고 오겠습니다.</p>
<h3 id="교훈"><em>교훈</em></h3>
<p><strong>conda에 대해 공부하자</strong>. <a href="https://hashcode.co.kr/questions/3873/conda%EC%99%80-pip%EC%9D%98-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">천리길도 한걸음부터.</a></p>
<h2 id="아니-문제는--gpu였던-걸까">아니 문제는 -gpu였던 걸까?</h2>
<blockquote>
<p>module ‘tensorflow.python.training.checkpointable’ has no attribute<br>
’CheckpointableBase’</p>
</blockquote>
<p>keras도 tensorflow도 불러와지지 않는다.<br>
뭐가 잘못된걸까 이쯤되면 약간 수치스러움.</p>
<pre><code>---------------------------------------------------------------------------
AttributeError                            Traceback (most recent call last)
&lt;ipython-input-3-64156d691fe5&gt; in &lt;module&gt;()
----&gt; 1 import tensorflow as tf

C:\ProgramData\Anaconda3\lib\site-packages\tensorflow\__init__.py in &lt;module&gt;()
     22 
     23 # pylint: disable=g-bad-import-order
---&gt; 24 from tensorflow.python import pywrap_tensorflow  # pylint: disable=unused-import
     25 # pylint: disable=wildcard-import
     26 from tensorflow.tools.api.generator.api import *  # pylint: disable=redefined-builtin

C:\ProgramData\Anaconda3\lib\site-packages\tensorflow\python\__init__.py in &lt;module&gt;()
     61 
     62 # Framework
---&gt; 63 from tensorflow.python.framework.framework_lib import *  # pylint: disable=redefined-builtin
     64 from tensorflow.python.framework.versions import *
     65 from tensorflow.python.framework import errors

C:\ProgramData\Anaconda3\lib\site-packages\tensorflow\python\framework\framework_lib.py in &lt;module&gt;()
    102 from tensorflow.python.framework.random_seed import set_random_seed
    103 from tensorflow.python.framework.sparse_tensor import convert_to_tensor_or_sparse_tensor
--&gt; 104 from tensorflow.python.framework.importer import import_graph_def
    105 
    106 # Utilities for working with Tensors

C:\ProgramData\Anaconda3\lib\site-packages\tensorflow\python\framework\importer.py in &lt;module&gt;()
     30 from tensorflow.python.framework import dtypes
     31 from tensorflow.python.framework import errors
---&gt; 32 from tensorflow.python.framework import function
     33 from tensorflow.python.framework import op_def_registry
     34 from tensorflow.python.framework import ops

C:\ProgramData\Anaconda3\lib\site-packages\tensorflow\python\framework\function.py in &lt;module&gt;()
     34 from tensorflow.python.framework import ops
     35 from tensorflow.python.ops import array_ops
---&gt; 36 from tensorflow.python.ops import resource_variable_ops
     37 from tensorflow.python.ops import variable_scope as vs
     38 from tensorflow.python.util import compat

C:\ProgramData\Anaconda3\lib\site-packages\tensorflow\python\ops\resource_variable_ops.py in &lt;module&gt;()
     33 from tensorflow.python.ops import gen_state_ops
     34 from tensorflow.python.ops import math_ops
---&gt; 35 from tensorflow.python.ops import variables
     36 # go/tf-wildcard-import
     37 # pylint: disable=wildcard-import

C:\ProgramData\Anaconda3\lib\site-packages\tensorflow\python\ops\variables.py in &lt;module&gt;()
     38 
     39 @tf_export("Variable")
---&gt; 40 class Variable(checkpointable.CheckpointableBase):
     41   """See the @{$variables$Variables How To} for a high level overview.
     42 

AttributeError: module 'tensorflow.python.training.checkpointable' has no attribute 'CheckpointableBase'
</code></pre>
<p>keras-gpu와 tensorflow-gpu를 삭제하고 keras와 tensorflow를 설치했다.<br>
(<a href="https://stackoverflow.com/questions/51390692/attributeerror-module-tensorflow-python-training-checkpointable-has-no-attrib">tensorflow 설치</a> 참고)</p>
<p>오늘 수업시간에 쓸텐데 계속 에러난다. 아마 박사님께 엄청 깨지더라도 여쭤봐야할듯.</p>
<h1 id="해결">해결</h1>
<pre><code>$conda list
</code></pre>
<ol>
<li>설치된 모든 keras, tensorflow 관련 패키지를 지웠다.</li>
<li><code>conda install keras</code>, <code>conda install tensorflow</code>를 차례로 실행했다.</li>
<li>주피터 노트북에서 import 성공했다.</li>
</ol>
<p>…???<br>
<code>conda install tensorflow-gpu</code> 를 설치하고나니 keras를 불러올 때 뜨던 “Use tensorflow backend” 라는 경고문도 없다. 이건 뭐… 왜 되는지 알 수 없으니 정상 작동해도 걱정이다. 일단 pip에서 keras와 tnesorflow를 설치한게 일차적인 문제였다는건 알았으니 된건가?</p>
<p>2018.07.30.</p>

