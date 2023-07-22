---
emoji: 🧢
title: 개츠비(Gatsby) 블로그 만들기 1일차
date: '2023-07-21 01:00:00'
author: DolmaengC
tags: blog gatsby theme 개츠비 테마
categories: 블로그
---

gatsby 블로그를 만들어봤습니다!!

블로그 만드는 방법은 
https://zoomkoding.com/gatsby-github-blog/
https://hislogs.com/make-gatsby-blog/ 
두 블로그 참고했습니다.

로컬로 실행 시켜보니 react-helmet이 없다는 애러가 나와서 
 ![react-helmet-error.png](react-helmet-error.png)

 ```
 npm install react-helmet
 ```
 로 해결했습니다
 
 로컬에서 실행해보기
 ```
 yarn gatsby develop
 ```

 이미지가 깨지거나 오류가 있으면
 ```
 yarn gatsby clean
 ```
 을 실행시켜주면 된다고 합니다.

 배포
```
npm run deploy
```


 <Utterances repo='DolmaengC/DolmaengC.github.io' path="path" />