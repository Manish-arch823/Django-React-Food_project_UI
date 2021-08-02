import React from 'react'
import  { SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './sidebarElement'
// import AddProduct from '../../components/AddProduct';
// import ShowProducts from '../../components/ShowProducts';

// import { BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
const Slidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/home">All Food</SidebarLink>
                <SidebarLink to="/addProduct">Add Food</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
            
        </SidebarContainer>
    )
}

export default Slidebar
