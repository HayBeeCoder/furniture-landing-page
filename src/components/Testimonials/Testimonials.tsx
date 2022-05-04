import React from 'react'
import { ReactComponent as LeftArrow } from '../../assets/icons/testimonials/arrow_left.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/testimonials/arrow_right.svg';
import Client from "../../assets/images/testimonials/manPotrait.jpg"

const Testimonials = () => {
    return (
        <section className='py-[112px] mx-[15px] lg:mx-[90px] bg-[#244D4D] bg-opacity-5'>
            <div className='max-w-[350px] text-center mx-auto'>

            <h2 className="font-nuto text-customGreen text-[35px] font-bold leading-tight">
                What Our Happy Clients Say
            </h2>
            <p className='text-xs text-[#64717C] leading-relaxed mt-6'>
                File storage made easy - including powerful features you won't anywhere else you are
            </p>
            </div>
            <div className='mt-[100px] lg:flex lg:gap-5 items-start '>
                <div className='w-72 h-96 rounded-lg overflow-hidden mx-auto flex-shrink-0'>

                <img src={Client}  className="object-fill w-full " />
                </div>
                <div className='flex-shrink-0 lg:max-w-md'>
                    <p className='text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit in debitis earum officiis dolorem reiciendis impedit, sed eveniet dolor ipsum ipsa molestias dolorum labore error non animi reprehenderit? Et.</p>
                    <p className='text-[22px] font-bold mt-4'> Larry Page</p>
                    <p className='text-[14px]'> Chief Executive Officer</p>
                    <div className='flex gap-2 items-center mt-5'>
                        <button className='bg-white outline-none rounded-full p-3'>
                            <LeftArrow/>
                        </button>
                        <button className='bg-white outline-none rounded-full p-3'>
                            <RightArrow/>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
