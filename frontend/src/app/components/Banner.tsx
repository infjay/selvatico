"use client"
import React,{useState} from 'react'

type Props = {}

const Banner = (props: Props) => {
  const [email, setEmail] = useState("")
  const handleJoin = () => {
  
    console.log(email)
    setEmail("")
  }
  
  return (
    <section className="bg-gray-800 text-white h-screen" >
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Support
        <span className="sm:block"> Increase Satisfaction </span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Selvatico revolutionizes customer and user support with AI-powered automation. Gain insights, automate tasks, and deliver exceptional support experiences effortlessly. Elevate satisfaction, efficiency, and success with Selvatico.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <input type="text" placeholder='Email Address' className='block w-full rounded border border-blue-600 bg-gray-100 pr-12 pl-3 py-3 text-sm  font-medium text-gray-950 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
        onChange={(e)=> setEmail(e.target.value)}
        value={email} />
        <button 
        className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
        onClick={()=> handleJoin()}>
          Join our waiting list
        </button>
       
      </div>
    </div>
  </div>
</section>
  )
}

export default Banner