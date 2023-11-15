import React from 'react';
import '../styles/CourseworkMobile.css';
import '../styles/SemesterMobile.css';
import InteractiveList from './InteractiveList';
import courseworkData from '../../assets/data/courseworkData.json';

class CourseworkMobile extends React.Component {
   state = {
      currentSemester: courseworkData[0].semesterId,
      lineLeft: '6vw',
   };

   handleClick = (semesterId) => {
      const index = courseworkData.findIndex(s => s.semesterId === semesterId);
      const leftPosition = `${6 + (index * 88 / (courseworkData.length))}vw`; // TODO fix this
      this.setState({ currentSemester: semesterId, lineLeft: leftPosition });
   }

   getSemesterFullName = (semesterId) => {
      const semester = courseworkData.find(s => s.semesterId === semesterId);
      return semester ? semester.semesterName : '';
   }

   renderInteractiveList = () => {
      const semesterCourses = courseworkData.find(semester => semester.semesterId === this.state.currentSemester).courses;
      return (
         <InteractiveList
            initialActiveItem="c1"
            items={semesterCourses}
            containerClass="semester-mobile"
            topClass="semester-top-mobile"
            bottomClass="semester-bottom-mobile"
            itemBoxClass="semester-course-box-mobile"
            buttonClass="semester-course-mobile"
            clickedClass="semester-course-clicked-mobile"
            lineBoxClass="semester-line-box-mobile"
            lineClass="semester-line-mobile"
            nameClass="semester-course-name-mobile"
            descClass="semester-course-desc-mobile"
            numberClass="semester-course-number-mobile"
         />
      );
   }

   render() {
      const { currentSemester, lineLeft } = this.state;

      return (
         <div id="CourseworkMobile" className="coursework-mobile">
            <div className="coursework-box-mobile">
               <div className="coursework-title-box-mobile">
                  <h2 className="coursework-num-mobile">02</h2>
                  <h2 className="coursework-title-text-mobile">Relevant Coursework</h2>
                  <div className="coursework-line-box-mobile">
                     <div className="coursework-line-mobile" />
                  </div>
               </div>
               <div className="coursework-menu-mobile">
                  <div className="coursework-menu-buttons-mobile">
                     {courseworkData.map((semester) => (
                        <button
                           key={semester.semesterId}
                           className={currentSemester === semester.semesterId ? "coursework-menu-button-clicked-mobile" : "coursework-menu-button-mobile"}
                           onClick={() => this.handleClick(semester.semesterId)}>
                           {semester.semesterName}
                        </button>
                     ))}
                  </div>
                  <span className="coursework-menu-line-mobile" style={{ left: lineLeft }} />
               </div>
               <div className="coursework-page-mobile">
                  {this.renderInteractiveList()}
               </div>
            </div>
         </div>
      );
   }
}

export default CourseworkMobile;
