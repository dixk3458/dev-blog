# React란 무엇인가?

**React**는 사용자 인터페이스(UI)를 만들어주는 Javascript 라이브러리로 현재 프론트엔드 시장에서 각광 받고있다. 

React를 이용해 Web, Mobile, 심지어는 Desktop 애플리케이션을 만들 수 있어 많은 사용자에게 사용되고있다. 
더 나아가 React를 한번 배워두면 React를 이용해 만들어진 Next.js 프레임워크를 다룰 수 있다. 그리고 React 하면 떠오르는 단어가 있다. 바로 **SPA**와 **CSR**이다.

### SPA(Single Page Application)

React를 이용해 애플리케이션을 만든다고 하면 대부분 SPA를 만드는구나 라고 생각할것이다. SPA는 Single Page Application의 약자로 한개의 페이지 내에서 요소를 감췄다가 보여주는 동작으로 웹 애플리케이션이 동작한다. 
즉 사용자가 버튼을 클릭하면 새로운 페이지(파일)을 서버로부터 받아와 깜빡거림과 함께 Refresh되어 보여지는것이 아니라 **한 페이지내에서 요소를 감추고 다른 요소를 보여주면서 자유자재로 네비게이션 할 수 있는것이다.**

### CSR(Client Side Rendering)

React 만으로 작업한 애플리케이션은 CSR(Client Side Rendering)로 렌더링 작업이 발생한다. 즉 사용자가 페이지를 요청하면 처음부터 컨텐츠가 있는 페이지를 보는것이 아니라, **빈 페이지를 보여주고 페이지에 필요한 모든 리소스(Javascript,CSS, React 등)가 받아지면 컨텐츠가 담긴 페이지를 볼수있는것이다**.