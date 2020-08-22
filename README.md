# 🔥 SoMa Project - FocuStudy 🔥

> Focus Management Platform with AI and WebRTC 

코로나-19의 확산으로 인해 집에서 공부나 업무를 하는 사람이 많아진 상황인 지금, 집에서는 집중하기가 어렵다는 문제가 제기되고 있다.(설문결과) 이 문제를 해결하고자 집중력을 향상시키는 서비시를 제공하려고 한다. 기존에 존재하던 집중력 관리 서비스들은 그저 타이머의 변형에 불과했다. 자기 관리에 도움이 될 수는 있지만 직접적으로 집중력을 향상하는 데에는 한계가 있었다. 본 프로젝트는 효율적인 시간 활용을 위한 뽀모도로 타이머는 물론, 모션인식을 통해 집중력의 정도를 측정 및 관리해주며, 스트리밍 기능으로 다른 사용자들과 같이 공부할 수 있는 기능을 제공한다.



<img width="1194" alt="스크린샷 2020-08-22 오후 11 51 13" src="https://user-images.githubusercontent.com/46708207/90958968-70812b80-e4d2-11ea-8294-0fddd1c3e1ba.png">


## Quick Start

### Version
```
Tomato % node -v                   
v14.5.0

Tomato % npm -v
6.14.5
```

### Installations

```
Tomato # npm install

    "bcryptjs": "^2.4.3",
    "concurrently": "^5.2.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.28"

Tomato/client # npm install

    "@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.56",
    "@remotemonster/sdk": "^2.6.5",
    "@tensorflow-models/coco-ssd": "^2.1.0",
    "@tensorflow-models/posenet": "^2.2.1",
    "@tensorflow/tfjs": "^2.0.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.2",
    "chart.js": "^2.9.3",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-helmet": "^6.1.0",
    "react-router-dom": "^5.2.0",
    "react-script-tag": "^1.1.2",
    "react-scripts": "3.4.1",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^1.1.1"
```

### Start
```
# npm run dev
```

## Resources

* [Tensorflow coco-ssd](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)

* [Tensorflow posenet](https://github.com/tensorflow/tfjs-models/tree/master/posenet)
* [RemoteMonster SDK](https://remotemonster.com/)