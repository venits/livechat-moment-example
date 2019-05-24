import React, {useEffect} from 'react';
import LiveChat from "./widget-sdk";

const App = () => {
  useEffect( ()=> {
    (async ()=>{
      await LiveChat.init();
    })();
  });

  const sendMoment = async () => {
    await LiveChat.sendCards({
      title: "Example Moment",
      subtitle: "Example moment moment",
      image: {
        url: "https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
      },
      buttons: [
        {
          type: "webview",
          webview_height: "full",
          text: "Open Moment",
          value: "https://example.com",
          postback_id: "action_yes"
        }
      ]
    });
  };

  return (
    <div>
      <p>
        Example app for sending LiveChat moment
      </p>
      <button onClick={sendMoment}>
        Send Moment
      </button>
    </div>
  );
};



export default App;
