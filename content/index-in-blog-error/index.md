---
emoji: 🧢
title: ERROR 85901  GRAPHQL 목록 기능 추가 중 404 에러
date: '2023-07-23 02:00:00'
author: DolmaengC
tags: bug blog error 404
categories: blog
---

[blog](https://dolmaengc.github.io/gatsby-starter-zoomkoding-introduction/)에 의하면 목록을 생성하려면
index.md 파일 마지막에

이걸 추가하라해서 추가하니깐 404 error 발생

```
```toc```
```

-> 

```
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
```
# 제목 1
## 제목 2
### 제목 3
#### 제목 4

toc이 목록을 만들어주는데 #으로 만든 제목 기준인거 같다.
그래서 #없는 index.md 파일에 넣으면 post 페이지 전체가 404 error 뜨는거였음ㅋㅋ
