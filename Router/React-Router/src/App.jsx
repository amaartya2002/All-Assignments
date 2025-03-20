import {BrowserRouter , Routes , Route} from "react-router-dom"
import React from "react"
// import Landing from './components/Landing'
//import Dashboard from './components/Dashboard'
import Approutes from "./components/Approutes"

const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {


  return (

    <div>

      {/*
           
        ONE Way to do this but it hard reloads the site again and again

       <div>
        <button onClick={() => {
          window.location.href = '/'
        }
        }
        >Landing</button>
        <button onClick={() => {
          window.location.href ='/dashboard'
        }
        }>Dashboard</button>
      </div> 
      */
      }

      <BrowserRouter>

      <Approutes></Approutes>



        <Routes>

          <Route path="/" element={<Landing></Landing>} ></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

        </Routes>

    </BrowserRouter>

    </div>


    
  )
}

export default App
