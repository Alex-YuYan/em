import React, {useEffect, useState} from "react";
import "./App.css"
import bgb from './bgbutton.jpg'
import bgh from './bghappy.jpg'
import bgs from './bgsad.jpg'


function App() {

  const [op, setOp] = useState(0)
  const [disp, setDisp] = useState("")
  const [line, setLine] = useState("")
  const [showHappy, setShowHappy] = useState(false)
  const [showSad, setShowSad] = useState(false)
  const [img, setImg] = useState(bgb)
  const [message, setMessage] = useState("")
  const [user_id, setUser_id] = useState("")

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
    } else if (op===3) {
      let formData = new FormData()
      formData.append('user_id', user_id)
      formData.append('message',message+" --from "+user_id)
      fetch("/PostMessage", {method: "POST", body: formData}).then(
        res => res.json()
      ).then(res => console.log(res))
    }
  }, [op])

  const handleSubmit = (event) => {
    event.preventDefault();
    setOp(3)
  }


  return (
    <div style={{backgroundImage: `url(${img})`, backgroundPosition:"center"
      , backgroundSize: "cover", backgroundRepeat:"no-repeat",height:"100vh"}}>
      {!showHappy && !showSad ?
        <h1>How <br/>are you <br/>right now?</h1> : null
      }

      {showHappy && op!==3 ?
        <div>
          <h2>{disp}</h2><h3>people are also feeling awesome right now.</h3>
          <h3>Will you kindly share some happiness with the ones that are not feeling so
            good?</h3>
          <form onSubmit={handleSubmit}>
            <label>Your alias: <br/>
              <input
                type="text"
                value={user_id}
                onChange={(e) => setUser_id(e.target.value)}
              />
            </label>
            <label><br/>Your message: <br/>
              <textarea
                rows="4" cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <div>
              <button className="_button" id="formsub" type="submit">Submit</button>
            </div>
          </form>
        </div>
        : null}
      {
        op===3 ? <div>
          <h3>{user_id}, Thank you for your kind message. Your happiness could be exclusive to yourself, but you are just a wonderful person.
            Meanwhile, there is someone, somewhere in this world, reading your lovely yet powerful words. You made his/her day. You made our day.</h3>
        </div> : null
      }
      {showSad ?
        <div>
          <h2>{disp}</h2> <h4>people are also having a bad day. But we do have someone who wrote something especially for you, to make you feel better:
            </h4>
          <h4>{line}</h4>
        </div>
        : null}
      {!showHappy && !showSad && op!==3 ?
        <button className="_button" id="happy" onClick={() => setOp(1)}>Wonderful.</button> : null}
      {!showHappy && !showSad && op!==3 ?
        <button className="_button" id="sad" onClick={() => setOp(2)}>Not so good.</button> : null}
    </div>
  );
};

export default App;
