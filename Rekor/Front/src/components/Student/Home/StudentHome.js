import React from 'react';
import AcademicCalendar from './AcademicCalendar';
import Attendance from './Attendance';
import HomeWork from './HomeWork';
import TimeTable from './TimeTable';
import UpcomingTest from './UpcomingTest';
import './Home.css';

export default function StudentHome() {
  return (
    <div style = {{ position: "relative", overflow: "auto", backgroundColor: '#F8F9FF' }}>
            <div style = {{ width: "22%", height: "100%", textAlign: "left", padding: "15px", alignItems: "center", backgroundColor: '#FFFFFF' }}>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "25px" }}>Hello, <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "25px" }}>First Name</span>&nbsp;&nbsp;<span class="wave">👋</span></span>
                <br/>
                <br/>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "italic", fontWeight: "normal", fontSize: "16px" }}>Quote of the day</span>
                <br/>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "18px", color: "#636363" }}>"Two to three lines of a quote will fit here perfectly along with the name of the author."</span>
                <br/>
                <br/>
                <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", color: "#636363", float: "right" }}>- Name of the Author</span>
                <br/>
                <br/>
                <br/>
                <br/>
                <TimeTable/>
            </div>
            <div style = {{ width: "76.8%", display: "inline-flex", position: "absolute", top: "5px", right: 0 }}>
                <div style = {{ paddingTop: "37px", paddingLeft: "74px", paddingRight: "60px"}}>
                    <div style = {{ height: "404px" }}>
                        <Attendance/>
                        <HomeWork/>
                    </div>
                    <div style = {{ height: "auto", paddingTop: "10px", paddingBottom: "14px" }}>
                        <AcademicCalendar/>
                        <UpcomingTest/>
                    </div>
                </div>
            </div>         
        </div>
  );
}
