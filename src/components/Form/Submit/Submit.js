
import React from 'react'

import './Submit.css'



function Submit(props){

   

    return(

        <button  className='submit' type="submit">{props.children}</button>

    )

}

export default Submit

