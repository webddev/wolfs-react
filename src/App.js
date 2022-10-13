import './App.css';
import axios from "axios";
import React from 'react'
import volk1 from './img/2-278.jpg'
import volk2 from './img/O3p3p1651811755.jpg'
import volk3 from './img/15259645_144_0_1424_1280_1920x0_80_0_0_9506a48af40eb81f05e789e64e467ac7.jpg'

const masVolk = [volk1, volk2, volk3]

function App() {
    const [state, setsSate] = React.useState(0)
    const [inputValue, changeInputValue] = React.useState('')
    const [volkNow, drVolk] = React.useState(0)

    const increase = () => {
        let current = state
        setsSate(++current)
    }

    const decrease = () => {
        let current = state
        setsSate(--current)
    }

    const ok = () => {
        setsSate(state + Number(inputValue))
    }

    const changeValue = (event) => {
        changeInputValue(event.target.value)
    }
    const nextSlide = () => {
        drVolk((current)=> {
            if (current < masVolk.length -1) {
                return ++current
            }
            return 0
        })
    }
    const prevSlide = () => {

    }

    console.log(window.location.pathname)
    return (
        <div>
            {/*<h1>{state}</h1>*/}
            {/*<input type={"number"} onChange={(event) => changeValue(event)}/>*/}
            {/*<button onClick={increase}>+</button>*/}
            {/*<button onClick={decrease}>-</button>*/}
            {/*<button onClick={ok}>OK</button>*/}
            {/*<button onClick={startCounter}>Start</button>*/}
            {/*<button onClick={stopCounter}>Stop</button>*/}

            <div className='slider'>
                <div className='sliders'>
                    <div className='slide1'>
                        <img src={masVolk[volkNow]}/>
                    </div>
                </div>
                    <div className='buttons'>
                        <button onClick={nextSlide}>Next Volk</button>
                        <button onClick={prevSlide}>Prev Volk</button>
                    </div>
                <a href="/bolshoi-volk">VOLK</a>
            </div>
        </div>
    );
}

export default App;
