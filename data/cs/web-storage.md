# 브라우저 저장소 종류 및 차이점

브라우저 저장소는 크게 2가지로 나뉜다.

1. **Cookie**
2. **WebStorage**

### Cookie

Cookie는 서버와 클라이언트간의 지속적인 데이터 교환을 위해 사용되었다. Cookie를 설정하고 난 후 Cookie 정보를 포함한 모든 요청이 서버에게 전송된다. Cookie는 적은 용량의 데이터를 저장하고 만료기한이 있고, 매번 서버에 요청이 간다는 단점이 존재한다. 그러한 단점을 해결하기위해 **WebStorage**가 등장했다.

WebStorage는 문자열뿐만아니라 객체형태의 데이터를 클라이언트에 저장할 수 있다. WebStorage는 두가지로 분류된다.

1. **LocalStorage**
2. **SessionStorage**

이 둘은 데이터 유지기한과 저장범위에있어 차이가있다.

### LocalStorage

LocalStorage는 데이터를 사용자가 제거하지 않는이상 클라이언트측에 영구히 보관되며, 브라우저간 데이터가 공유된다.

### SessionStorage

SessionStorage는 데이터가 브라우저 세션이 유지되는 동안만 데이터가 존재하며 세션이 종료되면(브라우저 창을 종료) 데이터가 삭제된다. 그리고 도메인이 같더라도 브라우저가 다르면 각각의 SessionStorage가 생성되어 브라우저 간 데이터가 공유되지 않는다.

이러한 특징으로 Cookie는 팝업창 안보이게 하는 용도, LocalStorage는 자동 로그인 , SessionStorage는 일회성 로그인 등에 활용되고있다.
