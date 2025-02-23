import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const err = useRouteError();
  return (
    <div className='justify-items-center items-center'>
      <h1 className='mx-20 mt-40 text-9xl text-orange-400'>OOps!!</h1>
      <h2 className='my-10 ml-40 text-2xl text-green-600'>Something went wrong ... </h2>
      <h3 className='mx-20 mt-5 text-5xl text-red-500'>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default ErrorPage
