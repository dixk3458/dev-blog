# 5가지 Position 속성 정리

CSS Position 속성은 HTML 요소를 **문서상에 어떤 방식으로 배치할것인지를 결정**하는 속성이다.

position 속성은 5가지가 있다.

- static
- relative
- absolute
- sticky
- fixed

### position:static

---

static은 position 속성을 별도로 지정하지 않았을때 적용되는 속성이며, HTML 요소가 **문서의 원래 있어야하는 위치에 배치**되도록한다.

즉 HTML에 작성된 순서 그대로 화면에 표기되는것을 말하며, top,bottom,left,right과 같은 속성값이 무시된다.

### position:relative

---

요소를 **원래 위치에서 벗어나게 해주며**, **원래 위치를 기준으로 상대적으로 배치**해준다. 즉 top, bottom, left, right 속성을 이용해 원래 위치를 기준으로 상하좌우로 얼만큼 이동할것인지를 결정한다.

### position:absolute

---

absolute속성은 원래 배치 흐름에서 벗어나 **상위 부모중 static이 아닌 첫번째 요소를 기준으로 배치**된다. 만약에 상위 부모중 static이 아닌 position 속성값을 갖는 요소가 없다면 body를 기준으로 배치된다.

중요한 점으로 absolute로 속성을 갖게되면, 기존 문서 흐름에서 벗어나 앞 뒤에 나온 요소와 상호작용을 하지 않는다는것이다.

### position:fixed

---

fixed 속성을 사용하면, 화면의 고정된 위치에 요소를 배치할수있다. 즉 뷰포트(브라우저 전체화면)를 기준으로 고정된 위치에 배치되도록한다. fixed 역시 absolute와 마찬가지로 다른 요소와 상호작용을 하지 않는다.

### position:sticky

---

sticky는 fixed와 비슷하게 문서상에 요소를 고정시킬때 사용하는 속성이다. 차이점이 있다면, 다른 요소와 상호작용을 하냐 안하냐의 차이가있다.

sticky는 다른 요소의 배치 흐름에 영향을 끼치지 않는다.
