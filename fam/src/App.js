import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faBell,
  faDroplet,
  faLightbulb,
  faBellSlash
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);
  const [datass, setDatass] = useState([]);
  const [light, setLight] = useState(false);
  const [bell, setBell] = useState(false);

  // Lấy data từ fake API
  useEffect(() => {
    const getDatas = async () => {
      try {
        const res = await axios.get("http://localhost:3000/source1");
        const ress = await axios.get("http://localhost:3000/source2");
        // console.log(res.data)
        setDatas(res.data);
        setDatass(ress.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    console.log(datas, datass);

    getDatas();
  }, []);

  return (
    <div className="App">
      <header style={{ fontSize: "100px", color: "#7b4425" }}>
        SMART FARM
      </header>
      <div style={{ display: "flex" }}>
        {datas.map((data, i) => {
          return (
            <div className="container">
              <div className="blockContent">
                <div className="nhietDo">{data.title}</div>
                <div className="nhietDo">{data.value}</div>
                <FontAwesomeIcon className="icon" icon={faTemperatureLow} />
              </div>
              <div className="iconContent">
                <div style={{ fontSize: "25px" }}>{data.icon}</div>
                <FontAwesomeIcon className="iconBell" icon={bell == false ? faBellSlash : faBell} />
                <div>
                  <button onClick={() => {
                    setBell(true)
                  }} className="bellButton">Call</button>
                </div>
              </div>
            </div>
          );
        })}
        {datass.map((data, i) => {
          return (
            <div className="container">
              <div className="blockContent">
                <div className="nhietDo">{data.title}</div>
                <div className="nhietDo">{data.value}</div>
                <FontAwesomeIcon
                  className="icon"
                  style={{ color: "blue" }}
                  icon={faDroplet}
                />
              </div>
              <div className="iconContent">
                <div style={{ fontSize: "25px" }}>{data.icon}</div>
                <FontAwesomeIcon className="iconLight" style={{color: light == false ? "black" : "yellow"}} icon={faLightbulb} />
                <div style={{ gap: "30px" }}>
                  <button className="lightButton" onClick={() => {
                    setLight(true)
                  }}>On</button>
                  <button className="lightButton" onClick={() => {
                    setLight(false)
                  }}>Off</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
