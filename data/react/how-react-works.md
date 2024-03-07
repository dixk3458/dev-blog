# React 동작 원리

React는 컴포넌트들의 집합인데, 잘 만들어둔 컴포넌트를 다음과 같이 사용할 수 있다.
`<CounterButton title="정재웅" onClick={()⇒{ }}/>`

외부에서 컴포넌트 내부에 Props을 전달해 재상용성을 높일수있다.

그렇다면 컴포넌트는 어떻게 만들어질까?
크게 두가지 방식이 존재한다.

1. 함수형 컴포넌트
2. 클래스 컴포넌트

최근 많이 사용되는 함수형 컴포넌트에대해 알아보고 추후 클래스 컴포넌트를 알아보기로 하자.

```jsx
export default function CounterButton({ title, onClick }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, {title}</h1>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}
```

함수형 컴포넌트는 크게 3가지로 구성된다.

1. Render - UI를 보여주는 JSX로 반환되어져야한다.
2. State - 컴포넌트의 내부 상태
3. Props - 외부로부터 받아오는 상태

컴포넌트에서 관리하는 상태가 변경되면, **상태값이 변경된 컴포넌트만 업데이트를 해준다(re-render).**

### 동작원리

브라우저에서 UI요소를 보여주기 위해 HTML을 읽어 각 요소를 DOM으로 변환해 웹 페이지의 구조를 Tree형태로 만든다. React에서도 마찬가지로 브라우저에 요소들을 DOM Tree로 구성한다. 하지만 React에서는 DOM 요소에 업데이트가 발생하면 바로 DOM Tree를 변경하는것이 아니라, React 내부적으로 만들어 둔**Virtual DOM Tree에서 업데이트를 적용하고 기존의 DOM Tree와 비교해 실제로 업데이트가 필요한 부분만 변경하여 DOM Tree에 적용한다.**

이러한 동작때문에 React에서 State가 많이 변경된다고 하더라도 실제 업데이트가 필요한 부분만 업데이트가 되기때문에 효율적이고 빠르게 업데이트를 적용되는것이다.
