# 다익스트라 개념

다익스트라 알고리즘은 최단 경로 알고리즘중 하나이다.

### 최단 경로 알고리즘이란?

- 그래프에서 특정 정점에서 목적지까지 최단 경로를 구하는 알고리즘이다.
- **BFS**, DFS도 최단 경로 알고리즘으로 사용가능하다.
- 대표적인 최단 경로 알고리즘으로 다음과 같은 알고리즘이 이
    - BFS
    - 다익스트라
    - 벨만-포드
    - 플로이드 와샬
- 목적에 따라 적절한 알고리즘을 적용가능

<aside>
💡 BFS, DFS는 그래프의 간선 가중치가 모두 같을때 적합한 최단 경로 알고리즘이다.

</aside>

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F928d68ce-fa10-4019-93bc-b7dfa2f990fb%2FUntitled.png?table=block&id=795157d0-7741-42bf-8bc4-9d3a8cf3d9fb&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=670&userId=&cache=v2)

<aside>
💡 다익스트라는 그래프의 간선 가중치가 각각 다른 경우 적합하다.

</aside>

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F38daa032-3077-40b1-a984-0922a1c0e851%2FUntitled.png?table=block&id=8bddcb90-f583-4309-a963-de10eb63f114&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=610&userId=&cache=v2)

### 다익스트라 알고리즘이란?

- 그래프의 간선의 가중치가 각각 다를때 사용할 수 있는 최단 경로 알고리즘이다.
- 우선순위 큐를 이용하여 만들 수 있다.
- 시간복잡도는 V가 정점의 수, E가 간선의 수일 때 O(E log V)가 걸린다.

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F4ac848f1-8f6f-44be-870d-ff81ab877ebd%2FUntitled.png?table=block&id=f952c60e-0079-4c41-aff3-80bd54dc6083&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=480&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F9c96fb25-e4aa-4f87-b772-759e9c949481%2FUntitled.png?table=block&id=d07a83f9-3d42-4f47-b693-80f75d63bc09&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=480&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F78fce678-92db-4b28-98b6-af2042f1e480%2FUntitled.png?table=block&id=09980e3c-3554-427f-a610-39fc1844d091&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=480&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F1542ff67-e18d-42f6-bee9-e5c3d4882f01%2FUntitled.png?table=block&id=1dd9c62f-faec-42ad-a2cf-e23b56a1ca5f&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=480&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F6880251b-196d-4631-bb09-84f33684b96b%2FUntitled.png?table=block&id=05574d56-a2a1-4408-bbb6-e0babb1ecdb8&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=480&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F8cc6eb0d-9c44-4fb5-a55a-3212bf12f03d%2FUntitled.png?table=block&id=29aaef41-550a-451c-b35f-3616add1b556&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=480&userId=&cache=v2)

![Untitled](https://distinct-boursin-9c6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3cf9fec-22fc-4497-8749-8a20369906be%2F539fed30-6ada-42fc-9549-68a12ef87695%2FUntitled.png?table=block&id=6fed5d53-f0c4-4b93-855f-852586f72ceb&spaceId=d3cf9fec-22fc-4497-8749-8a20369906be&width=480&userId=&cache=v2)

### 다익스트라 알고리즘의 핵심은 **우선순위 큐**!

가중치가 낮은 정점을 계속해서 선택해야하기때문에,우선순위가 높은 요소를 처리하기위해 
 삽입, 삭제마다 정렬이 발생하는 우선순위 큐를 이용한다. 따라서 우선순위 큐를 효과적으로 구현해줄 자료구조 힙을 사용해야한다.

### 알고리즘 정리

1. 시작점을 제외한 모든 정점의 거리를 무한으로 설정한다. 시작점은 0으로 설정
2. 시작점을 선택한다.
3. 선택한 정점에서 갈 수 있는 정점의 거리를 정점(해당 정점까지의 최단 거리)값 + 간선(거리)값으로 갱신
4. 선택한 정점을 방문 처리한다.
5. 이미 방문한 정점과 무한인 정점을 제외하고 가장 최단 거리인 정점을 선택
6. 더 이상 방문할 수 있는 정점이 없을 때 까지 3~5를 반복한다.
7. 도착점의 값을 확인