import React from 'react'

function Coffeeitem(props) {
 const {resData} = props;
 const { name } = resData?.card.info;
  return (
    <div className='border-4 border-red-600 m-4 w-48 h-72 hover:cursor-pointer hover:border-orange-500'>

        <img className="h-28 w-48" src="https://www.impulsecoffees.com/cdn/shop/products/DSC09367_ee16025f-e824-40cf-85b8-776834d529cf.jpg?v=1659000828&width=1200" alt="" />
        <h1 className='text-xl font-bold'>{name}</h1>
        
        <div>ratings</div>
        <button className='bg-green-600 p-2 border-2 border-gray-900'>Add to cart </button>
        <h3>$Price</h3>
    </div>
  )
}

export default Coffeeitem
