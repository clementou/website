import '../styles/Navbar.css';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import close from '../../assets/images/close.png';
import { Link } from 'react-scroll';
import React from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
   state = {
      showMenu: false
   };

   openMenu = () => {
      this.setState({ showMenu: true });
   }

   closeMenu = () => {
      this.setState({ showMenu: false });
   }

   render() {
      return (
         <div className={this.props.scrollPosition > 0 ? "navbar-shadow" : "navbar"}>
            {this.props.desktop ?
               (<div className="nav-desktop">
                  <Link className="logo" to="Home" smooth={true}>
                     <img src={logo} alt='Logo' className='logo' />
                  </Link>
                  <div className="nav-right">
                     <Link className="nav-button" to="About" smooth={true}>About</Link>
                     <Link className="nav-button" to="Coursework" smooth={true}>Coursework</Link>
                     <Link className="nav-button" to="Experience" smooth={true}>Experience</Link>
                     {/* <Link className="nav-button" to="Leadership" smooth={true}>Leadership</Link> */}
                     {/* <Link className="nav-button" to="Projects" smooth={true}>Projects</Link> */}
                     <a href="/cv.pdf" download className="resume-button">Resume</a>
                  </div>
               </div>)
               :
               (<div className="nav-mobile">
                  <Link className="logo-mobile" to="Home" smooth={true}>
                     <img src={logo} alt='Logo' className='logo-mobile' />
                  </Link>
                  <button className="menu-button-mobile" onClick={this.openMenu}>
                     <img src={menu} alt='Menu' className='menu-mobile' />
                  </button>
                  {this.state.showMenu ? (<div className="menu-mobile-box">
                     <div className="menu-mobile-blur" />
                     <div className="menu-bg-mobile">
                        <div className="close-box-mobile">
                           <img src={close} className="close-button-mobile" onClick={this.closeMenu} />
                        </div>
                        <div className="menu-mobile-button-box">
                           <Link className="menu-mobile-button" to="AboutMobile" smooth={true} onClick={this.closeMenu}>About</Link>
                        </div>
                        <div className="menu-mobile-button-box">
                           <Link className="menu-mobile-button" to="CourseworkMobile" smooth={true} onClick={this.closeMenu}>Coursework</Link>
                        </div>
                        <div className="menu-mobile-button-box">
                           <Link className="menu-mobile-button" to="ExperienceMobile" smooth={true} onClick={this.closeMenu}>Experience</Link>
                        </div>
                        {/* <div className="menu-mobile-button-box">
                           <Link className="menu-mobile-button" to="LeadershipMobile" smooth={true} onClick={this.closeMenu}>Leadership</Link>
                        </div> */}
                        <div className="menu-mobile-button-box">
                           <Link className="menu-mobile-button" to="ProjectsMobile" smooth={true} onClick={this.closeMenu}>Projects</Link>
                        </div>
                        <div className="menu-mobile-button-box">
                           <Link className="menu-mobile-button" to="SocialMobile" smooth={true} onClick={this.closeMenu}>Contacts</Link>
                        </div>
                        <div className='menu-mobile-button-box'>
                           <a href="/cv.pdf" download className="resume-mobile-button" onClick={this.closeMenu}>Resume</a>
                        </div>
                     </div>
                  </div>)
                     :
                     (<div className="placeholder" />)}
               </div>)
            }
         </div>
      );
   }
}

Navbar.propTypes = {
   desktop: PropTypes.bool.isRequired,
   scrollPosition: PropTypes.number.isRequired,
};

export default Navbar;