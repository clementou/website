import '../styles/LeadershipMobile.css';
import Leadership1 from '../leadership_pages/Leadership1';
import Leadership2 from '../leadership_pages/Leadership2';
import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class LeadershipMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      suds: true,
      dsc: false,
      ws: false
    };
    this.handleClick_suds = this.handleClick_suds.bind(this);
    this.handleClick_dsc = this.handleClick_dsc.bind(this);
    this.slideTransition1 = this.slideTransition1.bind(this);
    this.slideTransition2 = this.slideTransition2.bind(this);
  }

  handleClick_suds(e) {
    e.preventDefault();
    this.setState({
      suds: true,
      dsc: false,
    });
  }

  handleClick_dsc(e) {
    e.preventDefault();
    this.setState({
      suds: false,
      dsc: true,
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

  componentDidMount() {
    this.slideTransition1();
    this.slideTransition2();
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
              <button id="leadership-button1-mobile" className={this.state.suds ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_suds}>SUDS</button>
              <button id="leadership-button2-mobile" className={this.state.dsc ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_dsc}>DSC</button>
            </div>
            <span className="leadership-menu-line-mobile" />
          </div>
          {this.state.suds ? (<div className="leadership-desc-mobile"><Leadership1 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
          {this.state.dsc ? (<div className="leadership-desc-mobile"><Leadership2 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
        </div>
      </div>
    );
  }
}

LeadershipMobile.propTypes = {
  desktop: PropTypes.bool.isRequired,
};

export default LeadershipMobile;