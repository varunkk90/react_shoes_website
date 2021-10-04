import React from 'react'
import Things from './things'
import Nike_one from '../assets/nike1.png'
import Nike_two from '../assets/nike2.png'
import Nike_three from '../assets/nike3.png'
import '../styles/menu.css'
export default function items(props) {
        const Stock=[{
    name:"Men's Zoom Winflo 8 Running Shoe",
    image:Nike_one,
    brand:"nike",
    price:"₹1050.75"
},
{
    name:"Men Flex 2019 Rn Running Shoes",
    image:Nike_two,
    brand:"nike",
    price:"₹1234.67"
},
{
    name:"Men's Flex Experience  Running Shoes",
    image:Nike_three,
    brand:"nike",
    price:"₹1400.67"
},



]

    return (
        <div className="menu">
         <br />
         <br />
          <h1 className="menuTitle">Our items</h1>
          <div className="menuList">
           {Stock.map((storage,key)=>{
               return <Things storage={storage} key={key}/>
           })}

           

              
          </div>
          <br />
          <br />
          <br />
             <br />
          <br />
          <br />
             <br />
          <br />
          <br />
            <br />
         
         </div>

        
    )
}
