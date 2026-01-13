import AboutUs from "../components/AboutUs"
import Banner from "../components/Banner"
import Banner2 from "../components/Banner2"
import ClientReview from "../components/ClientReview"
import Footer from "../components/Footer"
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
      <ClientReview/>
      <Banner2/>
      <Footer/>
      
    </div>
  )
}

export default Home
