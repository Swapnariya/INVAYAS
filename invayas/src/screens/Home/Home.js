import React from "react"
import Navbar from "../../components/Navbar/Navbar";
import { useRef } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom"
import {BiTrash} from "react-icons/bi"
import {FaUserFriends} from "react-icons/fa"
import {FaRegLightbulb} from "react-icons/fa"
import {BiCheckCircle} from "react-icons/bi"
import {FaBullhorn} from "react-icons/fa"
import {RiComputerLine} from "react-icons/ri"
import {BsArrowRepeat} from "react-icons/bs"
import {ImMobile} from "react-icons/im"
import {FaPenNib} from "react-icons/fa"
import {GoGraph} from "react-icons/go"
import {CgNotes} from "react-icons/cg"
import {HiOutlineLightBulb} from "react-icons/hi"
import {BiCube} from "react-icons/bi"
import {BsCart3} from "react-icons/bs"
import {AiOutlineSetting} from "react-icons/ai"
import {VscTools} from "react-icons/vsc"
import {BiPurchaseTag} from "react-icons/bi"
import {FaRegCheckSquare} from "react-icons/fa"
import {MdModeEditOutline} from "react-icons/md"
import Footer from "../../components/Footer/Footer";

const Service= [
  {
    id: "0",
    heading: <div className={styles.buttonbox} style={{backgroundColor:"#fff5d0"}}>
                 <h3><RiComputerLine size={50} color="#f39f03"/></h3>
                <h3 className={styles.cardhead}>Web & Desktop Application</h3>
                <p className={styles.cardbottom} >We design, develop and optimize websites, desktop applications, which also includes maintenance. </p>
             </div>
    
  },
  {
    id: "1",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#ecddfb"}}>
                  <h3><BsArrowRepeat size={50} color="#8e25f7"/></h3>
                <h3 className={styles.cardhead}>Supply Chain Management</h3>
                <p className={styles.cardbottom}>We help you customize your warehouses, provide services, configure, implement and test your Warehouse solution systems across platforms like i series, Cloud, .net, and Open systems.  </p>
             </div>
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#c2eaf8"}}>
                 <h3><ImMobile size={50} color="#14ace4"/></h3>
                 <h3 className={styles.cardhead}> Mobile Application Development</h3>
                  <p  className={styles.cardbottom}>We develop and optimize mobile applications that showcase your business services. Our applications are creative, user-friendly, highly functional, easy to maintain, and responsive for android and ios mobile devices. </p>
            </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox}  style={{backgroundColor:"#def7e9"}}>
                <h3><FaPenNib size={50} color="#32f185"/></h3>        
                 <h3 className={styles.cardhead}>Website Design </h3>
                 <p  className={styles.cardbottom}>We design, develop and optimize websites that showcase your business services. Our websites are creative, user-friendly, highly functional, easy to maintain, and responsive for mobile devices. Our services also include website maintenance.  </p>
            </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#fbe9e6"}} onClick={() => window.open("https://www.tikbits.com", "_blank")}>
               <h3><GoGraph size={50} color="#c72c11"/></h3>
               <h3 className={styles.cardhead}>Stock market analysis Tools</h3>
               <p  className={styles.cardbottom}>We develop auto scanners, technical analysis scanners, trade finding scanners to analyze stocks easily. </p>
            </div>,
  },
  {
    id: "3",
    heading: <div className={styles.buttonbox}  style={{backgroundColor:"#f5f78b"}}>
                <h3><CgNotes size={50} color="#eca31c"/></h3>
              <h3 className={styles.cardhead}>Billing System</h3>
              <p  className={styles.cardbottom}>We develop Customised electronic billing/invoice and payment software systems. </p>
             </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox}  style={{backgroundColor:"#fff6d6"}}>
        <h3><HiOutlineLightBulb size={50} color="#f7c40f"/></h3>
               <h3 className={styles.cardhead}>Idea System</h3>
               <p  className={styles.cardbottom}>We develop suggestion software applications where employees can enter their ideas and it will be reviewed by their supervisor and can be forwarded to other departments or committees.  </p>
            </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox}  style={{backgroundColor:"#ecddfb"}}>
        <h3><BiCube size={50} color="#9537f3"/></h3>
               <h3 className={styles.cardhead}>Management Application</h3>
               <p  className={styles.cardbottom}>We are developing all kinds of management applications like Hospitality management, School/college management, Hotel management, Employee management, etc. </p>
            </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#c2eaf8"}}>
        <h3><BsCart3 size={50} color="#1eb5ec"/></h3>
              <h3 className={styles.cardhead}>E-Commerce Application </h3>
              <p  className={styles.cardbottom}>Improve your customer’s engagement through a highly interactive eCommerce mobile application. We develop eCommerce apps for a startup, small, medium, and large-scale businesses. </p>
           </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox}style={{backgroundColor:"#def7e9"}} >
        <h3><MdModeEditOutline size={50} color="#52b67d"/></h3>
               <h3 className={styles.cardhead}> Graphic Designing</h3>
               <p  className={styles.cardbottom}>We offer a wide range of custom graphic design services, and ably translate your thoughts and ideas into creative graphic designs that bring out superior results. We stress creating custom graphics that work to your advantage. </p>
            </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#fbe9e6"}}>
        <h3><AiOutlineSetting size={50} color="#e95035"/></h3>
                <h3 className={styles.cardhead}>Repair Center Workflow Process</h3>
                <p  className={styles.cardbottom}>Repair Center Workflow Process, is a centralized database application that records all the activities in the repair center and captures all Product level & PCB level components replaced for repair data analysis. </p>
           </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#f5f78b"}}>
        <h3><VscTools size={50} color="#e7c91a"/></h3>
               <h3 className={styles.cardhead}> Repair Defects Analysis Tool</h3>
               <p className={styles.cardbottom}>Repair Defects Analysis Tool is used to generate various Analysis reports, Charts, Trends, Pareto & Isochrones on repair data. </p>
            </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#fff5d0"}}>
        <h3><BiPurchaseTag size={50} color="#f39f03"/></h3>
               <h3 className={styles.cardhead}>Purchase Pricing Workflow system </h3>
               <p  className={styles.cardbottom}>Purchase Pricing Workflow system is a centralized hieratical approval system for raw material Price Increase / Decrease and gets an analysis of the data. </p>
            </div>,
  },
  {
    id: "3",
    heading:<div className={styles.buttonbox} style={{backgroundColor:"#ecddfb"}}>
        <h3><FaRegCheckSquare size={50} color="#9445e2"/></h3>
               <h3 className={styles.cardhead}>Quality Data AnalysisTool </h3>
               <p  className={styles.cardbottom}>Quality Data Analysis Tool, is a tool to generate various Analysis reports & Charts, Trends, Pareto & Isochrones on manufacturing data. </p>
            </div>,
  },
]

const showcase = [
  {
    id: "0",
    heading: <img
    src="images/sone.png"
    style={{width: "155%",height: "140%",padding: 0,paddingRight:"30%",
    }}
    alt="Computer"
     />,
  },
  {
      id: "0",
      heading: <img
      src="images/s2.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
    {
      id: "0",
      heading: <img
      src="images/s3.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
    {
      id: "0",
      heading: <img
      src="images/s4.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
    {
      id: "0",
      heading: <img
      src="images/s5.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
    {
      id: "0",
      heading: <img
      src="images/s6.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
    {
      id: "0",
      heading: <img
      src="images/s7.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
    {
      id: "0",
      heading: <img
      src="images/s8.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
    {
      id: "0",
      heading: <img
      src="images/s10.png"
      style={{width: "100%",height: "100%",padding: 0,
      }}
      alt="Computer"
       />  ,
    },
]

const CLIENT_NUMB = [

{
  id: "1",
  value: "11",
  label: "PHONE",
  content:"Completed Projects",
},
{
  id: "0",
  value:"150",
  label: "WHATSAPP",
  content:"Happy Clients",
},
{
  id: "2",
  value: "9",
  label: "EMAIL",
  content:"Ongoing Projects"
},
]

const WHY_US = [
  {
    id: "6",
    value:  <img
    src="images/togetherone.png"
    style={{width: "70%",height: "6%",padding: 0,}}
    alt="Computer"
    />,
    heading: "Call Enquiry Assistance",
    discription:"You come to us with your project; We provide all the technical consultation, all the planning, and full costing of the project.  ",
  },
  {
    id: "6",
    value:  <img
    src="images/togethertwo.png"
    style={{width: "70%",height: "60%",padding: 0,}}
    alt="Computer"
    />,
    heading: "Project Consultation",
    discription:" We are always available on call to provide all assistance for your inquiries. and help you in scheduling appointments whenever you want to meet us. ",
  },
  {
    id: "6",
    value:  <img
    src="images/togetherthree.png"
    style={{width: "70%",height: "60%",padding: 0,}}
    alt="Computer"
    />,
    heading: "We Deliver Excellence",
    discription:"We always update ourselves from time to time with the latest and advanced technologies, so that we deliver the best and innovative applications on time.  ",
    },   
]

const Home = ()=>{

const home=useRef()
const about=useRef()
const services=useRef()
const clients=useRef()
const contact=useRef()

const _scrolltoHome = () => {
  home?.current.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "end",
   })  
 }
 const _scrolltoAbout = () => {
  about?.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "end",
  })  
}
const _scrolltoServices = () => {
  services?.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "end",
  })  
}
const _scrolltoClients = () => {
  clients?.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "end",
  })  
}
const _scrolltoContact = () => {
  contact?.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "end",
  })  
}

return(
  <div>
<Navbar  _scrolltoHome={_scrolltoHome}  _scrolltoAbout={_scrolltoAbout} _scrolltoServices={_scrolltoServices} _scrolltoContact={_scrolltoContact} _scrolltoClients={_scrolltoClients}/>
      <div ref={home} className={styles.pageone} >
          <div className={styles.HomeLandingBox}>
                 <div className={styles.HomeLandingimgBox}>
                     <img
                      src="images/home.png"
                      style={{
                      width: "100%",
                      height: "100%",
                   
                      }}
                      alt="Computer"
                       />
                  </div>
                  <div className={styles.HomeLandingMainBoxxHome}>
                    <h1 className={styles.head} >Complete <span style={{color:"#ff9e1a"}}>Solution</span> to all kind of Applications</h1>
                    <p className={styles.HomePageTextTwo}>We are Software Professionals to convert your Ideas to Great Product </p>
                    <div className={styles.buttons}>
                       <Link to="/">
                         <button className={styles.Readmorebtnn} onClick = {() => _scrolltoAbout() }><p className={styles.linkItemm}>Know More</p></button>
                       </Link>
                    </div>
                  </div>
          
          </div>
      </div>

  
           <div ref={about}  className={styles.HomeLandingBox}>
                   <div className={styles.HomeLandingMainBoxx}>
                       <h1 className={styles.headtwo} >About</h1>
                       <p className={styles.HomePageTextTwoabout}>
                        At Invayas we help the business to build an intelligently designed digital
                        future. Tell us about your idea, and we’ll offer the most fitting technological solution.
                        We are passionate about our customers and consumers and embrace their priorities as our own.
                        We specialize in outsourcing software development projects and in delivering end-to-end development and testing services. Our services are specially designed and structured as per our client’s needs & cater to various
                        sizes of businesses from startups to large-scale businesses. 
                        </p>
                    </div>
                    <div className={styles.HomeLandingimgBox}>
                        <img
                         src="images/about.png"
                         style={{
                         width: "100%",
                         height: "100%",
                         padding: 0,
                         }}
                         alt="Computer"
                         />
                     </div>         
            </div>
    

       <div className={styles.vclr}>
            <div className={styles.HomeLandingBox}>
               <div className={styles.HomeLandingimgBox}>
                  <img
                  src="images/vision.png"
                  style={{
                  width: "100%",
                  height: "100%",
                  padding: 0,
                   }}
                  alt="Computer"
                  />
               </div>       
                <div className={styles.HomeLandingMainBoxxxv}>
                  <h1 className={styles.headtwo} >Our Vision and Values</h1>
                  <p className={styles.HomePageTextTwoabout}>
                   We deliver Software Solutions that contribute Sustainability to our
                   Customers' success. Our honesty is our main strength, We are always
                   honest & transparent with our clients and we want to carry the same
                   in the future. Integrity, adeptness, diligence, hard work, agility &
                   dedication are some of the qualities that we promote. Our purpose is
                   to develop and promote advanced information technologies for multi-user
                   operations. We are committed to improving the lives of our clients by
                   providing quality services and solutions that earn their trust and
                   build lifetime relationships. 
                   </p>
                </div>
            </div>
         </div>


         <div className={styles.secondBox}>
                {CLIENT_NUMB.map((item) => (
                  <div key={item.id} className={styles.button}>
                    <div><h4 className={styles.heads}  >{item.value}</h4></div>
                    <h5 className={styles.clientcontent}>{item.content}</h5>
                </div>
               ))}
         </div>


     <div ref={services}  className={styles.vision}>
        <div className={styles.service}>
             <h2 className={styles.headservice}>Services</h2>
             <p className={styles.servicep}>Software Development services cover all stages of the application
                life cycle from requirements through design, test, and implementation, all customized. </p>
         </div>
         <div className={styles.myserviceGrid}>
          {Service.map((item, index) => (
            <div key={index} className={styles.myserviceCard}>
       
              <b className={styles.whyUsHeader}>{item.heading}</b>
            
            </div>
          ))}
        </div>

</div>


      <h2 className={styles.headtogether}>Let's Work together</h2>
             <div className={styles.togetherGrid}>
                {WHY_US.map((item, index) => (
                 <div key={index} className={styles.togetherCard}>
                 <div className={styles.buttonboxtogether}>
                      <div className={styles.buttontop}>{item.value}</div>
                                  <div className={styles.buttonbottom}>
                                       <div className={styles.nametogether}>{item.heading}</div>
                                        <div className={styles.yeartogether}> {item.discription}</div>
                                   </div>
                        </div>
                   </div>
                ))}
             </div>


        <div className={styles.startupcolor}>
             <div className={styles.HomeLandingBox}>
                 <div className={styles.HomeLandingMainBoxx}>
                    <h2 className={styles.startuphead}>Do you have a STARTUP Company?</h2>
                    <p className={styles.startp}> Let us turn it together into a PROFITABLE BUSINESS ! </p>
                     <h3 className={styles.starthead}> Let us turn it together into a PROFITABLE BUSINESS ! </h3>
                        <div className={styles.buttonGrid}>          
                              <div className={styles.startupbox}>
                                 <div className={styles.buttonright}>
                                       <button className={styles.Readmore}><p className={styles.startupicon}><FaUserFriends  size={30}/></p></button>
                                       <p className={styles.pbuttons}>We design user-friendly websites for better user interaction and satisfaction  </p>           
                                  </div>
                              </div>
                                        
                              <div className={styles.startupbox}>
                                  <div className={styles.buttonright}>
                                        <button className={styles.Readmore}><p className={styles.startupicon}><FaRegLightbulb  size={30}/></p></button>
                                         <p className={styles.pbuttons}>We provide innovative Desktop and Mobile applications </p>           
                                    </div>         
                              </div>

                              <div className={styles.startupbox}>
                                    <div className={styles.buttonright}>
                                          <button className={styles.Readmore}><p className={styles.startupicon}v><BiCheckCircle  size={30}/></p></button>
                                          <p className={styles.pbuttons}>We define your Company with a unique Logo and Banners </p>           
                                    </div>
                              </div>
                               <div className={styles.startupbox}>
                                    <div className={styles.buttonright}>
                                          <button className={styles.Readmore}><p className={styles.startupicon}><FaBullhorn  size={30}/></p></button>
                                           <p className={styles.pbuttons}>Basic Digital Marketing services</p>           
                                    </div>                                           
                                </div>
                                
                          </div>
         </div>
                <div className={styles.HomeLandingimgBox}>
                     <img
                     src="images/startup.png"
                     style={{
                     width: "100%",
                     height: "100%",
                     padding: 0,
                     }}
                     alt="Computer"/>
                </div>
          </div>
       </div>


        <h2 className={styles.headchoose}>Why Choose Us?</h2>
            <div className={styles.HomeLandingBoxchoose}>
                 <div className={styles.HomeLandingimgBoxchoose}>
                       <img
                       src="images/whyusone.png"
                       style={{
                       width: "75%",
                       height: "100%",
                       padding: "5%",
                       }}
                      alt="Computer"
                       />
                    </div>
            <div className={styles.HomeLandingMainBoxxchoose}>
               <div className={styles.chooseGrid}>
                       <div className={styles.whyUsCard}>
                               <div className={styles.buttonboxchoose} style={{backgroundColor:"white"}}>
                                   <h3 className={styles.choosehead}>Innovation & Creativity</h3>
                                    <p className={styles.choosebottom} >Our team is never afraid to take up a new challenge and is always ready to help you out with our digital expertise & innovation. </p>
                                </div>
                        </div>
                </div>
             </div>
          </div>
          

          <div className={styles.HomeLandingBoxchoose}>
                <div className={styles.HomeLandingMainBoxxchoose}>
                     <div className={styles.chooseGrid}>
                                 <div className={styles.whyUsCard}>
                                      <div className={styles.buttonboxchoose} style={{backgroundColor:"white"}}>
                                          <h3 className={styles.choosehead}>High Quality</h3>
                                          <p className={styles.choosebottom} >We provide high-quality software development services that would enhance the growth of your business. </p>
                                      </div>
                                  </div>
                      </div>
                 </div>

                <div className={styles.HomeLandingimgBoxchoose}>
                       <img
                        src="images/whyustwo.png"
                        style={{
                        width: "75%",
                        height: "100%",
                        padding: "5%",
                        marginLeft:"10%",
                          }}
                        alt="Computer"
                         />
                 </div>
          </div>


          <div className={styles.HomeLandingBoxchoose}>
                   <div className={styles.HomeLandingimgBoxchoose}>
                        <img
                         src="images/whyusthree.png"
                         style={{
                         width: "75%",
                         height: "100%",
                         padding: "5%",
                          }}
                         alt="Computer"
                          />
                    </div>
                   <div className={styles.HomeLandingMainBoxxchoose}>
                         <div className={styles.chooseGrid}>
                               <div className={styles.whyUsCard}>
                                   <div className={styles.buttonboxchoose} style={{backgroundColor:"white"}}>
                                       <h3 className={styles.choosehead}>Peace of mind</h3>
                                       <p className={styles.choosebottom} >We dedicate ourselves to work for your business to assure the smooth completion of projects, avoiding all unexpected hazards. </p>
                                    </div>
                                 </div>
                           </div> 
                    </div>
          </div>




                <div ref={clients} className={styles.showclr}>
                     <p className={styles.showp}>Who we work with </p>      
                     <h2   className={styles.headservice}>Client showcase</h2>
                         <div className={styles.showGrid}>
                           {showcase.map((item, index) => (
                            <div key={index} className={styles.showCard}>
                                   <p className={styles.showmid}>  {item.heading}  </p>            
                            </div>
                             ))}
                           </div>
                  </div>


              <div ref={contact} >< Footer/></div>
    </div>
    )
}
export default Home