import React, { useState } from 'react';
import './App.css';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const App = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    return (
      <div>
      <h1 className="Head"><i>Emoji searching Using Reactjs</i></h1>
        <div className="div-1">
          <div className="div-2">
            <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK}/>
          </div>
            { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji}/>}
        </div>
        </div>
    );
};

const EmojiData = ({chosenEmoji}) => (
  <div className="div-3">
    <br></br>
    <br></br>
    <hr></hr>
    <strong>Names:</strong> {chosenEmoji.names.join(', ')}<br/>
    <strong>Symbol:</strong> {chosenEmoji.emoji}<br/>
  </div>
);

export default App;