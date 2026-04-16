---
title: "예시: Hugo 초기 설정에서 확인한 점"
date: 2026-04-17T00:10:00+09:00
draft: false
description: "초기 환경 세팅 중 확인한 사항을 간단히 기록했다."
tags: ["setup", "hugo"]
categories: ["troubleshooting"]
---

## 증상

로컬 환경에 `git`과 `hugo`가 기본 설치되어 있지 않았다.

## 원인

초기 Windows 환경이라 개발 도구가 비어 있었다.

## 해결 방법

사용자 홈 디렉터리에 포터블 Git과 Hugo Extended를 설치했다.

## 메모

로컬 빌드와 GitHub Actions 배포를 기준으로 맞춰 두면 재현이 쉽다.
