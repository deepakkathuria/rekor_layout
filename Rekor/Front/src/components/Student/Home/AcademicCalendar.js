import React from 'react'
import MonthSelect from './MonthDropdown'
import YearSelect from './YearDropdown'

export default function AcademicCalendar() {
    return (
        <div style = {{ width: "750px", height: "470px", border: "1px solid #E7E7E7", boxSizing: "border-box", borderRadius: "10px", boxShadow: "0px 4px 4px 3px rgba(240, 240, 240, 0.39)", padding: "2px", backgroundColor: '#FFFFFF' }}>
            <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "15px", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px", float: "left" }}>Academic Calendar</span>
                    <div style = {{ float: "right", display: 'inline-flex' }}>
                        <MonthSelect/>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <YearSelect/>
                    </div>
                </div>
            </div>
            <div style = {{ padding: "15px" }}>
                <span>M</span>
            </div>
        </div>
    )
}