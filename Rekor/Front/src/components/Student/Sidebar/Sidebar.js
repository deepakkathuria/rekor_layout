import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    const icons = [
     DashboardRoundedIcon,
     MenuBookRoundedIcon,
     FeedRoundedIcon,
     PeopleAltRoundedIcon,
     LocalAtmRoundedIcon,
     EventNoteRoundedIcon,
     NotificationsRoundedIcon
  ];

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>
                <div style={{position: 'fixed', overflowY: 'auto'}}>
                  <div style={{ maxHeight: '150px', textAlign: 'center' }}>
                    <div style={{ margin: 'auto', height: 'auto', width: 'auto', overflow: 'hidden', paddingTop: '29px' }}>
                      <img style={{ maxHeight: '100%', width: '91px', overflow: 'hidden', margin: 'auto', borderRadius: '50%'  }} src="https://i.ibb.co/6mNnF3y/preview.jpg" alt="logo" />
                    </div>
                    <p style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', lineHeight: '21px', color: '#FFFFFF' }}>Company</p>
                  </div>
                    {
                        SidebarItems.map((item, index)=> {
                          const Icon = icons[index];
                            return (
                                <Link to={item.route}>
                                    <SidebarItem key={item.name}
                                                 active={index === activeIndex}
                                    >
                                        <p><Icon/></p>
                                        &nbsp;
                                        <p>{item.name}</p>
                                    </SidebarItem>
                                </Link>
                            );
                        })
                    }
                </div>
                <div className="behind-the-scenes"/>
                <div style={{ backgroundColor: '#FF2934', height: '5vh', display: 'flex', alignItems: 'center', position: 'fixed', bottom: 0 }}><a href="#">Logout</a>&nbsp;<p style={{ color: 'white' }}><LogoutRoundedIcon/></p></div>
            </SidebarParent>
        </>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: linear-gradient(179.21deg, rgba(4, 5, 19, 0.85) 6.55%, rgba(4, 5, 19, 0.8) 35.17%, rgba(4, 5, 19, 0.77) 64.84%, rgba(4, 5, 19, 0.85) 99.32%);
  
  a {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    padding-left: 16px;
  }
  
  & > div {
    width: 162px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 162px;
    height: 95vh;
  }
`;

const SidebarItem = styled.div`
  transition: all 1s ease-in-out;
  background: ${props => props.active ? "linear-gradient(180deg, #585961 0%, rgba(88, 89, 97, 0.37) 100%)" : ""};
  boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.33);
  height: 42px;
  text-align: left;
  padding-left: 16px;
  display: flex;
  align-items: center;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    display: inline-block;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: linear-gradient(180deg, #585961 0%, rgba(88, 89, 97, 0.37) 100%);
  }
`;