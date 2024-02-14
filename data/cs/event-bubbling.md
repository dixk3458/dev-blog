# 이벤트 버블링

**이벤트 버블링**은 웹에서 이벤트가 전달되는 방식 중 하나로 웹 개발을 하다보면 흔히 만날 수 있는 개념이다. 다른 방식인 **이벤트 캡처링**은 버블리에 비해 사용되지 않고있다. 이벤트 버블링을 알아보기전에 사전지식(이벤트,이벤트 등록방법)을 알아보자. 

웹 애플리케이션에서 이벤트는 사용자와의 상호작용을 통해 발생하는 사건,행동이라고 말할 수 있다. 그 이벤트를 등록하는 방법은 웹에서 제공해주는 `**addEventListener()**` 를 이용해 등록하는것이다.
간단한 예시를 보여주겠다.

```html
<body>
  <button class="click__btn">Click me</button>
</body>

<script>
  const clickBtn = document.querySelector('.click__btn');
  clickBtn.addEventListener('click', () => {
    console.log('클릭');
  });
</script>
```

### 이벤트 전달 방식

1. **이벤트 버블링**
2. **이벤트 캡처링**

<aside>
💡 **이벤트 핸들러와 이벤트 리스너의 차이**

이벤트 핸들러는 addEventListener()없이 이벤트와 콜백함수가 연결된 함수를 말하고 이벤트 리스너는 addEventListener()로 연결된 함수를 말한다. 
차이점으로는 이벤트 핸들러는 요소 하나당 하나의 이벤트만 가질 수 있는 반면 이벤트 리스너가 등록된 요소는 다양한 이벤트 리스너를 가질 수 있다.

</aside>

이벤트 버블링은 하위 요소에서 발생한 이벤트가 DOM Hierarchy(계층) 최상위 요소로 전달되는것을말한다. 즉 하위요소에서 발생한 이벤트가 최상위로 전달되어 최상위에 등록되어있는 이벤트가 호출되는것이다.

반면 이벤트 캡처링은 이벤트 버블링과 반대로 최상위의 이벤트가 최하위 요소로 전달는것을 말한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="display: flex">
    <div class="outer" style="padding: 20px; background-color: red">
      외부
      <div class="middle" style="padding: 20px; background-color: yellow">
        중간
        <div class="inner" style="padding: 20px; background-color: green">
          내부
        </div>
      </div>
    </div>
    <script>
      // Event 버블링 실습
      const divs = document.querySelectorAll('div');
      divs.forEach(div => {
        div.addEventListener('click', e => {
          console.log(e.currentTarget.className);
        });
      });
    </script>
  </body>
</html>
```

### 이벤트 위임

이벤트 위임은 하위 요소 각각에 이벤트를 등록하지 않고 상위 요소에서 딱 한번 등록해 하위 요소의 이벤트를 제어하는것이다.
이벤트 버블링 및 캡처링의 응용패턴이라고 볼 수 있다.

예를들어 게임보드판 위에 있는 수백가지의 말 각각에 이벤트를 등록해줘야할까? 매우 불필요한 이벤트 낭비이다. 게임보드판위에 딱 하나의 이벤트만 등록하고 event.currentTarget과 event.target을 적절하게 활용하면 코드를 간결하게 사용할 수 있다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul class="container">
      <li style=" background-color:red">1</li>
      <li style=" background-color:blue">2</li>
      <li style=" background-color:green">3</li>
    </green
    </ul>
    <script>
      // currentTarget : 이벤트가 등록되어있는 요소
      // target : 이벤트를 발생시킨 요소
      const container = document.querySelector('.container');
      container.addEventListener('click', e => {
        console.log('currentTarget:',e.currentTarget);
        console.log('target:',e.target);
      });
    </script>
  </body>
</html>
```

### 전파를 막아라

위에서 알아보았듯이 브라우저는 이벤트를 상위 혹은 하위 요소로 전달한다. 이것을 막을 수 있는 방법이 있다. 바로 `**event.stopPropagation()**` 이다.
본래 동작에서 벗어나는 행위라 사용하는것을 추천하지 않는다.