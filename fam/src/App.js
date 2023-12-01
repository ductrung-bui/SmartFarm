import logo from './logo.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow, faBell, faDroplet, faLightbulb } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header style={{ fontSize: '100px', color: '#7b4425',}}>
        SMART FARM
      </header>
      <div style={{display: "flex"}}>
      <div className="container">
        <div className="blockContent">
          <div className="nhietDo">Nhiệt độ:</div>
          <div className="nhietDo">33.3 C</div>
          <FontAwesomeIcon className='icon' icon={faTemperatureLow} />
        </div>
        <div className="iconContent">
          <div style={{fontSize: "25px"}}>Chuông báo</div>
          <FontAwesomeIcon className='iconBell' icon={faBell} />
          <div>
          <button className='bellButton'>Call</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="blockContent">
          <div className="nhietDo">Độ ẩm:</div>
          <div className="nhietDo">70%</div>
          <FontAwesomeIcon className='icon' style={{color:"blue"}} icon={faDroplet} />
        </div>
        <div className="iconContent">
          <div style={{fontSize: "25px"}}>Đèn chiếu sáng</div>
          <FontAwesomeIcon className='iconLight' icon={faLightbulb} />
          <div style={{gap: "30px"}}>
          <button className='lightButton'>On</button>
          <button className='lightButton'>Off</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
