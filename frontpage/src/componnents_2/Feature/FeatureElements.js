import styled from 'styled-components';
import fe from '../../images/food4.jpg'


export const  FeatureContainer = styled.div`

    background-image: url(${fe});
    height:200vh;
    width:100%;
    max-height:500px;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:black;
    text-align:center;
    padding:0 1rem;

    h1{
        font-size: clamp(3rem , 5vw,5rem);
    }

    p{
        font-size: clamp(1rem , 3vw,2rem);
        margin-size:1rem;

        
    }
`

export const FeatureButton = styled.button`
    font-size:1.4rem;
    padding: 0.6rem 3rem;
    border:none;
    background:#ffc500;
    color:#000;
    transition: 0.2s ease-out;

    &:hover{
        color:#fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor:pointer;
    }



`




















