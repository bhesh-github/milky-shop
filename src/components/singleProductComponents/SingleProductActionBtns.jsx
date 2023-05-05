import React from 'react'

const SingleProductActionBtns = ({buttons}) => {
    const actionBtns = buttons.map((item, idx) =>(
        <button className='s-p-a-btn' key={idx}>
            {item}
        </button>
    ));
  return (
    <div className='single-product-action-btns'>
      {actionBtns}
    </div>
  )
}

export default SingleProductActionBtns

SingleProductActionBtns.defaultProps ={
    buttons : [
        'Buy Now',
        'Add to Cart'
    ]
}