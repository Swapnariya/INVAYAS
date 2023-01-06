import * as React from "react"
import { useState } from "react"
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap"
import { Link } from "react-router-dom"
import { BiMenu } from "react-icons/bi"
import styles from "./Navbar.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


const NavMenu = ({_scrolltoHome,_scrolltoAbout,_scrolltoServices,_scrolltoClients,_scrolltoContact }) => {
const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }
  
  return (
    <Navbar style={{backgroundColor:"#fff"}} className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow sticky-top" >
       <NavbarBrand tag={Link} to="/">
       <img
            style={{
              width: "180px",
              height: "70px",
              alignSelf: "flex-start",
              marginRight: "16px",
            }}
            alt="logo.png"
            src={"./images/logo.png"}
          />
      
        </NavbarBrand>
      <Container>
       
        <NavbarToggler onClick={toggle} className="mr-2 menuBtn">
        <BiMenu size={22} />
        </NavbarToggler>
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={isOpen}
          navbar
        >
          <ul className="navbar-nav flex-grow"  > 
         
          <NavItem>
              <NavLink tag={Link} style={{marginLeft:"8px",marginTop:"10px",marginRight:"10px" }}  className="text-dark" onClick = {() => _scrolltoHome() } >
              <p className={styles.swap}>Home</p>
              </NavLink>
          </NavItem>
           <NavItem>
              <NavLink tag={Link} style={{marginLeft:"8px",marginTop:"10px",marginRight:"10px" }} className="text-dark" onClick = {() => _scrolltoAbout() }>
              <p className={styles.swap}>About</p>
              </NavLink>
            </NavItem>
            <NavItem>
               <NavLink tag={Link} style={{marginLeft:"8px",marginTop:"10px",marginRight:"10px" }} className="text-dark" onClick = {() => _scrolltoServices() } >
               <p className={styles.swap}>Products & Services</p>
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink tag={Link} style={{marginLeft:"8px",marginTop:"10px",marginRight:"10px" }} className="text-dark" onClick = {() => _scrolltoClients() } >
               <p className={styles.swap}>Clients</p>
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink tag={Link} style={{marginLeft:"8px",marginTop:"10px",marginRight:"80px" }} className="text-dark" onClick = {() => _scrolltoContact() } >
                <p className={styles.swap}>Contact</p>
               </NavLink>
            </NavItem>
       
         
           
           
            <NavItem>

              
<NavLink tag={Link} className="text-dark" >
<Button style={{width:"110px",}} variant="outline-success"onClick={() => window.open( "tel: +91 7892276321")}>{""} call</Button>
</NavLink>
</NavItem>
<NavItem>
<NavLink tag={Link} className="text-dark" >
<Button style={{width:"110px",}} variant="outline-success" onClick={() => window.open("mailto:support@invayas.com", "_blank")}>{" "}Email</Button>
</NavLink>
</NavItem>
<NavItem>
<NavLink tag={Link} className="text-dark" >
<Button style={{width:"110px",}} variant="success" onClick={() => window.open("https://wa.me/9141176274")}>{" "}whatsapp</Button>
</NavLink>
</NavItem>
          
            </ul>
        </Collapse>
        
      </Container>
        
    </Navbar>
  )
}
export default NavMenu