import Remon from "@remotemonster/sdk";

const initConference = () => {
  const enterBtn = document.querySelector("#enterBtn");
  const otherVideos= document.getElementById('otherVideos');

  let isConnected = false;
  let remon;
  let remonRoom=[];

  const key = "1234567890";
  const serviceId = "SERVICEID1";

  // please register your own service key from remotemonster site.
  let config = {
    credential: {
      key: key,
      serviceId: serviceId,
      wsurl : "wss://signal.remotemonster.com/ws",
      resturl : "https://signal.remotemonster.com/rest",
    },
    view: {
      remote: "#remoteVideo",
      local: "#myVideo"
    },
    media: {
      video: {
        width: { min: 160, max: 320 },
        height: { min: 120, max: 240 },
        frameRate: { min: 8, max: 30 },
        maxBandwidth: 500,
        codec: 'H264'
      },
      audio: true
    }
  };
  const videoAttrs = {
    className : "remote-video center w-320 h-240",
    autoPlay : true,
    muted : true,
    controls: true,
    playsInine: true,
    style :"z-index:1;background: rgba(0, 0, 0, 0.5); width: 300px;"
  }
  const listener = {
    onConnect(chid) {
      console.log(`remon.listener.onConnect ${chid} at listener`);
    },
    onComplete() {
      console.log(`remon.listener.onComplete: ${remon.getChannelId()} `);
      remonRoom[remon.getChannelId()] = true;
    },
    onDisconnectChannel() {
      // is called when other peer hang up.
      remon.close();
      isConnected = false;
    },
    onClose() {
      // is called when remon.close() method is called.
      console.log(`remon.listener.onClose: ${remon.getChannelId()}`);
    },
    onError(error) {
      console.log(`remon.listener.onError: ${remon.getChannelId()} ${error}`);
    },
    onStat(result) {
      // console.log(`EVENT FIRED: onStat:  ${JSON.stringify(result)}`);
    },
    onRoomEvent(result){
      //join
        switch (result.event) {
          case 'join':
              if(!remonRoom[result.channel.id]){
                remonRoom[result.channel.id] = true;
                  let newVideo = document.createElement('video')
                  videoAttrs.id = result.channel.id.replace(":","-");
                  Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]))
                  config.view.remote = `#${newVideo.id}`
                  newVideo.remon = new Remon({ config })
                  otherVideos.appendChild(newVideo)
                  newVideo.remon.joinCast(newVideo.id.replace("-",":"))
              }
            break;
          case 'leave':
              if(remonRoom[result.channel.id] && result.channel.id !== remon.getChannelId()){
                let video = document.getElementById(result.channel.id.replace(":","-"));
                otherVideos.removeChild(video);
                delete remonRoom[result.channel.id]
              }
            break;
        }
      console.log(`EVENT FIRED: onRoomEvent channel Id : ${remon.getChannelId()}`)
      console.log(`EVENT FIRED: onRoomEvent: ${JSON.stringify(result)}`)
    }
  };
  async function start() {
    if (isConnected) { // 방에 참여하고 있을 때 
      isConnected = false;
      document.querySelector('#enterBtn').innerHTML = "Enter";
      Object.keys(remonRoom).forEach(function(id){
        if( id !== remon.getChannelId()){
          let video = document.getElementById(id.replace(":","-"));
          if(video && video.remon){
            otherVideos.removeChild(video);
          }
        }
        delete remonRoom[id];
      })
      remon.close()
    } 
    else { // 방에 참여하고 있지 않을 때
      isConnected = true;
      document.querySelector('#enterBtn').innerHTML = "leave"; // 들어왔으니까 Leave로 변경
      remon = new Remon({ config, listener }); // create Remon object with config object and listener object.
      await remon.createRoom("remn") // Create a conference call room with a room id.
      let participants = await remon.fetchRooms("remn"); // 방의 참여자 목록 조희, 참여자 목록을 담은 배열을 리턴함
      // console.log(participants, "------------------");
      participants.forEach(async function(participant){
        if(!remonRoom[participant.id]){
          remonRoom[participant.id] = true;
          let newVideo = document.createElement('video'); // 내가 참여하면 다른 사람의 비디오를 생성하고 재생.
          // console.log(participant.id)
          // console.log("What is videoAttrs's id ??", videoAttrs.id);
          videoAttrs.id =  participant.id.replace(":","-");
          // console.log("What is videoAttrs's id ??", videoAttrs.id);
          Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]))
          config.view.remote = `#${newVideo.id}`
          newVideo.remon = new Remon({ config })
          otherVideos.appendChild(newVideo)
          await newVideo.remon.joinCast(newVideo.id.replace("-",":"));
        }
      })
    }
  }

  enterBtn.addEventListener("click",
    evt => {
      start();
      evt.preventDefault();
    },
    false
  );
}

export default initConference;