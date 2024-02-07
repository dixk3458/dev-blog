# JavaScript 런타임 환경

**JavaScript는 싱글 쓰레드 언어**로 한번에 하나의 일만 처리할 수 있다. 하지만 JavaScript를 사용할 때 멀티 쓰레드 효과를 이용하는것처럼 보이는데, 어떻게 된 것일까?

JavaScript는 **런타임 환경인 브라우저**와 **Event Loop** 등의 도움을 받아 멀티 쓰레드처럼 동작하는것이다.

**작성한 JavaScript 코드가 브라우저 위에서 어떻게 멀티 쓰레드 처럼 동작하는지 설명하겠다.**

우리가 작성한 Web Application이 브라우저 위에 올라가는 순간 브라우저의 JavaScript 엔진이 JavaScript 코드를 한줄 한줄 분석하며 실행한다.

JavaScript 엔진에는 함수의 실행 순서를 기억하는 **Call Stack**이 존재한다. Call Stack에 Web APIs 중 하나인 `setTimeout()`과 같은 비동기 함수가 들어와 호출된다면, Call Stack에서 setTimeout()이 Call Stack에서 빠져나가고 Web APIs는 타이머를 시작한다. 그렇게 JavaScript 엔진과 Web APIs가 병렬적으로 실행되다가 지정한 타이머가 지나면, Web APIs는 등록한 콜백함수를 **Task Queue**에 전달한다.

**또 의문이 생긴다. Task Queue에 들어온 함수는 언제 실행될까?**

브라우저에는 JavaScript의 Call Stack과 브라우저의 Task Queue를 감시하는 **Event Loop**가 있다.
Event Loop는 Call Stack이 비어있는 상태가 되면, Task Queue에 있는 작업을 Call Stack으로 전달해 다른 함수 처럼 호출해 실행시키는것이다.

이렇게 JavaScript는 브라우저의 도움을 받아서 멀티 쓰레딩 언어처럼 동작할 수 있는것이다.

![img](https://youngseokim-kr.github.io/react/images/2022-03-11-react_Til07/image-20220311153622069.png)
