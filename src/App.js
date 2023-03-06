import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import './index.css';

function App() {
  return (
    <div>
      <body>
        {/* home start*/}
        <div id="home-bg">
          <nav className="navbar" style={{backgroundColor: 'transparent'}} role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start ">
                <a className="home-color nav-pad" href="../public/index.html">
                  Home
                </a>
                <a className="home-color nav-pad" href="#port">
                  Portfolio
                </a>
                <span className="center">
                  <p className="home-color">Tharindu
                  </p>
                </span>
                <a className="home-color nav-last" href="#cont">
                  Contact
                </a>
              </div>
            </div>
          </nav>
          {/* home Big name*/}
          {/* home Big name*/}
          <div className="columns ">
            <div className="column is-6 col_mob  home-pad">
              <h5 className=" home-color  home-text" style={{paddingLeft: '180px',paddingTop:'100px'}}>Hi! I Am</h5><br />
              <h3 className=" home-color left-col home-text">Tharindu</h3><span className=" home-color home-text" style={{paddingLeft: '220px'}}>Prabhashwara</span>
              <div className="nav-button">
                <button className="round-6"><a href="#port"><span><i className="fa-solid fa-arrow-down fa-2x nav-butto-arrow" /></span></a></button>
              </div>
            </div>
            <div className="column is-6 col_mob has-text-centered ">
              <br /><br /><br /><br />
              <div className="cir ">
                <img className="home-img mob-img" src={require('./img/pro.png')} alt="pro_pic" />
              </div>
              <div className="net-align">
                {/*  <div class="columns"> 
    
                      <div class="column is-2 ">
    
                        <div class="net-button">
                            <button class="net-size"><a href="#a"><span><img class="net-img" src="./img/e.png"></span></a></button>
                        </div>
                      </div> 
    
                      <div class="column is-2">
    
                        <div class="net-button">
                            <button class="net-size"><a href="#adasd"><span><img class="net-img" src="./img/f.png"></span></a></button>
                        </div>
                      </div> 
    
    
                      <div class="column is-2">
    
                        <div class="net-button">
                            <button class="net-size"><a href="#adasd"><span><img class="net-img" src="./img/i.png"></span></a></button>
                        </div>
                      </div>
    
    
                      <div class="column is-2">
    
                        <div class="net-button">
                            <button class="net-size"><a href="https://youtu.be/dQw4w9WgXcQ?t=1" target="_blank"><span><img class="net-img" src="./img/y.png"></span></a></button>
                        </div>
                      </div>
    
                    </div> */}
                <table>
                  <tbody><tr><th><div className="net-button">
                          <button className="net-size"><a href="#a"><span><img className="net-img" src={require('./img/e.png')} /></span></a></button>
                        </div></th>
                      <th>
                        <div className="net-button">
                          <button className="net-size"><a href="#adasd"><span><img className="net-img" src={require('./img/f.png')} /></span></a></button>
                        </div>
                      </th>
                      <th>
                        <div className="net-button">
                          <button className="net-size"><a href="#adasd"><span><img className="net-img" src={require('./img/i.png')} /></span></a></button>
                        </div>
                      </th>
                      <th>
                        <div className="net-button">
                          <button className="net-size"><a href="https://youtu.be/dQw4w9WgXcQ?t=1" target="_blank"><span><img className="net-img" src={require('./img/y.png')} /></span></a></button>
                        </div>
                      </th>
                    </tr>
                  </tbody></table>
              </div> 
            </div>
          </div>
          <br />
        </div>
        {/* home over*/}
        {/* portfolio*/}
        <div id="home-bg">
          <div><a name="port" /></div>
          <div className="port-title">
            <p className="home-color "> <span style={{color: '#FFFFFF', cursor: 'default'}}>Portfolio</span></p>
          </div>
          <div className="columns is-mobile"> 
            <div className="column is-4   ">
              <h2 className="home-color port-text-size">about me</h2>
              <div className="port-hr"><hr style={{backgroundColor: '#C9E9F0'}} /></div>
              <br /><br />
              <div className="nav-button">
                <button className="round-6"><a href="#edu"><span><i className="fa-solid fa-arrow-down fa-2x nav-butto-arrow" /></span></a></button>
              </div>
            </div>
            <div className="column is-4  is-align-self-flex-end ">
              <br /><br /><br /><br />
              <div className="port-vhr1" />
            </div>
            <div className="column is-4  is-align-self-center ">
              <div id="port-text-box1">
                <section className="hero port-text-font ">
                  <div className="hero-body">
                    <p className="title is-size-4">
                      Hello! I am Tharindu Prabhashwara.
                    </p>
                    <p className="subtitle is-size-6 pt-2">
                      I am a first-year UCSC student pursuing an IS degree.
                    </p>
                    <div id="port-ame-hr"><hr style={{backgroundColor: '#005260'}} /></div>
                    <p className="title is-size-4 pt-1">
                      Info
                    </p>
                    <p className="subtitle is-size-6 pb-1">
                    </p><div className="content is-normal">
                      <ul style={{listStyle: 'none'}}>
                        <li><span className="is-size-5">Age : </span><span className="is-size-6">21</span></li>
                        <li><span className="is-size-5">Address : </span><span className="is-size-6">Kuliyapitiya</span></li>
                        <li><span className="is-size-5">Birthday : </span><span className="is-size-6">01/01/2001</span></li>
                        <li><span className="is-size-5">University : </span><span className="is-size-6">UCSC</span></li>
                      </ul>
                    </div>
                    <p />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <br />
        </div>
        {/* portfolio about me over*/}
        {/* port edu start*/}
        <div id="home-bg">
          <div><a name="edu" /></div>
          <div className="port-title">
            <p className="home-color "><span style={{color: '#FFFFFF', cursor: 'default'}}>Portfolio</span></p>
          </div>
          <div className="columns is-mobile"> 
            <div className="column is-4   ">
              <h2 className="home-color port-text-size">education</h2>
              <div className="port-hr"><hr style={{backgroundColor: '#C9E9F0'}} /></div>
              <br /><br />
              <div className="nav-button">
                <button className="round-6"><a href="#cont"><span><i className="fa-solid fa-arrow-down fa-2x nav-butto-arrow" /></span></a></button>
              </div>
            </div>
            <div className="column is-4  is-align-self-flex-end ">
              <br /><br /><br /><br />
              <div className="port-vhr2" />
            </div>
            <div className="column is-4  is-align-self-center ">
              <div id="port-text-box2">
                <div className="columns"> 
                  <div className="column is-5   ">
                    <section className="hero port-text-font ">
                      <div className="hero-body">
                        <p className="title is-size-4 pr-1">
                          Bachelors's Degree
                        </p>
                        <p className="subtitle is-size-6 pt-2">
                          <strong>University Of Colombo</strong><br /> 2022-present
                        </p>
                        <br />
                        <p className="title is-size-4 pt-6">
                          School Educaton
                        </p>
                        <p className="subtitle is-size-6 pt-2 ">
                          <strong>Sarnath Collage</strong><br /> 2012-2020
                        </p>
                      </div>
                    </section>
                  </div>
                  <div className="column is-1">
                    <div id="port-edu-vhr1" />
                    <div id="port-edu-vhr2" />
                  </div>
                  <div className="column is-6 ">
                    <section className="hero port-text-font ">
                      <div className="hero-body" id="port-edu-align">
                        <p className="title is-size-5 pr-1">
                          Bsc. in Information Systems
                        </p>
                        <p className="subtitle is-size-6 pt-2 ">
                          currently studying a Degree in Information Systems at University of Colombo School of Computing (UCSC).
                        </p>
                        <br />
                        <p className="title is-size-5 pt-6">
                          Secondary Education
                        </p>
                        <p className="subtitle is-size-6 pt-2 ">
                          GCE (O/L) : A9<br />GCE (A/L) : B1 ,C2
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
        </div>
        {/* port edu over*/}
        {/* contac  part start */}
        <div id="home-bg">
          <div><a name="cont" /></div>
          <div className="cont-title">
            <p className="home-color "> <span style={{color: '#FFFFFF', cursor: 'default'}}>Contact me</span></p>
          </div>
          <div className="columns is-mobile"> 
            <div className="column is-4   ">
              <section className="hero">
                <div className="hero-body">
                  <p className="title">
                  </p><h2 className="home-color cont-sub-title1">Address</h2>
                  <p />
                  <div className="cont-sub1-hr"><hr style={{backgroundColor: '#C9E9F0'}} /></div>
                  <p className="subtitle">
                  </p><div className="cont-text-box1">
                    <section className="hero port-text-font ">
                      <p className="subtitle is-size-6 ">
                      </p><div className="content is-normal">
                        <ul style={{listStyle: 'none'}}>
                          <li><span className="is-size-5"><strong>Street</strong> : </span><span className="is-size-5">31 Cotta Road, 08</span></li>
                          <li><span className="is-size-5"><strong>City</strong> : </span><span className="is-size-5">Colombo</span></li>
                          <li><span className="is-size-5"><strong>State/province/area</strong> : </span><span className="is-size-5">Colombo</span></li>
                          <li><span className="is-size-5"><strong>Phone number</strong> : </span><span className="is-size-5">(+94) ( 011) 1234567</span></li>
                          <li><span className="is-size-5"><strong>Country calling coder</strong> : </span><span className="is-size-5">(+94)</span></li>
                          <li><span className="is-size-5"><strong>Country</strong> : </span><span className="is-size-5">Sri Lanka</span></li>
                        </ul>
                      </div>
                      <p />
                    </section>
                  </div>
                  <p />
                </div>
              </section>
              <div style={{position: 'relative', left: '11.5%'}}>
                <div>
                  <iframe width={530} height={200} frameBorder={0} src="https://www.bing.com/maps/embed?h=250&w=550&cp=6.900034723819033~79.85875032001832&lvl=17.56538608867708&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                  </iframe>
                </div>
              </div>
            </div>
            <div className="column is-2   ">
              <div className="cont-vhr" />
            </div>
            <div className="column is-4 ">
              <h2 className="home-color cont-sub-title2">Ask a question</h2>
              <p />
              <div className="cont-sub2-hr"><hr style={{backgroundColor: '#C9E9F0'}} /></div>
              <div className="input-position">
                <span style={{fontSize: '2.30em', color: 'white', position: 'relative', right: '10%'}}>Name</span> <input className="input-contact" type="text" placeholder=" Type here" />
                <div className="text-contact-q-posi">
                  <textarea className="text-contact-q" placeholder="Your Question" defaultValue={""} />
                </div>
                <br /><br /><br />
                <div style={{position: 'relative', left: '200px'}}>
                  <button className="button-27" role="button" style={{background: '#C9E9F0', width: '160px', borderColor: '#C9E9F0', color: 'black'}}>Send</button>
                </div>
              </div>
            </div>
          </div>
          <br /><br /><br />
        </div>
        <div className="foot-part"> 
          <div className="columns">
            <div className="column is-2">
            </div>
            <div className="column is-8" style={{ position: 'relative', top: '5px', paddingLeft: '300px' }}>
              <div className="columns">
                <div className="column is-2">
                  <div className="net-button-last">
                    <button className="net-size"><a href="https://www.whatsapp.com/" target="_blank"><span><img className="net-img-last" src={require('./img/w.png')} /></span></a></button>
                  </div>
                </div>
                <div className="column is-2">
                  <div className="net-button-last">
                    <button className="net-size"><a href="https://twitter.com/" target="_blank"><span><img className="net-img-last" src={require('./img/t.png')} /></span></a></button>
                  </div>
                </div>
                <div className="column is-2">
                  <div className="net-button-last">
                    <button className="net-size"><a href="https://contacts.google.com/" target="_blank"><span><img className="net-img-last" src={require('./img/c.png')} /></span></a></button>
                  </div>
                </div>
                <div className="column is-2">
                  <div className="net-button-last">
                    <button className="net-size"><a href="https://voice.google.com/u/0/about" target="_blank"><span><img className="net-img-last" src={require('./img/call.png')} /></span></a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </body>
      </div>
  )
}

export default App
