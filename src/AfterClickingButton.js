import React from 'react'

function AfterClickingButton() {
  return (
    <div className='After'>
        <div>
           <div> 
            <span className='pincode'>Pincode: 110048</span>
            </div>
            <div>
            <span className='message'>Message: Number of pincode(s) found: </span>
            </div>
            <div>
            <input type="number" placeholder='Filter' className='filter'  />
           </div>
        </div>
        <div className="card">
            <div>
            <span className='addres'>Name</span>
            </div>
            <div>
            <span className='addres'>Branch Type</span>
            </div>
           <div>
           <span className='addres'>Delivery Status</span>
           </div>
           <div>
           <span className='addres'>District</span>
           </div>
           <div>
           <span className='addres'>Division</span>
           </div>
        </div>
      
    </div>
  )
}

export default AfterClickingButton
