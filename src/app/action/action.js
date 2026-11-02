import { useState } from "react";

export default function addtoCart(){
const [addproduct, setaddProduct] = useState([]);
const[active, setActive] = useState(false);

const handleAddedProduct = (product) =>{
setActive(!active);
const productId = (product.id)
product.id = addproduct.find(producttitem => producttitem === productId);
}

}


