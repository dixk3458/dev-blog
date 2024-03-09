# 문자열 관련 함수들

### 1. UPPER, LOWER

| 함수 | 설명 |
| --- | --- |
| UCASE, UPPER | 모두 대문자로 |
| LCASE, LOWER | 모두 소문자로 |

`SELECT  UPPER('abcDEF'),  LOWER('abcDEF');`

`SELECT  UCASE(CustomerName),  LCASE(ContactName) FROM Customers;`

### 2. CONCAT, CONCAT_WS

| 함수 | 설명 |
| --- | --- |
| CONCAT(...) | 괄호 안의 내용 이어붙임 |
| CONCAT_WS(S, ...) | 괄호 안의 내용 S로 이어붙임 |

`SELECT CONCAT('HELLO', ' ', 'THIS IS ', 2021)`

`SELECT CONCAT_WS('-', 2021, 8, 15, 'AM')` 

`SELECT CONCAT('O-ID: ', OrderID) FROM Orders;`

`SELECT  CONCAT_WS(' ', FirstName, LastName) AS FullName FROM Employees;`

### 3. SUBSTR, LEFT, RIGHT

| 함수 | 설명 |
| --- | --- |
| SUBSTR, SUBSTRING | 주어진 값에 따라 문자열 자름 |
| LEFT | 왼쪽부터 N글자 |
| RIGHT | 오른쪽부터 N글자 |

`SELECT  SUBSTR('ABCDEFG', 3),  SUBSTR('ABCDEFG', 3, 2),  SUBSTR('ABCDEFG', -4),  SUBSTR('ABCDEFG', -4, 2);`

`SELECT  LEFT('ABCDEFG', 3),  RIGHT('ABCDEFG', 3);`

`SELECT  OrderDate,  LEFT(OrderDate, 4) AS Year,  SUBSTR(OrderDate, 6, 2) AS Month,  RIGHT(OrderDate, 2) AS Day FROM Orders;`

<aside>
💡 다른 프로그래밍 언어와 인덱스 번호를 새는것에 있어 차이가 있다.
MYSQL은 1부터 시작해서 해당 인덱스부터 개수만큼 값을 반환한다.

</aside>

### 4. LENGTH, CHAR_LENGTH

| 함수 | 설명 |
| --- | --- |
| LENGTH | 문자열의 바이트 길이 |
| CHAR_LENGTH, CHARACTER_LEGNTH | 문자열의 문자 길이 |

`SELECT  LENGTH('ABCDE'),  CHAR_LENGTH('ABCDE'),`  

`CHARACTER_LENGTH('ABCDE');SELECT LENGTH('안녕하세요'), -- 15` 

`CHAR_LENGTH('안녕하세요'), -- 5 CHARACTER_LENGTH('안녕하세요'); -- 5`

### 5. TRIM, LTRIM, RTRIM

| 함수 | 설명 |
| --- | --- |
| TRIM | 양쪽 공백 제거 |
| LTRIM | 왼쪽 공백 제거 |
| RTRIM | 오른쪽 공백 제거 |

`SELECT  CONCAT('|', ' HELLO ', '|'),  CONCAT('|', LTRIM(' HELLO '), '|'),  CONCAT('|', RTRIM(' HELLO '), '|'),  CONCAT('|', TRIM(' HELLO '), '|');`

`SELECT * FROM CategoriesWHERE CategoryName = ' Beverages '`

`SELECT * FROM CategoriesWHERE CategoryName = TRIM(' Beverages ')`

### 6. LPAD, RPAD

| 함수 | 설명 |
| --- | --- |
| LPAD(S, N, P) | S가 N글자가 될 때까지 P를 이어붙임 |
| RPAD(S, N, P) | S가 N글자가 될 때까지 P를 이어붙임 |

`SELECT  LPAD('ABC', 5, '-'),  RPAD('ABC', 5, '-');`

`SELECT  LPAD(SupplierID, 5, 0),  RPAD(Price, 6, 0) FROM Products;`

### 7. REPLACE

| 함수 | 설명 |
| --- | --- |
| REPLACE(S, A, B) | S중 A를 B로 변경 |

`SELECT  REPLACE('맥도날드에서 맥도날드 햄버거를 먹었다.', '맥도날드', '버거킹');`

`SELECT  REPLACE(Description, ', ', ' and ') FROM Categories;`

### 8. INSTR

| 함수 | 설명 |
| --- | --- |
| INSTR(S, s) | S중 s의 첫 위치 반환, 없을 시 0 |

`SELECT  INSTR('ABCDE', 'ABC'),  INSTR('ABCDE', 'BCDE'),  INSTR('ABCDE', 'C'),  INSTR('ABCDE', 'DE'),  INSTR('ABCDE', 'F');`

`SELECT * FROM CustomersWHERE INSTR(CustomerName, ' ') BETWEEN 1 AND 6;-- < 6으로 하면?`

### 9.CAST, CONVERT

| 함수 | 설명 |
| --- | --- |
| CAST(A AS T) | A를 T 자료형으로 변환 |
| CONVERT(A, T) | A를 T 자료형으로 변환 |

`SELECT  '01' = '1',  CAST('01' AS DECIMAL) = CAST('1' AS DECIMAL);`

`SELECT  '01' = '1',  CONVERT('01', DECIMAL) = CONVERT('1', DECIMAL);`