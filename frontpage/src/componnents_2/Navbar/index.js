import React from 'react'
import { Nav , NavIcon, NavLink ,Bars} from './NavbarElement';

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavLink to='/'>FOOD</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
        </Nav>
           
            
        </>
    )
}

export default Navbar;