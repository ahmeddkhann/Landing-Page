import React from 'react'
import { CheckCircle } from 'lucide-react'
const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCRXFqhFo2XMaKbqjmg8puMYy84USguw-2g&s"
const Workflowing = () => {
    const checkListItems = [
        {
            title: "Code merge made easy",
            description: "Track the perfomance of your VR apps and gain insights into user behavior."
        },
        {
            title: "Review code without worry",
            description: "Track the perfomance of your VR apps and gain insights into user behavior."
        },
        {
            title: "AI Assistance to reduce time",
            description: "Track the perfomance of your VR apps and gain insights into user behavior."
        },
        {
            title: "Share work on time",
            description: "Track the perfomance of your VR apps and gain insights into user behavior."
        }
    ]
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
      Accelerate your 
      <span
            className="bg-gradient-to-r from-orange-500 to-orange-800
                                 text-transparent bg-clip-text"
          >
            {" "}
            coding workflow
          </span>
        </h2> 
        <div className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2'>
            <img src={image} className='lg:w-[600px] lg:ml-20 ml-10 mt-10 '  alt="" />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
            {checkListItems.map((item, index)=>(
                <div key={index} className='flex mb-12'>
                    <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10
                                       p-2 justify-center items-center rounded-full'>
                                        <CheckCircle/>
                    </div>
                    <div className='flex-col'>
                    <div className='mt-1 mb-2 text-xl'>
                        {item.title}
                    </div>
                    <div className='text-md text-neutral-500'>
                        {item.description}
                    </div>
                    </div>
                </div>
            ))}
            </div>

        </div>
    </div>
  )
}

export default Workflowing
