import './styles/Home.css'
import Nav from '../components/Nav.jsx'

const Home = ()=>{
	return <div className='home'>
		<Nav />
		<div className='home-content'>
		<div className='dialog'>
			<div>	
			<p>So, you want to travel to</p>
			  <h1>SPACE</h1>
			  <p>
			  Let’s face it; if you want to go to space, you might as well genuinely go to 
			  outer space and not hover kind of on the edge of it. Well sit back, and relax 
			  because we’ll give you a truly out of this world experience!</p>
			 </div>
		</div>

  		<div className='explore'><p>Explore</p></div>
		</div>
	</div>
}

export default Home;