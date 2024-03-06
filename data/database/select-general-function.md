# SELECT 전반 기능

### **1. 테이블의 모든 내용 보기**

### **(asterisk)는 테이블의 모든 컬럼(열)을 뜻합니다.**

`SELECT * FROM Customers;-- 이와 같이 주석을 달 수 있습니다.`

- 주석을 이용해 내용 설명을 도와줄 수 있다.

### **2. 원하는 column(열)만 골라서 보기**

`SELECT CustomerName FROM Customers;`

`SELECT CustomerName, ContactName, CountryFROM Customers;`

### **💡 테이블의 컬럼이 아닌 값도 선택할 수 있습니다.**

아래 구문의 *1*과 *Hello*, NULL을 확인하세요.

`SELECT  CustomerName, 1, 'Hello', NULLFROM Customers;`

### **3. 원하는 조건의 row(행)만 걸러서 보기**

**WHERE** 구문 뒤에 조건을 붙여 원하는 데이터만 가져올 수 있습니다.

`SELECT * FROM Orders WHERE EmployeeID = 3;`

`SELECT * FROM OrderDetails WHERE Quantity < 5;`

`SELECT * FROM Customers WHERE City = "Berlin";`

### **4. 원하는 순서로 데이터 가져오기**

**ORDER BY** 구문을 사용해서 특정 컬럼을 기준으로 데이터를 정렬할 수 있습니다.

| 구문 | 기준     | 기본 |
| ---- | -------- | ---- |
| ASC  | 오름차순 | ✔️   |
| DESC | 내림차순 |      |

`SELECT * FROM Customers ORDER BY ContactName;`

`SELECT * FROM OrderDetails ORDER BY ProductID ASC, Quantity DESC;`

### **5. 원하는 만큼만 데이터 가져오기**

**`LIMIT {가져올 갯수}`** 또는 **`LIMIT {건너뛸 갯수}, {가져올 갯수}`** 를 사용하여, 원하는 위치에서 원하는 만큼만 데이터를 가져올 수 있습니다.

`SELECT * FROM Customers LIMIT 10;`

`SELECT * FROM Customers LIMIT 0, 10;`

`SELECT * FROM Customers LIMIT 30, 10;`

- `LIMIT`을 활용해 페이지마다 데이터를 끊어서 불러올 수 있다.

### **6. 원하는 별명(alias)으로 데이터 가져오기**

**AS**를 사용해서 컬럼명을 변경할 수 있습니다.

`SELECT  CustomerId AS ID,  CustomerName AS NAME,  Address AS ADDR FROM Customers;`

`SELECT  CustomerId AS '아이디',  CustomerName AS '고객명',  Address AS '주소'FROM Customers;`

### **🎯 모두 활용해보기**

`SELECT  CustomerID AS '아이디',  CustomerName AS '고객명',  City AS '도시',  Country AS '국가'FROM Customers WHERE  City = 'London' OR Country = 'Mexico'ORDER BY CustomerName LIMIT 0, 5;`

위의 명령문을 분석해보자면, CustomerId, CustomerName, City, Country를 Customers 테이블로부터 가져오는데 각각 “아이디”, “고객명”, “도시”, “국가”의 이름으로 가져오는것이다.
하지만 조건이 있다. City가 “London” 이거나 Country가 “Mexico”여야한다. 그리고 순서는 CustomerName을 기준으로 오름차순 정렬을 한다.
개수는 0부터 5개를 가져올것이다.
