import React from 'react'
import CreateUser from '../components/CreateUser'
import Login from '../components/Login'
import { useState } from 'react'

function Landing() {
  const [view, setView] = useState(0);
  
  return (
    <>
    {view === 0 ? <><Login/><button onClick={()=>setView(1)}>Create new Account</button></> :<> <CreateUser/><button onClick={()=>setView(0)}>Login existing account </button></>}
    </>
  )
}
  
export default Landing
