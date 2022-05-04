import React from 'react'
import Button from '../Button'

const Footer = () => {
    return (
        <footer className='bg-[#244D4D] py-[100px] lg:px-[100px] '>
            <div className='lg:flex lg:justify-between'>
                <p className='text-white lg:text-[44px] max-w-[640px] leading-tight'>
                    Start your business today for  <pre className='inline'>$</pre>0+ state fees.
                </p>

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
        </footer>
    )
}

export default Footer