import React, {useEffect, useState} from "react";
import "./App.css"
import bgb from './bgbutton.jpg'
import bgh from './bghappy.jpg'
import bgs from './bgsad.jpg'

function App() {

  let currentTime = Date.now()
  const [op, setOp] = useState(0)
  const [disp, setDisp] = useState("")
  const [line, setLine] = useState("")
  const [showHappy, setShowHappy] = useState(false)
  const [showSad, setShowSad] = useState(false)
  const [img, setImg] = useState(bgb)

  useEffect(() => {
    if (op === 1) {
      fetch("/GetHappy", {method: "POST"}).then(
        res => res.json()
      ).then(res => setDisp(res.text))
      fetch("/Happy")
      setShowHappy(true)
      setImg(bgh)
    } else if (op === 2) {
      fetch("/GetSad", {method: "POST"}).then(
        res => res.json()
      ).then(res => setDisp(res.text))
      fetch("/Sad")
      fetch("/GetMessage", {method: "POST"}).then(
        res => res.json()
      ).then(res => setLine(res.text))
      setShowSad(true)
      setImg(bgs)
    }
  }, [op])


  return (
    <div style={{backgroundImage: `url(${img})`, backgroundPosition:"center"
      , backgroundSize: "cover", backgroundRepeat:"no-repeat",height:"100vh"}}>
      {!showHappy && !showSad ?
        <h1>How <br/>are you <br/>feeling now?</h1> : null
      }

      {showHappy ?
        <div>
          <h2>{disp}</h2><h3>people are also feeling happy</h3>
          <h3>want to share some happiness with the ones that are not feeling so
            good?</h3>
        </div>
        : null}
      {showSad ?
        <div>
          <h2>{disp}</h2> <h4>people shares a bad day with you. Cheer up! Here is a word from a kind
            stranger: </h4>
          <h4>{line}</h4>
        </div>
        : null}
      {!showHappy && !showSad ?
        <button className="_button" id="happy" onClick={() => setOp(1)}>I am happy</button> : null}
      {!showHappy && !showSad ?
        <button className="_button" id="sad" onClick={() => setOp(2)}>I'm depressed</button> : null}
    </div>
  );
};

export default App;
