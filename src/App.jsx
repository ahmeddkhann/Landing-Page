import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/heroSection'
import Features from './components/features'
import Workflowing from './components/workflow'
import Pricing from './components/pricing'
import Testimonals from './components/testimonals'
import Footer from './components/footer'
import AxiosTut from './components/axios'
import PostApi from './components/post'


const App = () => {
  return (
    <div>
     <Navbar/>
     <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero/>
      </div>
      <Features/>
      <Workflowing/>
     <Pricing/>
     <Testimonals/>
     <Footer/>
    </div>
  )
}

export default App
