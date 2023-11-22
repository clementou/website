import '../styles/LeadershipMobile.css';
import Leadership1 from '../leadership_pages/Leadership1';
import Leadership2 from '../leadership_pages/Leadership2';
import Leadership3 from '../leadership_pages/Leadership3';
import React from 'react';
import $ from 'jquery';


class LeadershipMobile extends React.Component {
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
    $("#leadership-button1-mobile").on("click", function () {
      $(".leadership-menu-line-mobile").animate({ left: '6vw' });
    });
  }

  slideTransition2 = () => {
    $("#leadership-button2-mobile").on("click", function () {
      $(".leadership-menu-line-mobile").animate({ left: '35.3vw' });
    });
  }

  slideTransition3 = () => {
    $("#leadership-button3-mobile").on("click", function () {
      $(".leadership-menu-line-mobile").animate({ left: '64.6vw' });
    });
  }

  componentDidMount() {
    this.slideTransition1();
    this.slideTransition2();
    this.slideTransition3();
  }



  render() {
    return (
      <div id="LeadershipMobile" className="leadership-mobile">
        <div className="space" />
        <div className="leadership-box-mobile">
          <div className="leadership-title-box-mobile">
            <p className="leadership-num-mobile">04</p>
            <p className="leadership-title-text-mobile">Leadership & Impact</p>
            <div className="leadership-line-box-mobile">
              <div className="leadership-line-mobile" />
            </div>
          </div>
          <div className="leadership-menu-mobile">
            <div className="leadership-menu-buttons-mobile">
              <button id="leadership-button1-mobile" className={this.state.h4i ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_h4i}>Hack4Impact</button>
              <button id="leadership-button2-mobile" className={this.state.ws ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_ws}>Workshops</button>
              <button id="leadership-button3-mobile" className={this.state.pamc ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_pamc}>Palo Alto Music Connection</button>
            </div>
            <span className="leadership-menu-line-mobile" />
          </div>
          {this.state.h4i ? (<div className="leadership-desc-mobile"><Leadership1 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
          {this.state.ws ? (<div className="leadership-desc-mobile"><Leadership2 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
          {this.state.pamc ? (<div className="leadership-desc-mobile"><Leadership3 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
        </div>
      </div>
    );
  }
}

export default LeadershipMobile;