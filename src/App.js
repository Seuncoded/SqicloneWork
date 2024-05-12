import './App.css';
import frame from "./images/sqi.jpeg"

function App() {
  return (
    <div className="section1">

      <div className="secfirstBar">

        <div className="imga">
          <img className='logo' src={frame} alt="" />
        </div>

        <div className='navbar'>
          <ul>
            <li className='dropdown'><a href="#">About</a>
              <div class="dropdown-content" id='downlist'>
                <a href="#">Our Story</a>
                <a href="#">Our Team</a>
                <a href="#">Campus Info</a>
              </div>
            </li>
            <li className='dropdown'><a href="#">Programmes</a>


              <div class="dropdown-content" id='downlist'>
                <a href="#">National Innovation Diploma</a>
                <a href="#">Professional Disploma Program</a>
                <a href="#">Executive Professional Certificate</a>
                <a href="#">Programme</a>
              </div>
            </li>
            <li className='dropdown'><a href="#">Admissions</a>
              <div class="dropdown-content" id='downlist'>
                <a href="#">Apply for a Programme</a>
                <a href="#">Mode of Study</a>
                <a href="#">Tuition</a>
                <a href="#">FAQ</a>
              </div>
            </li>
            <li className='dropdown'><a href="#">E-portal</a>
              <div class="dropdown-content" id='downlist'>
                <a href="#">Student</a>
                <a href="#">Staff</a>
              </div>
            </li>
            <li className='dropdown'><a href="#">SQI Scholarship</a></li>
            <li className='dropdown'><a href="#">News</a></li>
          </ul>
        </div>

        <div className="iconfile">
        <button><i class="fa-solid fa-bars"></i></button>
          </div>


      </div>


    </div>
  );
}

export default App;
