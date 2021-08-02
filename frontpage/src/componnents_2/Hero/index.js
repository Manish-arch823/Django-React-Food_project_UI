import React,{useState} from 'react'
import Navbar from '../Navbar'
import Slidebar from '../Sidebar';
import {HeroContainer , HeroContent,HeroItem,Hero1,Herop,HeroBtn} from './HeroElement';

const Hero = () => {
    const[isOpen,setIsOpen]=useState(false)
    const toggle =() =>{
        setIsOpen(!isOpen)

    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Slidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItem>
                    <Hero1>Greatest Food Ever</Hero1>
                    <Herop>Delivery in 40 min</Herop>
                    <HeroBtn> Order Now</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero;