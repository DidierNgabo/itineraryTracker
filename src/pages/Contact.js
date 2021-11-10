import React from 'react'
import Social from '../components/Social';

const Contact = () => {
    const socials = [
        {name:'facebook',img:"assets/images/facebook.png"},
        {name:'twitter',img:"assets/images/twitter.png"},
        {name:'instagram',img:"assets/images/insta.jpeg"},
        
    ]

    const d= new Date('2021-11-10');
    console.log(d.toLocaleString('en-US',{weekday:'long'}));
   
    return (
        <>
        <h2 className="my-4 text-center font-bold text-xl">Contact us</h2>
        <ul className="mt-4">
           {socials.map((social)=>(
                <Social img={social.img} name={social.name}/>
           ))}  
        
       </ul>
        </>
    )
}

export default Contact
