import { useState, useEffect } from 'react';
import './cards.css';
export function Cards(){

    const [data, setData] = useState([]);

    useEffect(() => {
           fetch('https://jsonplaceholder.typicode.com/todos')
           .then(response=>{return response.json()})
           .then(data=>{setData((data))})
        //    .then(()=>{console.log(data)})
        //    .catch((error)=>{console.log(error)})
      },[]);

    //   return console.log(data);
    return(
        <div className='cardsDiv'>
            {   
                data.map((item,index)=>{
                    return (
                       console.log(item)
                        
                    )
                })
            }
        </div>
    )
}