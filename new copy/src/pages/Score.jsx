import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import IdentityNavbar from '../components/IdentityNavbar';
import Massage from '../components/Message';
import './../assets/css/pages/score.css';

export default function score() {
  const location = useLocation();
  const { score } = location.state || {};
  if (score === undefined) {
    return (
      <div>
        <Navbar title="Score">
          <IdentityNavbar />
        </Navbar>
        <div className="main-score-container">
          <Massage massage="No score available" />
        </div>
      </div>
    );
  }
  return (
  <>
    <Navbar title="Score">
        <IdentityNavbar />
      </Navbar>
      <div className="main-score-container">
        <Massage massage="Your Score Is">
          <div className="score-box">{score.toFixed(2)}</div>
        </Massage>
        <Massage massage="Congratulations You Passed The Exam" />
        <button className='custom-btn'>Review your answer</button>
      </div>
  </>
  )
}