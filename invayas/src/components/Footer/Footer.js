import styles from "./Footer.module.css"
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube, FaApple } from "react-icons/fa"
import { Link } from "react-router-dom"
import {MdEmail} from "react-icons/md"
import {BsTelephoneFill} from "react-icons/bs"
import {AiFillInstagram  } from "react-icons/ai"

const Footer = ({_handleScroll,_scrolltoGallery,_scrolltoAbout,_scrolltoDownload}) => {
function  myFunction(){
    alert("Coming Soon ")
  }

  return (
    <div>
    <div className={styles.mainBox}>
    <div className={styles.bottomBox}>
    <div style={{ display: "flex", flexDirection: "column" }}>
           <h3 className={styles.heading}> <img
            style={{
              width: "180px",
              height: "65px",
              alignSelf: "flex-start",
              marginRight: "16px",
            }}
            alt="logo.png"
            src={"./images/logo-white.png"}
          /></h3>
       <p>We diligently work towards securing a long-term partnership with each customer and we intend to do this by, Developing a productive work environment and fostering a performance-based culture.  </p>
      </div>
     
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
        <h3 className={styles.heading}>CONTACT</h3>
            <div>
            <h6 className={styles.linkItem} onClick={() => window.open("tel: +91 9141176274", "_blank")}>{" "}
             <BsTelephoneFill color="white" size={18}/>+91 9141176274</h6>
             <h6 className={styles.linkItem} onClick={() => window.open("mailto:support@invayas.com", "_blank")}>{" "}
             <MdEmail color="white" size={18}/>support@invayas.com</h6>
             </div>
      </div>

      <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
        <h3 className={styles.heading}>Social Media</h3>      
       
             <div className={styles.topIconBox}>
             <FaFacebookSquare onClick={() => window.open("https://www.facebook.com/people/Invayas/100063907579465/", "_blank")} className={`${styles.icon} ${styles.fb}`} size={24} color="white" />
          <AiFillInstagram onClick={() => window.open("https://www.instagram.com/invayas/?igshid=125dlwuybwof0", "_blank")} className={`${styles.icon} ${styles.fb}`} size={24} color="white"/> 
          <FaLinkedin onClick={() => window.open("https://www.linkedin.com/company/invayasindia", "_blank", "_blank")} className={`${styles.icon} ${styles.fb}`}  size={24} color="white" />
        </div>
      </div>
    </div>
    <div className={styles.linebox}></div>
    <p className={styles.copy}>
      <span>© 2021 <a  onClick={() => window.open("https://invayas.com/", "_blank")} className={styles.inva}>Invayas</a> All Rights Reserved.</span> </p>
    </div>
    
  </div>
  )
}

export default Footer

