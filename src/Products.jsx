import { useState } from "react"

function Products({item,addItem,removeItem}){
    const [btnText, setButtonText] = useState('Add to cart');
    let btnChange = () =>{
        if(btnText === "Add to cart"){
            setButtonText("Remove from cart");
            addItem();
        }
        else{
            setButtonText("Add to cart");
            removeItem();
        }
        
    }
    
    return <div class="card" style={{width: 18 + 'rem', marginTop: 15 + 'px'}} >
<img src={item.image_url} class="card-img-top" alt="..." style = {{width:286 + 'px', height:286 + 'px'}}/>
<div class="card-body">
<h5 class="card-title">{item.name}</h5>
<p class="card-text"> Rs.{item.price_in_rupees}</p>
<button onClick = {btnChange} class="btn btn-primary">{btnText}</button>
</div>
</div>
}

export default Products