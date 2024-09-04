import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Layout from './Layout/Layout'
import Wallets from './Pages/Wallets'

function App() {

  return (
	  <Routes>
		<Route path="/" element={<Layout/>} >
			<Route index element={<Home/>} />
			<Route path='/wallets' element={<Wallets/>} />
		</Route>
		<Route path="/login" element={<Login/>} />
	</Routes>
  )
}

export default App
