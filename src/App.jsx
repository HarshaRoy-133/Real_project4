import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <table className="timetable">
        <thead>
          <tr>
            <th className="tablehead">Day</th>
            <th className="tablehead">1</th>
            <th className="tablehead">2</th>
            <th className="tablehead">3</th>
            <th className="tablehead">4</th>
            <th className="tablehead">5</th>
            <th className="tablehead">6</th>
          </tr>
          <br></br>
          <tr>
            <th className="tablehead">Monday</th>
            <td>25EC2101E-L - S-2 -RoomNo-C009</td>
            <td>25EC2101E-L - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
            <td>25CS1201E-S - S-2 -RoomNo-C009</td>
            <td>25CS1201E-S - S-2 -RoomNo-C009</td>
          </tr>
<br></br>
          <tr>
            <th className="tablehead">Tuesday</th>
            <td>25MT1205E-L - S-2 -RoomNo-C009</td>
            <td>25MT1205E-L - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
            <td>25CS1201E-S - S-2 -RoomNo-C009</td>
            <td>25CS1201E-S - S-2 -RoomNo-C009</td>
          </tr>
<br></br>
          <tr>
            <th className="tablehead">Wednesday</th>
            <td>25SC1204E-L - S-2 -RoomNo-C009</td>
            <td>25SC1204E-L - S-2 -RoomNo-C009</td>
            <td>25EC2101E-S - S-2 -RoomNo-C009</td>
            <td>25EC2101E-S - S-2 -RoomNo-C009</td>
            <td>25UC1204E-P - S-2 -RoomNo-C009</td>
            <td>25UC1204E-P - S-2 -RoomNo-C009</td>
          </tr>
<br></br>
          <tr>
            <th className="tablehead">Thursday</th>
            <td>25SC1204E-P - S-2 -RoomNo-C009</td>
            <td>25SC1204E-P - S-2 -RoomNo-C009</td>
            <td>25EC2101E-S - S-2 -RoomNo-C009</td>
            <td>25EC2101E-S - S-2 -RoomNo-C009</td>
            <td>25UC1204E-P - S-2 -RoomNo-C009</td>
            <td>25UC1204E-P - S-2 -RoomNo-C009</td>
          </tr>
<br></br>
          <tr>
            <th className="tablehead">Friday</th>
            <td>25MT1205E-P - S-2 -RoomNo-C009</td>
            <td>25MT1205E-P - S-2 -RoomNo-C009</td>
            <td>25CS1201E-P - S-2 -RoomNo-C009</td>
            <td>25CS1201E-P - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
          </tr>
<br></br>
          <tr>
            <th className="tablehead">Saturday</th>
            <td>25MT1205E-P - S-2 -RoomNo-C009</td>
            <td>25MT1205E-P - S-2 -RoomNo-C009</td>
            <td>25CS1201E-P - S-2 -RoomNo-C009</td>
            <td>25CS1201E-P - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
            <td>25SC1204E-S - S-2 -RoomNo-C009</td>
          </tr>



          </thead>
      </table>
    </div>

  )
}

export default App