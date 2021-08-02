import React from 'react'
import {FeatureContainer,FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Food of the Day</h1>
            <p>Fast Food is popular because it's convenient, it's cheap, and it tastes good.</p>
            <FeatureButton>OrderNow</FeatureButton>
            
        </FeatureContainer>
    )
}

export default Feature;
