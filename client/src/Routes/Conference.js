import Remon from "@remotemonster/sdk";

const initConference = () => {
  const enterBtn = document.querySelector("#enterBtn");
  const otherVideos= document.getElementById('otherVideos');


  let isConnected = false;
  let remon;
  let remonRoom=[];

  const key = "9bb010b1f401295f6d4edd4767cb3f4d5bb686194371aab9c05e1137cceca5b1";
  const serviceId = "38f18ba5d69ea76fb443a57ee1c0dfb8a75e423e6f24f7e94925867c8e6bae96";

  // please register your own service key from remotemonster site.
  let config = {
    credential: {
      key: key,
      serviceId: serviceId,
      wsurl : "wss://signal.remotemonster.com/ws",
      resturl : "https://signal.remotemonster.com/rest",
  },
    view: {
      //remote: "#remoteVideo",
      local: "#myVideo"
    },
    media: {
        video: {
            width: { min: 320, max: 640 },
            height: { min: 240, max: 480 },
            frameRate: { min: 8, max: 30 },
            maxBandwidth: 500,
            codec: 'H264'
        },
        audio: true
    }
  };

  const videoAttrs = {
                  class : "remote-video center w-320 h-240",
                  autoplay : true,
                  muted : true,
                  controls: true,
                  playsinline: true,
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
    if (isConnected) {
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
    } else {
      isConnected = true;
      document.querySelector('#enterBtn').innerHTML = "leave";
      remon = new Remon({ config, listener });
      await remon.createRoom("remon")
      let participants = await remon.fetchRooms("remon");
      participants.forEach(async function(participant){
        if(!remonRoom[participant.id]){
                remonRoom[participant.id] = true;
                  let newVideo = document.createElement('video');
                  videoAttrs.id =  participant.id.replace(":","-");
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




