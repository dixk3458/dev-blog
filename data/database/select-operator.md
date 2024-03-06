# 각종 연산자

## **1. 사칙연산**

| 연산자 | 의미 |
| --- | --- |
| +, -, *, / | 각각 더하기, 빼기, 곱하기, 나누기 |
| %, MOD | 나머지 |

`SELECT 1 + 2;`

`SELECT 5 - 2.5 AS DIFFERENCE;`

`SELECT 3 * (2 + 4) / 2, 'Hello';`

`SELECT 10 % 3;`

❗ **문자열에 사칙연산을 가하면 0으로 인식**

`SELECT 'ABC' + 3;`

`SELECT 'ABC' * 3;`

`SELECT '1' + '002' * 3;-- **숫자로 구성된 문자열은 숫자로 자동인식**`

`SELECT  OrderID + ProductID FROM OrderDetails;`

`SELECT  ProductName,  Price / 2 AS HalfPrice FROM Products;`

---

## **2. 참/거짓 관련 연산자**

`SELECT TRUE, FALSE;`

`SELECT !TRUE, NOT 1, !FALSE, NOT FALSE;`

💡 MySQL에서는 TRUE는 1, FALSE는 0으로 저장됩니다.

`SELECT 0 = TRUE, 1 = TRUE, 0 = FALSE, 1 = FALSE;`

`SELECT * FROM Customers WHERE TRUE;`

`SELECT * FROM Customers WHERE FALSE;`

| 연산자 | 의미 |
| --- | --- |
| IS | 양쪽이 모두 TRUE 또는 FALSE |
| IS NOT | 한쪽은 TRUE, 한쪽은 FALSE |

`SELECT TRUE IS TRUE;`

`SELECT TRUE IS NOT FALSE;`

`SELECT (TRUE IS FALSE) IS NOT TRUE;`

| 연산자 | 의미 |
| --- | --- |
| AND, && | 양쪽이 모두 TRUE일 때만 TRUE |
| OR, || | 한쪽은 TRUE면 TRUE |

`SELECT TRUE AND FALSE, TRUE OR FALSE;`

`SELECT 2 + 3 = 6 OR 2 * 3 = 6;`

`SELECT * FROM OrdersWHERE  CustomerId = 15 AND EmployeeId = 4;`

`SELECT * FROM Products WHERE  ProductName = 'Tofu' OR CategoryId = 8;`

`SELECT * FROM OrderDetailsWHERE  ProductId = 20  AND (OrderId = 10514 OR Quantity = 50);`

| 연산자 | 의미 |
| --- | --- |
| = | 양쪽 값이 같음 |
| !=, <> | 양쪽 값이 다름 |
| >, < | (왼쪽, 오른쪽) 값이 더 큼 |
| >=, <= | (왼쪽, 오른쪽) 값이 같거나 더 큼 |

`SELECT 1 = 1, !(1 <> 1), NOT (1 < 2), 1 > 0 IS NOT FALSE;`

`SELECT 'A' = 'A', 'A' != 'B', 'A' < 'B', 'A' > 'B';`

`SELECT 'Apple' > 'Banana' OR 1 < 2 IS TRUE;`

❗ MySQL의 기본 사칙연산자는 **대소문자 구분을 하지 않습니다.**

`SELECT 'A' = 'a';`

💡 테이블의 컬럼이 아닌 값으로 선택하기.

`SELECT  ProductName, Price,  Price > 20 AS EXPENSIVE FROM Products;`

`SELECT  ProductName, Price,  NOT Price > 20 AS CHEAP FROM Products;`

| 연산자 | 의미 |
| --- | --- |
| BETWEEN {MIN} AND {MAX} | 두 값 사이에 있음 |
| NOT BETWEEN {MIN} AND {MAX} | 두 값 사이가 아닌 곳에 있음 |

`SELECT 5 BETWEEN 1 AND 10;`

`SELECT 'banana' NOT BETWEEN 'Apple' AND 'camera';`

`SELECT * FROM OrderDetailsWHERE ProductID BETWEEN 1 AND 4;`

`SELECT * FROM CustomersWHERE CustomerName BETWEEN 'b' AND 'c';`

| 연산자 | 의미 |
| --- | --- |
| IN (...) | 괄호 안의 값들 가운데 있음 |
| NOT IN (...) | 괄호 안의 값들 가운데 없음 |

`SELECT 1 + 2 IN (2, 3, 4)`

`SELECT 'Hello' IN (1, TRUE, 'hello')`

`SELECT * FROM CustomersWHERE City IN ('Torino', 'Paris', 'Portland', 'Madrid')`

| 연산자 | 의미 |
| --- | --- |
| LIKE '... % ...' | 0~N개 문자를 가진 패턴 |
| LIKE '... _ ...' | _ 갯수만큼의 문자를 가진 패턴 |

`SELECT  'HELLO' LIKE 'hel%',  'HELLO' LIKE 'H%',  'HELLO' LIKE 'H%O',  'HELLO' LIKE '%O',  'HELLO' LIKE '%HELLO%',  'HELLO' LIKE '%H',  'HELLO' LIKE 'L%'`

`SELECT  'HELLO' LIKE 'HEL__',  'HELLO' LIKE 'h___O',  'HELLO' LIKE 'HE_LO',  'HELLO' LIKE '_____',  'HELLO' LIKE '_HELLO',  'HELLO' LIKE 'HEL_',  'HELLO' LIKE 'H_O'`

`SELECT * FROM EmployeesWHERE Notes LIKE '%economics%'`

`SELECT * FROM OrderDetailsWHERE OrderID LIKE '1025_'`

---

### **총정리**

| 연산자 | 의미 |
| --- | --- |
| +, -, *, / | 각각 더하기, 빼기, 곱하기, 나누기 |
| %, MOD | 나머지 |
| IS | 양쪽이 모두 TRUE 또는 FALSE |
| IS NOT | 한쪽은 TRUE, 한쪽은 FALSE |
| AND, && | 양쪽이 모두 TRUE일 때만 TRUE |
| OR, || | 한쪽은 TRUE면 TRUE |
| = | 양쪽 값이 같음 |
| !=, <> | 양쪽 값이 다름 |
| >, < | (왼쪽, 오른쪽) 값이 더 큼 |
| >=, <= | (왼쪽, 오른쪽) 값이 같거나 더 큼 |
| BETWEEN {MIN} AND {MAX} | 두 값 사이에 있음 |
| NOT BETWEEN {MIN} AND {MAX} | 두 값 사이가 아닌 곳에 있음 |
| IN (...) | 괄호 안의 값들 가운데 있음 |
| NOT IN (...) | 괄호 안의 값들 가운데 없음 |
| LIKE '... % ...' | 0~N개 문자를 가진 패턴 |
| LIKE '... _ ...' | _ 갯수만큼의 문자를 가진 패턴 |