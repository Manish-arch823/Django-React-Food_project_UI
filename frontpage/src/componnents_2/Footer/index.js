import React from 'react'
// import { FaFacebook, FaYoutube } from 'react-icons/fa'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target="blank" aria-label="Facebook" rel="noopener noreferrer" >
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target="blank" aria-label="Instagram" rel="noopener noreferrer" >
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target="blank" aria-label="You Tube" rel="noopener noreferrer" >
                                <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href='//www.twitter.com./briandesigns' target="blank" aria-label="Twitter" rel="noopener noreferrer" >
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target="blank" aria-label="Linkedin" rel="noopener noreferrer" >
                                <FaLinkedin/>
                            </SocialIconLink>
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        
    )
}

export default Footer
