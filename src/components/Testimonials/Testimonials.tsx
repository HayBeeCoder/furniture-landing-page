import React from 'react'
import { ReactComponent as LeftArrow } from '../../assets/icons/testimonials/arrow_left.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/testimonials/arrow_right.svg';
import Client from "../../assets/images/testimonials/manPotrait.jpg"

const Testimonials = () => {
    return (
        <section className='py-[112px] mb-36 mx-[15px] lg:mx-[90px] bg-[#244D4D] bg-opacity-5 px-5 overflow-hidden'>
            <div className='max-w-[350px] lg:text-center lg:mx-auto'>

            <h2 className="font-nuto text-customGreen text-[35px] font-bold leading-tight text-left">
                What Our Happy Clients Say
            </h2>
            <p className='text-xs text-[#64717C] leading-relaxed mt-6 text-left'>
                File storage made easy - including powerful features you won't anywhere else you are
            </p>
            </div>
            <div className='mt-16 lg:mt-25 flex flex-col gap-6 lg:flex-row lg:gap-10 items-start lg:justify-center '>
                    <div className='w-64 mx-auto  lg:mx-0 lg:w-72 lg:h-96 rounded-lg overflow-hidden'>

                <img src={Client}  className="object-fill w-full " />
                </div>
                <div className='w-full lg:max-w-md '>
                    <p className=' lg:text-[18px] text-[#5E7388]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit in debitis earum officiis dolorem reiciendis impedit, sed eveniet dolor ipsum ipsa molestias dolorum labore error non animi reprehenderit? Et.</p>
                    <p className='text-[22px] font-bold mt-2 text-[#244D4D]' > Larry Page</p>
                    <p className='text-[14px] text-[#647383]' > Chief Executive Officer</p>
                    <div className='flex gap-2 items-center mt-5'>
                        <button className='bg-white outline-none rounded-full p-3'>
                            <LeftArrow className='text-customGreen'/>
                        </button>
                        <button className='bg-white outline-none rounded-full p-3'>
                            <RightArrow className='text-customGreen'/>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
