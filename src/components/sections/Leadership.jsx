import '../styles/Leadership.css';
import Leadership1 from '../leadership_pages/Leadership1';
import Leadership2 from '../leadership_pages/Leadership2';
import Leadership3 from '../leadership_pages/Leadership3';
import React from 'react';
import $ from 'jquery';

class Leadership extends React.Component {
   constructor() {
      super();
      this.state = {
         h4i: true,
         pamc: false,
         ws: false
      };
      this.handleClick_h4i = this.handleClick_h4i.bind(this);
      this.handleClick_pamc = this.handleClick_pamc.bind(this);
      this.handleClick_ws = this.handleClick_ws.bind(this);
      this.slideTransition1 = this.slideTransition1.bind(this);
      this.slideTransition2 = this.slideTransition2.bind(this);
      this.slideTransition3 = this.slideTransition3.bind(this);
   }

   handleClick_h4i(e) {
      e.preventDefault();
      this.setState({
         h4i: true,
         pamc: false,
         ws: false
      });
   }

   handleClick_pamc(e) {
      e.preventDefault();
      this.setState({
         h4i: false,
         pamc: true,
         ws: false
      });
   }

   handleClick_ws(e) {
      e.preventDefault();
      this.setState({
         h4i: false,
         pamc: false,
         ws: true
      });
   }

   slideTransition1 = () => {
      $("#leadership-button1").on("click", function () {
         $(".leadership-menu-line").animate({ top: '448vh' });
      });
   }

   slideTransition2 = () => {
      $("#leadership-button2").on("click", function () {
         $(".leadership-menu-line").animate({ top: '455vh' });
      });
   }

   slideTransition3 = () => {
      $("#leadership-button3").on("click", function () {
         $(".leadership-menu-line").animate({ top: '462vh' });
      });
   }

   componentDidMount() {
      this.slideTransition1();
      this.slideTransition2();
      this.slideTransition3();
   }

   render() {
      return (
         <div id="Leadership" className="leadership">
            <div className="leadership-box">
               <div className="leadership-title-box">
                  <p className="leadership-num">04</p>
                  <p className="leadership-title-text">Leadership & Impact</p>
                  <div className="leadership-line-box">
                     <div className="leadership-line" />
                  </div>
               </div>
               <div className="leadership-content">
                  <div className="leadership-menu">
                     <span className="leadership-menu-line" />
                     <div className="leadership-menu-buttons">
                        <button id="leadership-button1" className={this.state.h4i ? "leadership-menu-button-clicked" : "leadership-menu-button"} onClick={this.handleClick_h4i}>Hack4Impact</button>
                        <button id="leadership-button2" className={this.state.ws ? "leadership-menu-button-clicked" : "leadership-menu-button"} onClick={this.handleClick_ws}>Workshops</button>
                        <button id="leadership-button3" className={this.state.pamc ? "leadership-menu-button-clicked" : "leadership-menu-button"} onClick={this.handleClick_pamc}>Palo Alto Music Connection</button>
                     </div>
                  </div>
                  {this.state.h4i ? (<div className="leadership-desc"><Leadership1 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
                  {this.state.ws ? (<div className="leadership-desc"><Leadership2 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
                  {this.state.pamc ? (<div className="leadership-desc"><Leadership3 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
               </div>
            </div>
         </div>
      );
   }
}

export default Leadership;