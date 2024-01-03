import {useState} from 'react'
import './styles/Destination.css'
import Nav from '../components/Nav'
import Dog from '../images/crew/image-douglas-hurley.png'
import Mark from '../images/crew/image-mark-shuttleworth.png'
import Victor from '../images/crew/image-victor-glover.png'
import Ansari from '../images/crew/image-anousheh-ansari.png'

const Destination = ()=>{
 	const [crew,setCrew] = useState(0)
 	const crews =[
    {
      "name": "Douglas Hurley",
      "images": Dog,
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": Mark,
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": Victor,
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images":Ansari,
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]
	return <div className='crew'>
		<Nav/>
		<div className=''>
			<h2><span>02</span>MEET OUR CREW</h2>
			<div className='content'>
				<div className='description'>
						<h2 className='role'>{crews[crew].role}</h2>
					  <h1>{crews[crew].name}</h1>

					  <p>{crews[crew].bio}</p>
					  
				</div>
				<img src={crews[crew].images} alt='123'/>
			</div>
			<div className='selector'>
				<p className={crew===0?'active':''} onClick={()=>{setCrew(0)}}></p>
				<p className={crew===1?'active':''} onClick={()=>{setCrew(1)}}></p>
				<p className={crew===2?'active':''} onClick={()=>{setCrew(2)}}></p>
				<p className={crew===3?'active':''} onClick={()=>{setCrew(3)}}></p>
			</div>
		</div>
	</div>
}

export default Destination;

