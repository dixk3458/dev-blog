# 프로세스와 쓰레드는 무엇인가?

### 프로세스

**프로세스**는 컴퓨터 운영체제 위에서 연속적으로 실행되고 있는 프로그램을 의미한다.
예를들어 컴퓨터에서 실행되는 음악재생 프로그램, 사진 뷰어 등 의 프로그램을 말한다.

프로세스는 서로 독립적으로 실행되기때문에, 어느 하나의 프로세스가 문제가 생기더라도 서로 영향을 끼치지않는다. 그리고 각각 자원을 가지고있다.

프로세스는 4가지로 구성된다.

1. Code : 프로세스 프로그램을 실행시켜주는 코드
2. Stack : 프로세스 안에서 실행되는 함수의 실행순서를 기억하는 스택
3. Heap : 동적으로 생성되는 데이터를 저장하는 공간
4. Data : 전역 변수나, Static 변수들이 저장된다.

![img](https://blog.kakaocdn.net/dn/I7yvy/btrjvRyeeDO/FMYekbFUfA3HNg2PUMZsGK/img.png)

### 쓰레드

쓰레드는 한개의 프로세스 안에서 다수로 존재해 동작한다. 쓰레드는 프로세스 안에서 각각 해야하는 업무를 배정받는다(일꾼).
쓰레드는 각각 해야하는 업무를 기억해야하기에 **개별적으로 Stack을 가진다.** 그리고 쓰레드는 프로세스를 위해서 업무를 수행해야하기때문에 프로세스에 필요한 Code,Stack,Heap에 공통적으로 접근할 수 있다.

![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBmboJ%2FbtrjznbZfkl%2FKgba4t2uhjFEanL197bP30%2Fimg.png)

따라서 쓰레드는 자신이 해야할 업무를 Stack을 통해서 관리하지만, 프로세스 안에있는 공통데이터를 공유하면서 사용하기때문에 멀티 쓰레딩을 잘 처리해야 문제 없는 프로그램을 만들수있다.

비유를 하자면 프로세스와 쓰레드는 다음과 같다.
os - 안드로이드

process - 실행되고 있는 유튜브앱

thread - 서버에서 영상을 가지고 오는 일꾼, 댓글을 관리하는 일꾼, 좋아요/싫어요/재생목록에 추가를 관리하는 일꾼 등등

공유 리소스 - 영상/댓글/계정 데이트 등등
