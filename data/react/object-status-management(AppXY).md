# 객체 상태 관리(AppXY)

React에서는 상태 관리가 중요하다. 특히 관련있는 데이터를 하나의 객체로 묶어 관리해야하는데, 상태에서도 똑같이 적용된다. 이 객체 상태를 업데이트 하기위해선 객체 자체를 업데이트 하지말고 새로운 객체를 만들어 업데이트 해줘야한다. 즉 불변성을 지키는것이다.

```tsx
import { useRef, useState } from 'react';
import './AppXY.css';

type Coordinate = {
  x: number;
  y: number;
};

export default function AppXY() {
  const [coordinate, setCoordinate] = useState<Coordinate>({
    x: 0,
    y: 0,
  });

  const offsetRef = useRef<HTMLDivElement>(null);

  const handleCoordinate = (event: React.PointerEvent) => {
    const { clientX, clientY } = event;

    setCoordinate(prev => ({
      ...prev,
      x: clientX,
      y: clientY,
    }));
  };
  return (
    <div
      ref={offsetRef}
      className="container"
      onPointerMove={event => handleCoordinate(event)}
    >
      <div
        className="x"
        style={{ transform: `translateY(${coordinate.y}px)` }}
      />
      <div
        className="y"
        style={{ transform: `translateX(${coordinate.x}px)` }}
      />
      <span
        className="tag"
        style={{
          transform: `translate(${coordinate.x + 30}px,${coordinate.y + 30}px)`,
        }}
      >
        <p>{`X : ${coordinate.x}`}</p>
        <p>{`Y : ${coordinate.y}`}</p>
      </span>
    </div>
  );
}

```