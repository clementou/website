import '../styles/ExperiencePage.css';
import './Leadership1.css';
import arrow from '../../assets/images/arrow.png';
import React from 'react';

class Leadership1 extends React.Component {
    render() {
        return (
            <div className="leadership-page">
                <div className="experience-page">
                    <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
                        <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                            {this.props.desktop ? (<p className="job-title">Director of Corporate Sponsorship & Finance</p>) : (<p className="job-title-mobile">Director of Finance</p>)}
                            <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Hack4Impact</p>
                        </div>
                        <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>April 2022 - Present</p>
                    </div>
                    <div className="job-desc-box">
                        <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                            <img src={arrow} className="bullet" />
                            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Hack4Impact is an organization in which students form project teams to build full-stack software solutions for NPOs to make a positive impact.</p>
                        </div>
                        <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                            <img src={arrow} className="bullet" />
                            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Last year, I was elected by my peers to seek out funding, present to companies, manage finances, and maintain relationships with corporate sponsors.</p>
                        </div>
                        <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                            <img src={arrow} className="bullet" />
                            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I pioneered the position and sourced our first ever corporate partners, bringing in over $3000 for the organization!</p>
                        </div>
                    </div>
                </div>
                <div className="experience-page">
                    <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
                        <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                            <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Product Manager</p>
                            <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Hack4Impact</p>
                        </div>
                        <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>January 2022 - Present</p>
                    </div>
                    <div className="job-desc-box">
                        <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                            <img src={arrow} className="bullet" />
                            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>This year I've been managing a team of 9 students developing a volunteer dashboard to drive up engagement for an NPO partner.</p>
                        </div>
                        <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                            <img src={arrow} className="bullet" />
                            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I incorporated agile development techniques such as weekly stand-ups, bi-weekly sprints, and pair programming.</p>
                        </div>
                        <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                            <img src={arrow} className="bullet" />
                            <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I handled client communication, specified product features, and defined project timelines and deliverables.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Leadership1;