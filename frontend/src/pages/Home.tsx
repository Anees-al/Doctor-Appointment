import AboutUs from "../components/AboutUs"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import OurSpeciality from "../components/OurSpeciality"
import TopSpeciality from "../components/TopSpeciality"


const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Banner/>
      <AboutUs/>
      <OurSpeciality/>
      <TopSpeciality/>
    </div>
  )
}

export default Home
