import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';

export default function Attendance() {
    const data = [
        { argument:'Present', value:4 },
        { argument:'Absent', value:2 }
      ];

    return (
        <div style = {{ width: "475px", height: "400px", border: "1px solid #E7E7E7", boxSizing: "border-box", borderRadius: "10px", boxShadow: "0px 4px 4px 3px rgba(240, 240, 240, 0.39)", padding: "2px", backgroundColor: '#FFFFFF' }}>
           <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "15px", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px", float: "left" }}>Attendance</span>
                    <div style = {{ float: "right", alignItems: "center", display: "inline-flex" }}>
                        <span style = {{ display: "inline-flex", alignItems: "center", margin: "auto", backgroundColor: "#E0DDDD", borderRadius: "5px", boxShadow: "0px 1px 5px rgba(33, 33, 33, 0.48)", padding: '10px' }}>Weekly</span>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <span>Monthly</span>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <span>Overview</span>
                    </div>
                </div>
            </div>
            <div style = {{ padding: "15px" }}>
                <Chart
                data={data}
                height={300}
                >
                <PieSeries valueField="value" 
                    argumentField="argument" 
                    innerRadius={0.6} />
                </Chart>
            </div>
        </div>
    )
}