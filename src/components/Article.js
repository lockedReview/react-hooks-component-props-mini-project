import React from 'react';
import Emoji from "./Emoji.js"

function Article({ date ="January 1, 1970" , title, preview, minutes }){
  console.log()
    return(
    <article>
       <h3>{title}</h3> 
        <aside>
            <small>{date}</small>
             -
            <Emoji minutes={minutes}/>
        </aside>
        
        <p>{preview}</p>
    </article>   
    )
 }

 export default Article