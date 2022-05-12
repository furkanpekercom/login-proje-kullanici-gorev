import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../src/Components/Login'
import Logout from '../src/Components/Logout'
import Personel from '../src/Components/Personel'
import "./App.css"
import { selectUser } from './features/userSlice'

const App = () => {

    const user = useSelector(selectUser);



  return (
    <div>
        {user ? <Personel/> : <Login />}
    </div>
  )
}

export default App