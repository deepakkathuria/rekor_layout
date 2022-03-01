import React from 'react'

export default function UpcomingTest() {
    return (
        <div style = {{ width: "370px", height: "470px", border: "1px solid #E7E7E7", boxSizing: "border-box", borderRadius: "10px", boxShadow: "0px 4px 4px 3px rgba(240, 240, 240, 0.39)", display: "inline-flex", position: "absolute", bottom: "14px", right: "60px", padding: "2px", backgroundColor: '#FFFFFF' }}>
            <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "15px", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px", float: "left" }}>Upcoming Test</span>
                </div>
            </div>
        </div>
    )
}