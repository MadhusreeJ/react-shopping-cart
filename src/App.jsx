import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Products from './Products'

function App() {
  const items = [
    {
        "name": "Hydrating Facial Serum",
        "price_in_rupees": 1200,
        "image_url": "https://i.pinimg.com/564x/ec/fd/70/ecfd7078df8403224001458593589142.jpg"
    },
    {
       "name": "Hydrating Toner",
        "price_in_rupees": 950,
        "image_url": "https://i.pinimg.com/564x/2e/d5/e0/2ed5e04b2f41cd4d49da2049af52932f.jpg"
    },
    {
        "name": "Gentle Exfoliating Scrub",
        "price_in_rupees": 800,
        "image_url": "https://i.pinimg.com/564x/61/17/89/6117894a29ecfb05efe58b1c869a56a1.jpg"
    },
    {
        "name": "Brightening Face Mask",
        "price_in_rupees": 950,
        "image_url": "https://i.pinimg.com/564x/7d/06/b4/7d06b418a0cd3641a1a902c39f5ac057.jpg"
    },
    {
        "name": "Daily Moisturizer SPF 30",
        "price_in_rupees": 1100,
        "image_url": "https://i.pinimg.com/564x/a6/ab/24/a6ab24c9750e341ddbd7e16a23301fd5.jpg"
    },
    {
        "name": "Nourishing Eye Cream",
        "price_in_rupees": 1350,
        "image_url": "https://i.pinimg.com/564x/1c/1b/ab/1c1bab080bdcaf63005139f5aa65f2b2.jpg"
    },
    {
        "name": "Anti-Aging Serum",
        "price_in_rupees": 1800,
        "image_url": "https://i.pinimg.com/564x/40/77/52/407752f1813d37e4dd9c41bc100ee591.jpg"
    },
    {
        "name": "Calming Aloe Vera Gel",
        "price_in_rupees": 700,
        "image_url": "https://i.pinimg.com/564x/2d/79/5b/2d795b5ebc273fbaa49a34f34e4f6902.jpg"
    },
    {
      "name": "Revitalizing Night Cream",
      "price_in_rupees": 1500,
      "image_url": "https://i.pinimg.com/564x/8e/01/7e/8e017ee511dad5cb1a4c0c9c7a099e52.jpg"
    },
    {
        "name": "Vitamin C Brightening Serum",
        "price_in_rupees": 1400,
        "image_url": "https://i.pinimg.com/564x/0f/0d/7d/0f0d7dab64b7c4f011a084396bba44ab.jpg"
    },
    {
        "name": "Deep Cleansing Foaming Wash",
        "price_in_rupees": 850,
        "image_url": "https://i.pinimg.com/564x/0a/c9/de/0ac9de59c6b6449b5e89880446111a00.jpg"
    },
    {
        "name": "Soothing Moisture Lotion",
        "price_in_rupees": 950,
        "image_url": "https://i.pinimg.com/564x/5b/2a/82/5b2a824c18f5b5581d1d6bc691f236ae.jpg"
    }
]


const[total , setTotal] = useState(0)

let addItem = () =>{
      setTotal(total+1)
    }

let removeItem = () =>{
  setTotal(total-1)
}

  return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All Products</a></li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
      <h1 className = "heading" style={{marginLeft: 30 + '%'}}> YourCare </h1>
      <div style={{marginLeft: 20 + '%'}}>
        <button type="button" class="btn btn-outline-dark">Cart <span class="badge text-bg-dark rounded-pill">{total}</span></button>
        </div>
    </div>
  </div>
</nav>
<div class = "d-flex flex-wrap justify-content-around align-items-center" style={{marginTop: 10 + 'px'}}>
   {
    items.map((item) =>{
      return <Products item ={item}  addItem= {addItem} removeItem={removeItem}/>
    })
   }

   </div>
</div>

  </>
  )
}

export default App
