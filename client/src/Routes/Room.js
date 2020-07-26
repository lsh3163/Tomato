import React, { Component } from 'react'

const __html = require('./Conference.html');
const template = { __html: __html };

export default class Room extends Component {
    render() {
        return ( <div dangerouslySetInnerHTML={template} /> );
    }
}


// import React, { Component } from 'react'

// export default class extends Component {
//     render() {
//         return (
//             <div>
//                 <ul></ul>
//                 <div>
//                     <div>
//                         <nav>
//                             <buttonn>
//                                 <i></i>
//                             </buttonn>
//                             <h3>Tomato Study</h3>
//                         </nav>
//                         <div>
//                             <h4>How to Use</h4>
//                             <li>
//                                 Enter 클릭시 'remon' 이라는 conference Room 에 접속. Leave 클릭시 방을 떠납니다.
//                             </li>
//                             <br />
//                             <div>
//                                 <div>
//                                     <div>
//                                         <div>
//                                             <div>
//                                                 <h6>Other Video</h6>
//                                             </div>
//                                             <div>
//                                                 <main>
//                                                     <div></div>
//                                                 </main>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div>
//                                             <div>
//                                                 <h6>Local Video</h6>
//                                             </div>
//                                             <main>
//                                                 <video
//                                                     className="myVideo"
//                                                     autoPlay
//                                                     muted
//                                                     controls
//                                                     playsInline
//                                                 ></video>
//                                                 <h6>Waiting</h6>
//                                                 <div>
//                                                     <div>
//                                                         <span>
//                                                             <a
//                                                                 href="#"
//                                                             >
//                                                             Enter
//                                                             </a>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </main>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
//                         <script src="https://cdn.jsdelivr.net/npm/@remotemonster/sdk"></script>
//                         <script>
//                             const enterBtn = document
//                         </script>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
