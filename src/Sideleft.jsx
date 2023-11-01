import profilepic from './assets/profile3.jpg'
function Sideleft() {

    return(
        <div className="Slideleft">
            <img src={profilepic}></img>

            <div className='Contact'>
                <h3 className="titreleft">CONTACT</h3>
                <p className="pleft">
                    Avenue Ibn Sina B. P , Rabat <br /><br />
                    +212 716 241 495<br /><br />
                    <a className="email" href="mailto:amine450games@gmail.com">amine450games@gmail.com</a><br /><br />
                    www.asnet.co
                <hr></hr>
                </p>
            </div>
            <div className='Languages'>
                <h3 className="titreleft">LANGUAGES</h3>
                    <ul>
                        <li>French</li>
                        <li>Arabic</li>
                        <li>English</li>
                        <hr></hr>
                    </ul>
                
            </div>
            <div className='Skills'>
                <h3 className="titreleft">SKILLS</h3>
                <ul>
                    <li>Microsoft office</li>
                    <li>HTML /CSS/ JAVASCRIPT</li>
                    <li>PYTHON / C </li>
                    <hr></hr>
                </ul>
            </div>       
        </div>
    );
  }
  
  export default Sideleft