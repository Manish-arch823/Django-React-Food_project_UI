import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Feature from '../componnents_2/Feature';
import Footer from '../componnents_2/Footer';

const AddProduct = ()  => {
    const [image,setImage] = useState(null)
    const [name, setName] =useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const [category, setCategory] =useState("")



    const  history = useHistory();

    const AddProductInfo = async  ()  => {
        let formField = new FormData()

        formField.append('name' , name)
        formField.append('price' , price)
        formField.append('description' , description)
        formField.append('category' , category)

        if (image !== null){
            formField.append('image' , image)
        }

        await axios(
            {
                method:'post',
                url:'http://localhost:8000/api/',
                data:formField,
            }).then((response)=>{
                console.log(response.data);
                history.push('/home')
            })
      

    } 
   


    return (
        <div>

            
            <div className="container">
            <h1>Add Food</h1>
                <div className="form-group">

                <div className="form-group">
                    {/* <img src={image}/> */}
                    <label>Select Image to upload</label>
                        <input
                        type="file"
                        className="form-control form-control-lg"
                      
                        name="image"
                        
                        onChange={(e) => setImage(e.target.files[0])} />
                     </div>   



                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Food Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                     </div>   

                     <div className="form-group">

                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Food Price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                     </div>   

                     <div className="form-group">
                        <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Food Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} /> 
                     </div>   

                     <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Food Category "
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} />         

                    </div>     

                    <button className="btn btn-success" onClick={AddProductInfo}  >Add Food</button>                                                        
                    
                </div>
            </div>
            <Feature/>
        <Footer/>
        </div>
    )
}
export default AddProduct;




