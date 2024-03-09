# 숫자 관련 함수들

### 1. ROUND, CEIL, FLOOR

| 함수 | 설명 |
| --- | --- |
| ROUND | 반올림 |
| CEIL | 올림 |
| FLOOR | 내림 |

`SELECT   ROUND(0.5),  CEIL(0.4),  FLOOR(0.6);`

`SELECT   Price,  ROUND(price),  CEIL(price),  FLOOR(price) FROM Products;`

### 2. ABS

| 함수 | 설명 |
| --- | --- |
| ABS | 절대값 |

`SELECT ABS(1), ABS(-1), ABS(3 - 10);`

`SELECT * FROM OrderDetails WHERE ABS(Quantity - 10) < 5;`

### 3. GREATEST, LEAST

| 함수 | 설명 |
| --- | --- |
| GREATEST | (괄호 안에서) 가장 큰 값 |
| LEAST | (괄호 안에서) 가장 작은 값 |

`SELECT   GREATEST(1, 2, 3),  LEAST(1, 2, 3, 4, 5);`

`SELECT  OrderDetailID, ProductID, Quantity,  GREATEST(OrderDetailID, ProductID, Quantity),  LEAST(OrderDetailID, ProductID, Quantity) FROM OrderDetails;`

### 4. 그룹 함수 - 조건에 따라 집계된 값을 가져온다.

| 함수 | 설명 |
| --- | --- |
| MAX | 가장 큰 값 |
| MIN | 가장 작은 값 |
| COUNT | 갯수 (NULL값 제외) |
| SUM | 총합 |
| AVG | 평균 값 |

`SELECT  MAX(Quantity),  MIN(Quantity),  COUNT(Quantity),  SUM(Quantity),  AVG(Quantity) FROM OrderDetails WHERE OrderDetailID BETWEEN 20 AND 30;`

| 함수 | 설명 |
| --- | --- |
| POW(A, B), POWER(A, B) | A를 B만큼 제곱 |
| SQRT | 제곱근 |

`SELECT  POW(2, 3),  POWER(5, 2),  SQRT(16);`

`SELECT Price, POW(Price, 1/2)FROM Products WHERE SQRT(Price) < 4;`

| 함수 | 설명 |
| --- | --- |
| TRUNCATE(N, n) | N을 소숫점 n자리까지 선택 |

`SELECT  TRUNCATE(1234.5678, 1),  TRUNCATE(1234.5678, 2),  TRUNCATE(1234.5678, 3),  TRUNCATE(1234.5678, -1),  TRUNCATE(1234.5678, -2),  TRUNCATE(1234.5678, -3);`

`SELECT Price FROM Products WHERE TRUNCATE(Price, 0) = 12;`

<aside>
💡 GREATEST, LEAST 와 MAX, MIN은 비슷해보이지만, 괄호 안에 있는 값을 기준으로 연산을 하냐 컬럼을 기준으로 연산을 하냐에 차이가 있다.

</aside>