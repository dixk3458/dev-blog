# useEffect란 무엇인가?(AppProducts)

`useEffect()`는 React에서 제공하는 Hook으로 브라우저에 처음 마운트 될때 처리해야하는 작업이 있거나 언마운트 될때 정리해야하는 작업을 처리하는데 유용한 Hook이다.

먼저 좋지 못한 코드를 보여주겠다.
`<Products/>` 컴포넌트가 렌더링 되면, 외부로부터 네트워크 요청을 해 `products`를 받아와 내부 상태로 관리를 하는것이다. 하지만 매우 치명적인 문제가 있다. 네트워크 요청을 해 products를 받아와 상태가 변경되면 컴포넌트가 리렌더링되어 다시 네트워크 요청이 발생하게 되는것으로 **무한반복에 빠지고 네트워크 자원을 모두 소모하는것이다.** 우리가 원하는것은 컴포넌트가 처음 마운트 되었을때 딱 한번 products를 가져오는것이다. 이러한 상황에서 사용할 수 있는것이 `useEffect()` 이다.

```tsx
import { useState } from 'react';

type Product = {
  name: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);

  fetch('products/products.json')
    .then(res => res.json())
    .then(data => {
      console.log('데이터를 받아왔다.');
      setProducts(data);
    });

  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </>
  );
}
import { useState } from 'react';

type Product = {
  name: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);

  fetch('products/products.json')
    .then(res => res.json())
    .then(data => {
      console.log('데이터를 받아왔다.');
      setProducts(data);
    });

  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </>
  );
}
```

이렇게 `useEffect()` 를 이용하게 되면 브라우저에 처음 마운트될때 딱 한번 처리해줄 수 있다.

```tsx
import { useEffect, useState } from 'react';

type Product = {
  name: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('products/products.json')
      .then(res => res.json())
      .then(data => {
        console.log('Products를 받아왔다.');
        setProducts(data);
      });

    return () => {
      console.log('정리 하는중 🧹🧹🧹🧹');
    };
  }, []);

  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </>
  );
}
```

하지만 브라우저에 처음 마운트 될때 딱 한번만 외부로부터 데이터를 요청해 받아올수도 있지만 특정 값이 변경됨에 따라서 네트워크를 요청해야할때도 있다. 그것을 어떻게 처리하는지 알아보자. useEffect()의 두번째 인자에 dependency를 전달해 특정 값이 변경될때 요청을 처리할 수 있다.

```tsx
import { useEffect, useState } from 'react';

type Product = {
  name: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [sale, setSale] = useState(false);

  useEffect(() => {
    fetch(`products/${sale ? 'sale__' : ''}products.json`)
      .then(res => res.json())
      .then(data => {
        console.log('Products를 받아왔다.');
        setProducts(data);
      });

    return () => {
      console.log('정리 하는중 🧹🧹🧹🧹');
    };
  }, [sale]);

  return (
    <>
      <div>
        <label htmlFor="input-checkbox">Show only sale products⭐</label>
        <input
          type="checkbox"
          name="input-checkbox"
          checked={sale}
          onChange={() => setSale(prev => !prev)}
        />
      </div>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </>
  );
}
```

즉 useEffect()는 브라우저에 **처음으로 마운트 될 때 혹은 언마운트될 때 그리고 특정 값에 따라서 무거운 일을 처리할 때 유용**하게 사용할 수 있는 Hook이다.
