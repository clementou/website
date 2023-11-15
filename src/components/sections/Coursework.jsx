import React from 'react';
import '../styles/Coursework.css';
import '../styles/Semester.css';
import InteractiveList from './InteractiveList';
import courseworkData from '../../assets/data/courseworkData.json';

class Coursework extends React.Component {
   state = {
      currentSemester: courseworkData[0].semesterId,
      lineLeft: '25vw',
   };

   componentDidMount() {
      this.setLinePosition(this.state.currentSemester);
   }

   setLinePosition = (semesterId) => {
      const semesters = courseworkData.map(data => data.semesterId);
      const index = semesters.indexOf(semesterId);
      const interval = 50 / (semesters.length);
      const leftPosition = `${25 + index * interval}vw`;
      this.setState({ lineLeft: leftPosition });
   };

   handleClick = (semesterId) => {
      this.setState({ currentSemester: semesterId }, () => {
         this.setLinePosition(semesterId);
      });
   };

   renderInteractiveList = () => {
      const semesterCourses = courseworkData.find(semester => semester.semesterId === this.state.currentSemester).courses;
      return (
         <InteractiveList
            initialActiveItem="c1"
            items={semesterCourses}
            containerClass="semester"
            topClass="semester-left"
            bottomClass="semester-right"
            itemBoxClass="semester-course-box"
            buttonClass="semester-course"
            clickedClass="semester-course-clicked"
            lineBoxClass="semester-line-box"
            lineClass="semester-line"
            nameClass="semester-course-name"
            descClass="semester-course-desc"
         />
      );
   }

   getSemesterFullName = (semesterId) => {
      const semester = courseworkData.find(s => s.semesterId === semesterId);
      return semester ? semester.semesterName : '';
   }

   render() {
      const { currentSemester, lineLeft } = this.state;
      const semesters = courseworkData.map(data => data.semesterId);

      return (
         <div id="Coursework" className="coursework">
            <div className="coursework-box">
               <div className="coursework-title-box">
                  <h2 className="coursework-num">02</h2>
                  <h2 className="coursework-title-text">Relevant Coursework</h2>
                  <div className="coursework-line-box">
                     <div className="coursework-line" />
                  </div>
               </div>
               <div className="coursework-menu">
                  <span className="coursework-menu-line" style={{ left: lineLeft }} />
                  <div className="coursework-menu-buttons">
                     {semesters.map(semesterId => (
                        <button
                           key={semesterId}
                           className={currentSemester === semesterId ? "coursework-menu-button-clicked" : "coursework-menu-button"}
                           onClick={() => this.handleClick(semesterId)}>
                           <p className="coursework-menu-button-text">{this.getSemesterFullName(semesterId)}</p>
                        </button>
                     ))}
                  </div>
               </div>
               <div className="coursework-page">
                  {this.renderInteractiveList()}
               </div>
            </div>
         </div>
      );
   }
}

export default Coursework;
