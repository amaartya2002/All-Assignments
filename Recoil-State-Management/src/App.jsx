import {RecoilRoot , useRecoilValue} from "recoil"
import { networkAtom , jobsAtom , notificationAtom , messaagingAtom, totalNotificationSelector} from "./atom"

function App() {


  return (

    <RecoilRoot>
      <Buttons></Buttons>
    </RecoilRoot>
   
  )
}


function Buttons(){

  const networkNotificationsCount = useRecoilValue(networkAtom)
  const jobsNotificationsCount = useRecoilValue(jobsAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messaagingAtomCount = useRecoilValue(messaagingAtom)
  const allNotifications = useRecoilValue(totalNotificationSelector)



  return (

   <div>
     <button>Home</button>
    <button>My network ({networkNotificationsCount > 100 ? "99+" : networkNotificationsCount})</button>
    <button>Jobs ({jobsNotificationsCount})</button>
    <button>Messages ({messaagingAtomCount})</button>
    <button>Notifications ({notificationAtomCount})</button>
    <button>Me ({allNotifications})</button>
   </div>
  )
}

export default App
