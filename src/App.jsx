import './App.css'
import Header from './Component/Header/Header'
import About from './Component/About/About'
import Technology from './Component/Technology/Technology'
import Dashboard from './Dashboard/Dashboard'
import Info from './Component/Info/Info'
import SkillBar from './Component/SkillBar/SkillBar'
import Projects from './Component/Projects/Projects'
import Desing from './Component/Desing/Desing'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <>


      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/4 ">
          <div className='md:fixed md:w-1/4'>
          <Dashboard></Dashboard>
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4">
          <Header></Header>
          <div className='border border-sky-500'>
          </div>
          {/* <About></About> */}
          <Info></Info>
          <Technology></Technology>
          <SkillBar></SkillBar>
          <Projects></Projects>
          <Desing></Desing>
          {/* <Contact></Contact> */}
          <Footer></Footer>
        </div>
      </div>


    </>
  )
}

export default App
