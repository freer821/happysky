import React from 'react';
class App extends React.Component {
   render() {
      return (
         <video id="video" className="video-js" controls preload="auto" width="640" height="264" data-setup="{}"></video>
      );
   }
}


export default App;