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

2020.07.30

우선 RemoteMonster에서 제공하는 기본 코드를 React에 적용했다. Local에서 하나는 기본 Chrome으로 접속했고, 하나는 Chrome 시크릿 모드로 접속을 했다. 서로 화면이 잘 나왔다.

그리고 기본 Chrome과 시크릿 Chrome으로 localhost:3000으로 접속한 상태에서 이 코드를 그대로 AWS EC2 인스턴스에 올리고 필요한 Module들을 설치하고 서버를 실행했다. 

결론부터 얘기하면 EC2에서는 영상 송출을 실패했다. EC2에서 실행한 서버에서는 localhost:3000에서 송출한 영상을 볼 수 있었다. 사실 이것도 어떻게 서로 왔다리 갔다리 하는지 모르겠다.

아무튼 뭔가 내가 아는 선에서 생각을 했을때 이상한 일들이 벌어지고 있다. 