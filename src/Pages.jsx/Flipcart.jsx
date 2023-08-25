import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Productd from './Productd';

export default function Flipcart() {
    const nav=useNavigate();
    const [front, setback] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products/search?q=phone").then((respo) => {
            return respo.json();
        }).then((data) => {
            setback(data.products)
            //   console.log(front)
        })
    }, [])
    // console.log(front)

    const change=(images,title,brand,price)=>{
       nav("/Productd",{
        state:{
            image:images,
            title:title,
            brand:brand,
            price:price
        }}
       )}


    // console.log(front)
    return (
        <>
            <div className="container">
                <div className="row">
                    {front.map((data) => (
                        <div className="col-lg-4 border py-3 my-3">
                            <h1><b>ID :</b>{data.id}</h1>

                            <img src={data.images[0]} alt="" style={{ height: "300px", width: "100%" }} />
                            <div className="row">
                                <div className="col-lg-6">
                                    <p><b>Title :</b>{data.title}</p>
                                    <p><b>Discription :</b>{data.discription}</p>
                                    <p><b>Brand :</b>{data.brand}</p>
                                    <p><b>Price :</b>{data.Price}$</p>
                                    <p><b>Rating :</b>{data.rating}</p></div>
                                <div className="col-lg-6">
                                    <button class="btn btn-primary mt-3" onClick={()=>change(data.images[0],data.title,data.brand,data.price)}>Add To Cart</button>
                                    <button class="btn btn-primary mt-4">View Now</button>
                                </div>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
