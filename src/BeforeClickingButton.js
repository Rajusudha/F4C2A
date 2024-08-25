import React from 'react'

function BeforeClickingButton() {
  return (
    <div className='before'>
        <div className='hero'>
        <span>Enter Pincode</span>
       <div>
       <input type="number" placeholder='Pincode' className='input' />
       </div>
       <div>
         <button type='submit' className='submit'>Lookup</button>  
          </div>
        </div>
       
        
    </div>
    // <div className='before'>
    //     <div>
    //         <span>Enter Pincode</span>
    //         </div>
    //         <div className='hero'>
    //     <div> 
    //      <input type="number" placeholder='Pincode' className='input' />
    //   </div>
    //    
    //     </div>
     
    // </div>
  ) 
}

export default BeforeClickingButton
