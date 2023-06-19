import './App.css';
import charimg from './char.png';
import img1 from './wall1.jpg';
import git from './images/github.png'
import linkedin from './images/linkedin.png'
import maill from './images/mail.png'
import test1 from './images/t1.png'
import test2 from './images/t2.png'
import test3 from './images/t3.png'
import test4 from './images/t4.png'
import 'animate.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "animate.css/animate.min.css";
import { useState, useEffect } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    AOS.init({duration: 2000 })
  },[])
  // const [test, settest] = useState(false)
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const [one, setone] = useState(true)
  const [two, settwo] = useState(false)
  const [three, setthree] = useState(false)
  const [four, setfour] = useState(false)
  const [five, setfive] = useState(false)
  const [six, setsix] = useState(false)
  // console.log(testsamp, aa);
  // const testfun=()=>{
  //   settest(!test)
  // }
  const fun1 = ()=>{
    setone(true)
    settwo(false)
    setthree(false)
    setfour(false)
    setfive(false)
    setsix(false)
  }
  const fun2 = ()=>{
    setone(false)
    settwo(true)
    setthree(false)
    setfour(false)
    setfive(false)
    setsix(false)
  }
  const fun3 = ()=>{
    setone(false)
    settwo(false)
    setthree(true)
    setfour(false)
    setfive(false)
    setsix(false)
  }
  const fun4 = ()=>{
    setone(false)
    settwo(false)
    setthree(false)
    setfour(true)
    setfive(false)
    setsix(false)
  }
  const fun5 = ()=>{
    setone(false)
    settwo(false)
    setthree(false)
    setfour(false)
    setfive(true)
    setsix(false)
  }
  const fun6 = ()=>{
    setone(false)
    settwo(false)
    setthree(false)
    setfour(false)
    setfive(false)
    setsix(true)
  }
  return (
    <div>
      <div>

    {/*     page one    */}    
    <div class='new' id='page'>
    <div class="headertags">
      <a id='headd' href='#page'>logesh</a>
      <a id="header1" href='#abou'>About</a>
      <a id="header1" href="#pro">Project</a>
      <a id="header1" href='#cont'>Contact</a>
    </div>
    <div class='header2'>
          <h1 id='fname' className='animation' data-aos='fade-in'>Hi i'm Logeshwaran Elumalai</h1>
          <h1 id='dname' className='animation' data-aos='fade-up'>Just a normal computer science student who likes to code</h1>
    </div>
    </div>



    {/*     page two    */}   
    <div class='new1' id='abou'>
      <div id='about-header' className='animation' data-aos='zoom-in'>About me</div>
    </div>


    {/*     page three   */}   
    <div class='new2' id='pro'>

      <h1 id='projectheader' className='animation' data-aos='zoom-in'>My Projects</h1>

      {/*  box project */}
      <div class='projectsection'>
        <div id="zoom-test1">
        <a href='#ppp' id='project1' className='animation' data-aos='fade-up' onClick={fun1}>
          <div class='project-img1'><img id='img1' src={img1}></img></div>
          <h2>My portfolio<p>Reactjs</p></h2>
          
        </a></div>
        <div id="zoom-test1">
        <a href='#ppp' id='project2' className='animation' data-aos='fade-up'onClick={fun2}>
        <div class='project-img1'><img id='img1' src={img1}></img></div>
        <h2>HaStY-CoM<p>HTML | CSS | Javascript</p></h2>
        </a></div>
        <div id="zoom-test1">
        <a href='#ppp' id='project3' className='animation' data-aos='fade-up' onClick={fun3}>
          <div class='project-img1'><img id='img1' src={test2}></img></div>
          <h2>Reddit meme generator<p>HTML | CSS | Javascript</p></h2>
        </a></div>
        <div id="zoom-test1">
        <a href='#ppp' id='project4' className='animation' data-aos='fade-up' onClick={fun4}>
        <div class='project-img1'><img id='img1' src={test3}></img></div>
        <h2>Image format converter<p>Python | PIL module</p></h2>
        </a></div>
        <div id="zoom-test1">
        <a href='#ppp' id='project5' className='animation' data-aos='fade-up' onClick={fun5}>
          <div class='project-img1'><img id='img1' src={img1}></img></div>
          <h2>Hexaplay<p>unity game engine | C#</p></h2>
        </a></div>
        <div id="zoom-test1">
          <a href='#ppp' id='project6' className='animation' data-aos='fade-up'onClick={fun6}>
          <div class='project-img1'><img id='img1' src={test1}></img></div>
          <h2>system stat monitor<p>python | Reactjs</p></h2>
          </a></div>
          <div id="zoom-test1">
          <a href='#ppp' id='project6' className='animation' data-aos='fade-up'onClick={fun6}>
          <div class='project-img1'><img id='img1' src={test4}></img></div>
          <h2>mr.predictor<p>Python | pygame module</p></h2>
          </a></div>
          <div id="zoom-test1">
          <a href='#ppp' id='project6' className='animation' data-aos='fade-up'onClick={fun6}>
          <div class='project-img1'><img id='img1' src={img1}></img></div>
          <h2>the-game-without-name<p>Python | pygame module</p></h2>
          </a></div>
      </div>

      {/* project display place with images  */}
      <div id='ppp'>
      <div style={{display: one ? 'block' : 'none'}}>
      <div class='projectdet1'>
          <div class='projectdetimgs'>
            <AwesomeSlider>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
            </AwesomeSlider>
          </div>
          <div class='projectdetdes'>ra <br></br>small des frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects</div>
      </div></div>
      <div style={{display: two ? 'block' : 'none'}}>
      <div class='projectdet1'>
          <div class='projectdetimgs'>
            <AwesomeSlider>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
            </AwesomeSlider>
          </div>
          <div class='projectdetdes'>two des frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects</div>
      </div></div>
      <div style={{display: three ? 'block' : 'none'}}>
      <div class='projectdet1'>
          <div class='projectdetimgs'>
            <AwesomeSlider>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
            </AwesomeSlider>
          </div>
          <div class='projectdetdes'>three des frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects</div>
      </div></div>
      <div style={{display: four ? 'block' : 'none'}}>
      <div class='projectdet1'>
          <div class='projectdetimgs'>
            <AwesomeSlider>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
            </AwesomeSlider>
          </div>
          <div class='projectdetdes'>four des frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects</div>
      </div></div>
      <div style={{display: five ? 'block' : 'none'}}>
        <div class='projectdet1'>
          <div class='projectdetimgs'>
            <AwesomeSlider>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
              <div><img src={charimg} alt='noen'></img></div>
            </AwesomeSlider>
          </div>
          <div class='projectdetdes'>five des frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects</div>
      </div></div>
      <div style={{display: six ? 'block' : 'none'}}>
      <div class='projectdet1'>
          <div class='projectdetimgs'>
            <AwesomeSlider>
              <div><img src={img1} alt='noen'></img></div>
              <div><img src={img1} alt='noen'></img></div>
              <div><img src={img1} alt='noen'></img></div>
              <div><img src={img1} alt='noen'></img></div>
            </AwesomeSlider>
          </div>
          <div class='projectdetdes'>six des frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects</div>
      </div>
      </div>
      </div>
      <div id='dummy'></div>
      {/* <div  style={{display: testsamp ? 'block' : 'none'}}>sdgjksngjnsn</div>
      <button onClick={samp}>works</button> */}
    </div>


    {/*     page four    */}
    <div id='cont'>
    <div id='cont-header' className='animation' data-aos='fade-up'>Contact</div>
    <div class='logos'>
      <a id='gitlogo' className='animation' data-aos='fade-right' target='_blank' rel='noreferrer' href='https://github.com/logee48'><img src={git} alt='none'></img></a>
      <a id='linkedinlogo' className='animation' data-aos='fade-left' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/logeshwaran-elumalai-a180b3249/'><img src={linkedin} alt='none'></img></a>
      <a id='maillogo' className='animation' data-aos='fade-right' href='mailto:logeshe9159@gmail.com'><img src={maill} alt='none'></img></a>
    </div>
    {/* <div id='contact-form-out'> */}
      {/* <input placeholder='your name' type='text'></input>
      <input placeholder='your email id'></input>
      <input placeholder='your message...'></input> */}
    
    {/* <form class='contact-form'>
        <input type="text" value={name} placeholder='your name' onChange={(e) => setname(e.target.value)}/>
        <input type="email" value={email} placeholder='your email id' onChange={(e) => setemail(e.target.value)}/>
        <input type="text" value={message} placeholder='your message...̀' onChange={(e) => setmessage(e.target.value)}/>
        <input type="submit" value='submit'/>
    </form></div> */}
    </div>
    <div id='footer'>
      Copyright © 2022 jesper. All Rights Reserved
    </div>


    </div>
    </div>
  );
}

export default App;
