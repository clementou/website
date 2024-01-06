import '../styles/Leadership.css';
import Leadership1 from '../leadership_pages/Leadership1';
import Leadership2 from '../leadership_pages/Leadership2';
import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class Leadership extends React.Component {
  constructor() {
    super();
    this.state = {
      suds: true,
      dsc: false,
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
    $("#leadership-button1").on("click", function () {
      $(".leadership-menu-line").animate({ top: '448vh' });
    });
  }

  slideTransition2 = () => {
    $("#leadership-button2").on("click", function () {
      $(".leadership-menu-line").animate({ top: '455vh' });
    });
  }

  componentDidMount() {
    this.slideTransition1();
    this.slideTransition2();
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
                <button id="leadership-button1" className={this.state.suds ? "leadership-menu-button-clicked" : "leadership-menu-button"} onClick={this.handleClick_suds}>Students Using Data For Social Good</button>
                <button id="leadership-button2" className={this.state.dsc ? "leadership-menu-button-clicked" : "leadership-menu-button"} onClick={this.handleClick_dsc}>Data Science Club</button>
              </div>
            </div>
            {this.state.suds ? (<div className="leadership-desc"><Leadership1 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
            {this.state.dsc ? (<div className="leadership-desc"><Leadership2 desktop={this.props.desktop} /></div>) : (<div className="placeholder" />)}
          </div>
        </div>
      </div>
    );
  }
}

Leadership.propTypes = {
  desktop: PropTypes.bool.isRequired,
};

export default Leadership;