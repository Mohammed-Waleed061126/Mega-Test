import './../assets/css/pages/home.css'
import IdentityNavbar from '../components/IdentityNavbar';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import Massage from '../components/Message';
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='main-home'>
      <Navbar>
        <IdentityNavbar />
      </Navbar>
      <div className='main-home-container'>
        <Massage massage={`Hello Marwan`}/>
        <Massage massage={`Your passing score 's 75%`}/>
        <Massage massage={`Are You Ready`}/>
        <button className='custom-btn text' onClick={() => navigate("/exam")}>Ready Start</button>
      </div>
    </div>
  )
}