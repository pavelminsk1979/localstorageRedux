import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {plasOneAC} from "./bll/counterReduser";



function App() {
    const value = useSelector<AppStateType,number>(state => state.counter.showValue)
const dispatch = useDispatch()

    const klikHandler = () => {
        dispatch(plasOneAC())
    }

  return (
    <div className="App">
  <h1>{value}</h1>
      <button onClick={klikHandler}>KLIK</button>
    </div>
  );
}

export default App;
