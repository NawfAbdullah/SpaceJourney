import {useState} from 'react'
import './styles/Tech.css'
import Nav from '../components/Nav'
import ROCKET from '../images/technology/image-launch-vehicle-portrait.jpg'
import SPACEPORT from '../images/technology/image-spaceport-portrait.jpg'
import CAPSULE from '../images/technology/image-space-capsule-landscape.jpg'

const Tech = ()=>{
 	const [crew,setCrew] = useState(0)
 	const tech =  [
    {
      "name": "Launch vehicle",
      "images": ROCKET,
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": SPACEPORT,
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": CAPSULE,
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
 	
	return <div className='crew'>
		<Nav/>
		<div className=''>
			<h2><span>03 </span> SPACE LAUNCH 101</h2>
			<div className='content'>
				<div className='selector'>
					<p className={crew===0?'active':''} onClick={()=>{setCrew(0)}}>1</p>
					<p className={crew===1?'active':''} onClick={()=>{setCrew(1)}}>2</p>
					<p className={crew===2?'active':''} onClick={()=>{setCrew(2)}}>3</p>
				</div>
				<div className='description'>
					<p>THE TERMINOLOGY...</p>
					<h2>{tech[crew].name}</h2>
					<p>{tech[crew].description}</p>
				</div>
				<div>
					<img src={tech[crew].images}/>
				</div>
			</div>
		</div>
	</div>
}

export default Tech;