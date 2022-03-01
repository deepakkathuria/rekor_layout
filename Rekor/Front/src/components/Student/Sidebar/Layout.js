import React from 'react';
import Sidebar from "./Sidebar";
import Nav from "./Nav";

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar history={props.history}/>
                <div style={{width: '100%'}}>
                    <Nav/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;