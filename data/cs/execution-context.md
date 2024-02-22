# 실행 컨텍스트

### 실행 컨텍스트란?

실행 컨텍스트는 **실행할 코드에 제공할 환경 정보를 모아놓은 객체**이다. 코드가 실행되면 환경 정보를 모은 실행 컨텍스트를 Call Stack에 쌓아 환경과 순서를 보장해준다.

※ 환경 - 전역공간이 될 수 있고, 함수 내부의 환경이 될 수 있다.

### 실행 컨텍스트의 구성

- Variable Environment
- Lexcial Environment
- this binding

**Variable Environment**는현재 실행 컨텍스트 내부의 식별자 정보를 담는 **environmentRecord**와 외부 환경 정보를 담는 **outerEnvironmentReference**로 이루어진다.

**Lexcial Environment**는  먼저 환경 정보를 담긴 Variable Environment를 복사해 만들어진다.
초기에는 Variable Environment와 같지만 변경사항이 실시간으로 적용된다. 즉 Variable Environment는 초기 환경 상태를 가지고 Lexical Environment는 최신 환경 상태를 가진다.

Environment Record는 현재 컨텍스트와 관련된 식별자를 저장한다.

Outer Environment Reference는 현재 호출된 함수가 선언될 당시의 Lexcial Environment를 참조한다. 이때문에 내부함수에서 외부 식별자에 접근할 수 있는것이다.