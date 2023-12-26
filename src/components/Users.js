import React from 'react'
import { useEffect } from 'react';
// import { useState } from 'react';
import data from '../data.json';

import {UserCard} from './UserCard'
import './users.css';

export function Users(){
    console.log(data);
    return (
    // useEffect(()=>{
    //     fetch('../data.jso')
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    // },[]);

    <div className='Users' >   
    {
        data.map((item,index)=>{
            return(
                <UserCard name={item.name} username={item.username} email={item.email} src={item.picture} alt="User" key={index}/>
            
            )
        })
    }
</div>
)

   
   

   
}