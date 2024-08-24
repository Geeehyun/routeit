# RouteIt 프로젝트 가이드

---
## 1. 버전기록
> 2024-08-24 장지현 : 초안 작성

## 2. 프로젝트 아키텍처
### Server/DB
- 클라우드 : AWS
- OS : ubuntu
- DB : MariaDB
- CI/CD : 
- Container :
### Backend
- 언어 : Java17
- 프레임워크 : SpringBoot3.?.?
- 빌드도구 : Gradle
### Frontend
- Bootstrap ? Tilewind ???? 
- Vue2 / React?? 
- Thymeleaf ???
### VersionControl / CoWork
- VCS : Git 
- 협업 : Notion

## 3. 프로젝트 구조
### 디렉토리 및 파일 설명
- **`src/main/java/com/routeit`**: Java 소스 코드가 위치한 루트 디렉토리.
    - **`RouteItApplication.java`**: Spring Boot 애플리케이션의 메인 클래스.
    - **`controller`**: HTTP 요청을 처리하는 컨트롤러 클래스들이 위치하는 디렉토리.
      - 모듈 별 패키지 생성하여 사용
    - **`service`**: 비즈니스 로직을 처리하는 서비스 클래스들이 위치하는 디렉토리.
      - 모듈 별 패키지 생성하여 사용
    - **`dto`**:
      - 모듈 별 패키지 생성하여 사용
    - **`domain`**: 데이터베이스 entity 디렉토리
      - 테이블 구조에 따라 기능 별 패키지로 구분 또는 한번에 정리
    - **`repository`**: 데이터베이스와의 상호작용을 처리하는 리포지토리 인터페이스들이 위치하는 디렉토리.
      - 테이블 구조에 따라 기능 별 패키지로 구분 또는 한번에 정리 

- **`src/main/resources`**: 리소스 파일들이 위치한 디렉토리.
    - **`application.yml`**: Spring Boot 애플리케이션의 설정 파일(공통).
    - **`application-local.yml`**: Spring Boot 애플리케이션의 설정 파일(로컬).
    - **`application-product.yml`**: Spring Boot 애플리케이션의 설정 파일(운영).
      - **`templates`**: Thymeleaf와 같은 템플릿 파일이 위치하는 디렉토리.
          - 모듈 별 패키지 생성하여 사용
          - **`index.html`**: 메인 페이지 템플릿.

- **`src/test/java/com/routeit`**: 테스트 소스 코드가 위치한 디렉토리.
- **`build.gradle`**: Gradle 빌드 설정 파일.



