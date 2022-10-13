import "./App.css";
import axios from "axios";
import React from "react";
import volk1 from "./img/2-278.jpg";
import volk2 from "./img/O3p3p1651811755.jpg";
import volk3 from "./img/15259645_144_0_1424_1280_1920x0_80_0_0_9506a48af40eb81f05e789e64e467ac7.jpg";
import belka1 from "./img/squirrel1.jpg";
import belka2 from "./img/sq2.jpg";
import belka3 from "./img/sq3.jpg";

const masVolk = [volk1, volk2, volk3];
const masBelk = [belka1, belka2, belka3];

function App() {
  const [state, setsSate] = React.useState(0);
  const [inputValue, changeInputValue] = React.useState("");
  const [volkNow, drVolk] = React.useState(0);
  const [belkaNow, drBelka] = React.useState(0);

  // const increase = () => {
  //     let current = state
  //     setsSate(++current)
  // }

  // const decrease = () => {
  //     let current = state
  //     setsSate(--current)
  // }

  // const ok = () => {
  //     setsSate(state + Number(inputValue))
  // }

  //   const changeValue = (event) => {
  //     changeInputValue(event.target.value);
  //   };
  const nextSlideVolk = () => {
    drVolk((current) => {
      if (current < masVolk.length - 1) {
        return ++current;
      }
      return 0;
    });
  };
  const prevSlideVolk = () => {
    drVolk((current) => {
      if (current === 0) {
        return (current = masVolk.length - 1);
      }
      if (current <= masVolk.length - 1) {
        return --current;
      }
    });
  };
  const nextSlideBelka = () => {
    drBelka((current) => {
      if (current < masBelk.length - 1) {
        return ++current;
      }
      return 0;
    });
  };
  const prevSlideBelka = () => {
    drBelka((current) => {
      if (current === 0) {
        return (current = masBelk.length - 1);
      }
      if (current <= masBelk.length - 1) {
        return --current;
      }
    });
  };
  console.log(window.location.pathname);

  if (window.location.pathname === "/bolshoi-volk")
    return (
      <div>
        {/*<h1>{state}</h1>*/}
        {/*<input type={"number"} onChange={(event) => changeValue(event)}/>*/}
        {/*<button onClick={increase}>+</button>*/}
        {/*<button onClick={decrease}>-</button>*/}
        {/*<button onClick={ok}>OK</button>*/}
        {/*<button onClick={startCounter}>Start</button>*/}
        {/*<button onClick={stopCounter}>Stop</button>*/}
        <div className="header">
          <h2>Хочешь увидеть белок?</h2>
          <a href="/lovkaya-belka">Да!</a>
        </div>
        <div className="slider">
          <div className="sliders">
            <div className="slide1">
              <img src={masVolk[volkNow]} />
            </div>
          </div>
          <div className="buttons">
            <button onClick={prevSlideVolk}>Prev Volk</button>
            <button onClick={nextSlideVolk}>Next Volk</button>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div>
        <div className="header">
          <h2>Хочешь увидеть волков?</h2>
          <a href="/bolshoi-volk">Да!</a>
        </div>
        <div className="slider">
          <div className="sliders">
            <div className="slide1">
              <img src={masBelk[belkaNow]} />
            </div>
          </div>
          <div className="buttons">
            <button onClick={prevSlideBelka}>Prev Belka</button>
            <button onClick={nextSlideBelka}>Next Belka</button>
          </div>
        </div>
      </div>
    );
}

export default App;
