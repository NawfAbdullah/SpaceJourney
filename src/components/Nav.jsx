import './Nav.css'
import Logo from '../images/shared/logo.svg'
import {useNavigate} from 'react-router-dom'

const Nav = ()=>{
	let navigate = useNavigate()
	const pathname = window.location.pathname
	console.log(pathname)
	return <div className='nav'>
		<div className='main-logo'>
			<img src={Logo}/>
		</div>
		<hr className='rule'/>
		<div className='nav-items'>
			<p className={pathname==='/'?'active':''} onClick={()=>{navigate('/')}}>00 Home</p>
			<p className={pathname==='/destination'?'active':''} onClick={()=>{navigate('/destination')}}>01 Destination</p>
			<p className={pathname==='/crew' ?'active':''}  onClick={()=>{navigate('/crew')}}>02 Crew</p>
			<p className={pathname==='/tech'?'active':''}  onClick={()=>{navigate('/tech')}}>03 Technology</p>
		</div>
	</div>
}

export default Nav