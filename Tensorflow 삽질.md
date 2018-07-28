# TensorFlow 를 불러오고 싶다

*발단*
데이터 분석 강의가 어느덧 신경망 모형에 접어들었다. 새로운 것을 배울 때마다 새로운 도구가 필요하다. 오늘은 [Theano](http://deeplearning.net/software/theano/tutorial/index.html)의 기본 튜토리얼을 패스트하게 건너뛰고 부랴부랴 설치를 마치자 마자 sklearn의 iris data로 분류모형을 만들었다. 아무튼 다음시간에 필요한건 Keras와 TensorFlow. 박사님은 강의시간에 패키지를 설치할 여유따위 주지 않는다. 미리 설치를 해놓기로 했다.


##
*전개*
우선 가벼워보이는` Keras`를 설치했다. 하지만 주피터 노트북에서  dataset을 import 시도했지만 `module TensorFlow를 찾을 수 없다`는 엑셉션을 맞딱뜨린다. 어리석었다... TensorFlow -GPU를 설치했다. 그런데


##
*위기*
사용중인 랩탑에는 NVDia의 GPU가 장착되어있다. TensorFlow가 GPU를 사용하기 위해서는 cuDNN과 cuba toolkit가 필요하다. 

`cudnn-9.0-windows10-x64-v7.1` 와  `cuda v9.2`를 설치하고 환경변수를 `cucudart64_90.dll`가 들어있는 bin디렉토리에, cudacudnn은 document에 따라 cuda의 디렉토리들에 넣어주었다.


하지만..... 

    import tensorflow 

>  ImportError: Could not find 'cudart64_90.dll'. TensorFlow requires that this DLL be installed in a directory that is named in your %PATH% environment variable. Download and install CUDA 9.0 from this URL: [https://developer.nvidia.com/cuda-toolkit](https://developer.nvidia.com/cuda-toolkit)

keras도.. 


    from keras.datasets import mnist

> ImportError: Could not find 'cudart64_90.dll'. TensorFlow requires that this DLL be installed in a directory that is named in your %PATH% environment variable. Download and install CUDA 9.0 from this URL: [https://developer.nvidia.com/cuda-toolkit](https://developer.nvidia.com/cuda-toolkit)



왜죠?
일단 오늘은 여기서 턴을 마친다. 

2018.07.28.

 

