# Tomato with RemoteMonster 

> Concentration Management Online Study With WebRTC([RemoteMonster](https://remotemonster.com/))

## Quick Start

### Git Clone
```
# git clone https://github.com/Koozzi/Tomato.git
```

### Installations

```
Tomato # npm install

create-react-app
express
mongoose
concurrently
nodemon

Tomato/client # npm install

bootstrap
reactstrap
@remotemonster/sdk
react-router-dom
react-helmet
react-script-tag
@material-ui/icons
@material-ui/core
```

### Start
```
# npm run dev
```

## Resources

* [RemoteMonster](https://remotemonster.com/)

## 개발일지

### 2020.07.30
우선 RemoteMonster에서 제공하는 기본 코드를 React에 적용했다. Local에서 하나는 기본 Chrome으로 접속했고, 하나는 Chrome 시크릿 모드로 접속을 했다. 서로 화면이 잘 나왔다.

그리고 기본 Chrome과 시크릿 Chrome으로 localhost:3000으로 접속한 상태에서 이 코드를 그대로 AWS EC2 인스턴스에 올리고 필요한 Module들을 설치하고 서버를 실행했다. 

결론부터 얘기하면 EC2에서는 영상 송출을 실패했다. EC2에서 실행한 서버에서는 localhost:3000에서 송출한 영상을 볼 수 있었다. 사실 이것도 어떻게 서로 왔다리 갔다리 하는지 모르겠다.

아무튼 뭔가 내가 아는 선에서 생각을 했을때 이상한 일들이 벌어지고 있다. 

### 2020.07.31

아직 원인을 파악하지 못했다. 그래도 지금까지 시도한 내용들을 정리해보자.

#### AWS EC2(Ubuntu16.04)에서 React/Node 서버 실행
Ubuntu환경에서 최신 버전(14.0.0) node를 설치하고, 최상위 프로젝트 디렉토리에서 `npm install` 명령어를 입력해서 package.json에 명시되어 있는 모든 module들을 설치했다. 그리고 'client' 디렉토리에서도 똑같이 `npm install` 명령어를 입력해서 package.json에 명시되어 있는 모든 module들을 설치했다. 그리고 `npm run dev` 명령어로 서버 실행.

#### NBP Server(Ubuntu16.04)에서 React/Node 서버 실행
위 과정과 동일

### 2020.07.31

원인을 발견한 것 같다. 보안 문제때문에 실행이 안 되는 걸로 판단이 된다. 그래서 localhost와 https에서만 작동이 되는 것이었다. 

실행을 했을 때, Console에 뜨는 오류를 보고 그 오류를 구글에 검색해서 발견하였다. 

> TypeError: Cannot read property 'getUserMedia' of undefined
 
Console창을 미리 봤었으면 더 빨리 오류를 발견할 수 있었을텐데 많이 아쉽다. 아직 웹 개발 경험이 많이 많이 아주 많이 부족하다. 이러한 기본 자세도 많이 부족하다. 앞으로는 Console창을 켜고 현재 페이지가 잘 돌아가는지, 어떤 오류가 떴는지 확인하는 습관을 가지도록 하자.