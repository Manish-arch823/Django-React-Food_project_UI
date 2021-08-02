import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    ProductsContainer,
    ProductsHeading,
    Productwrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from '../componnents_2/products/productElement';
import Hero from '../componnents_2/Hero';
import Feature from '../componnents_2/Feature';
import Footer from '../componnents_2/Footer';

import { GlobalStyle } from './gobalStyles';

const ShowProducts = () => {

    const [products,setProducts] = useState([])

    const getProducts = async () =>{
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(()=>{
        getProducts();
    },[])
    return (
        < >
            <GlobalStyle />
            <Hero />
                    <ProductsContainer>
            {/* <ProductsHeading>{heading}</ProductsHeading> */}
            <Productwrapper>
            
            {
                products.map((product,index)=>(
                    <div>
 
                    <ProductCard key={index}>
                                <ProductImg src={product.image} alt={product.alt}/>
                                 <ProductInfo>
                                 <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                 <ProductPrice>{product.price}</ProductPrice>
                                 <ProductPrice>{product.category}</ProductPrice>

                                 <Link className="btn btn-primary m-2" to={`/${product.id}`} >Show Details</Link>
                            </ProductInfo>


                      </ProductCard>
                      

                </div>    

                )
                  
                )
            }
                    </Productwrapper>
        </ProductsContainer> 
        <Feature/>
        <Footer/>
        </>

    )

}

export default ShowProducts;





