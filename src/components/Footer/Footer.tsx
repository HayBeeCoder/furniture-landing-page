import React from 'react'
import Button from '../Button'
import { ReactComponent as Facebook } from "../../assets/icons/footer/facebook_icon.svg"
import { ReactComponent as Twitter } from "../../assets/icons/footer/twitter_bird_icon.svg"
import { ReactComponent as Pinterest } from "../../assets/icons/footer/pinterest_icon.svg"
import { ReactComponent as Instagram } from "../../assets/icons/footer/instagram_icon.svg"

const Footer = () => {
    return (
        <footer className='bg-[#244D4D] py-16 lg:py-[100px] px-5 lg:px-[100px] '>
            <div className=' flex gap-4 flex-col lg:flex-row lg:justify-between border-b-[1px] pb-20 border-opacity-5'>
                <div className='text-white text-3 text-3xl lg:text-[44px] max-w-[640px] leading-tight'>
                    Start your business today for  <pre className='inline'>$</pre>0+ state fees.
                </div>

                <div className=''>
                    <div className='mr-[2px] inline'>

                        <Button textColor='#244d4d' bgColor='#fff' >
                            Get Started
                        </Button>
                    </div>
                    <div className='ml-[2px] inline'>
                        <Button bgColor='transparent' textColor='#fff' >
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
            <div className='pt-16 flex flex-col gap-5 lg:flex-row justify-between '>
                <div className='w-full lg:max-w-md'>
                    <a href="#">

                        <figure >
                            <span className='text-white font-nuto font-bold text-xl mb-3 block'>

                                furnIture
                            </span>
                        </figure>
                    </a>
                    <p className='text-white mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis recusandae iste sapiente magnam nihil ipsum, impedit officia dolorem asperiores labore quas expedita ducimus placeat aspernatur praesentium odit possimus saepe totam.
                    </p>
                    <div className='flex gap-5'>
                        <a href="" className='w-8 h-8 block hover:opacity-90 hover:transform hover:scale-105'>
                            <Facebook className='w-full h-full text-lg text-white fill-white' />
                        </a>
                        <a href="" className='w-8 h-8 block hover:opacity-90 hover:transform hover:scale-105'>
                            <Twitter className='w-full h-full text-lg text-white fill-white' />
                        </a>
                        <a href="" className='w-8 h-8 block hover:opacity-90 hover:transform hover:scale-105'>
                            <Instagram className='w-full h-full text-lg text-white fill-white' />
                        </a>
                        <a href="" className='w-8 h-8 block hover:opacity-90 hover:transform hover:scale-105'>
                            <Pinterest className='w-full h-full text-lg text-white fill-white' />
                        </a>
                    </div>
                 </div>
                    <ul className='text-white my-2'>
                        <li className='font-bold mb-3 text-lg'>Entity Types</li>
                        <div className='flex flex-col gap-1'>


                        <li>
                            <a href="" className="hover:underline ">
                                Knowledge Base
                            </a>
                        </li>
                        <li>
                        <a href="" className="hover:underline ">
                                Security
                            </a>
                        </li>

                        <li>
                            <a href="" className="hover:underline">

                            Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">

                            About Us
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">

                            FAQs
                            </a>
                        </li>
                        </div>
                    </ul>
                    <ul className='text-white my-2 '>
                        <li className='font-bold  mb-3 text-lg'>Entity Types</li>
                        <div className='flex flex-col gap-1'>


                        <li>
                            <a href="" className="hover:underline">
                                Knowledge Base
                            </a>
                        </li>
                        <li>
                        <a href="" className="hover:underline">
                                Security
                            </a>
                        </li>

                        <li>
                            <a href="" className="hover:underline">

                            Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">

                            About Us
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">

                            FAQs
                            </a>
                        </li>
                        </div>
                    </ul>
                    <ul className='text-white my-2'>
                        <li className='font-bold text-lg mb-3'>Services</li>
                        <div className='flex flex-col gap-1'>


                        <li>
                            <a href="" className='hover:underline'>

                            Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:underline'>

                            About Us
                            </a>
                        </li>
                        <li>
                            <a href="" className='hover:underline'>

                            FAQs
                            </a>
                        </li>
                        </div>
                    </ul>
            </div>
        </footer>
    )
}


export default Footer