import React,{useState, useEffect} from 'react';
import { useParams,useHistory } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Feature from '../componnents_2/Feature';
import Footer from '../componnents_2/Footer';
import ImgBg  from '../images/food.jpg'

const ProductDetail = () => {
    const [product , setProduct] = useState("null")


    const {id} = useParams()
    const history =useHistory()

    const getSingleProduct = async () => {
        const {data} = await axios.get(`http://localhost:8000/api/${id}/`)
        
        console.log(data)
        setProduct(data)

    }

    useEffect(() => {
        getSingleProduct();

    },[])

        // Delete Product 

    const deleteProduct = async (id) =>{
        await axios.delete(`http://localhost:8000/api/${id}/`)
        history.push('/home')

    }
    return (
        <div>
            <h1>Food Detail </h1>
            <div className="single-product-info">
                <img src={product.image} height="400" width="250"/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>

                <Link className="btn btn-primary m-2" to={`/${product.id}/update`} >Update</Link>
                <Link className="btn btn-danger m-2"  onClick={() => deleteProduct(product.id)} >Delete</Link>
                
                

                

            </div>
            <Feature/>
        <Footer/>

        </div>
    )
}

export default ProductDetail;
