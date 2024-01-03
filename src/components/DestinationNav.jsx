import './Nav.css'


const PlanetNav = ({destination,setDestination})=>{

	return <div className='nav des-nav'>
		<div className='nav-items'>
			<p className={destination===0?'active':''} onClick={()=>{setDestination(0)}}>MOON</p>
			<p className={destination===1?'active':''} onClick={()=>{setDestination(1)}}>MARS</p>
			<p className={destination===2?'active':''} onClick={()=>{setDestination(2)}}>EUROPA</p>
			<p className={destination===3?'active':''} onClick={()=>{setDestination(3)}}>TITAN</p>
		</div>
	</div>
}

export default PlanetNav