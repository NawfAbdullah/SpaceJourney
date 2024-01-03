import {useState} from 'react'
import './styles/Destination.css'
import Nav from '../components/Nav'
import Moon from '../images/destination/image-moon.png'
import Mars from '../images/destination/image-mars.png'
import Europa from '../images/destination/image-europa.png'
import Titan from '../images/destination/image-titan.png'
import PlanetNav from '../components/DestinationNav'


const Destination = ()=>{
 	const [destination,setDestination] = useState(0)
 	const destinations =[
    {
      "name": "Moon",
      "images": Moon,
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": Mars,
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images":Europa,
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images":Titan,
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]
	return <div className='destination'>
		<Nav/>
		<div className=''>
			<h2><span>01</span> PICK YOUR DESTINATION</h2>
			<div className='content'>
				<img className='planet-image' src={destinations[destination].images} alt='123'/>
				<div className='description'>

					<PlanetNav destination={destination} setDestination={setDestination}/>

					  <h1>{destinations[destination].name}</h1>

					  <p>{destinations[destination].description}</p>
					  <hr/>
					  <div className='dist-time'>
						  <div>
						  <h2 className='avg'>Avg distance</h2>
						  <p className='details'>{destinations[destination].distance}</p>
						  </div>
						  <div>
						  <h2 className='avg'>Est travel time</h2>
						  <p className='details'>{destinations[destination].travel}</p>
						  </div>
					  </div>
				</div>
			</div>
		</div>
	</div>
}

export default Destination;




