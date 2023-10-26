/* eslint-disable no-useless-escape */
import React from 'react'
import listImg from '../src/assets/images/icon-list.svg'
import sideDesktop from './assets/images/illustration-sign-up-desktop.svg'
import successImg from './assets/images/icon-success.svg'
import sideMobile from './assets/images/illustration-sign-up-mobile.svg'

const App = () => {

  const productList = [
    {
      name: "Product discovery and building what matters"

    }, 
    {
      name: 'Measuring to ensure updates are a success'
    }, 
    {
      name: 'And much more!'
    }
  ]

  const [ email, setEmail ] = React.useState( '' )
  const [errorEmail, setErrorEmail  ] = React.useState( '' )
  const [showSucces, setShowSuccess] = React.useState( false )

  const handleEmail = (e) => {
    if ( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test( e.target.value ) ) {
      setEmail( e.target.value )
      setErrorEmail( '' )
    } else {
      setErrorEmail( 'Valid email required' )
      setEmail( e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( !email ) {
      setErrorEmail('Valid email required')
    } else if( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test( email ) ) {
      setEmail( email )
      setErrorEmail( '' )
      setShowSuccess(true)
    }
  }

  return (
    <React.Fragment>
      <div className={` relative w-full h-screen` + (screen.width > 768 ? ' bg-[#36384D]' : ' bg-white')}>
        {
          !showSucces ? 
        <div className='md:w-6/12 w-full md:h-auto h-full absolute top-1/2 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 flex md:flex-row flex-col md:p-4 ps-0 rounded-2xl'>
          <div className='md:w-1/2 md:order-1 order-2 md:px-12 px-4 py-16'>
            <h2 className='text-4xl font-bold text-gray-900'>Stay updated!</h2>
            <p className="text-sm py-4 text-gray-700">Join 60,000+ product managers receiving monthly updates on.</p>
            {
              productList.map( ( item, index  ) => {
                return <p className='flex items-center gap-x-2 mt-1 text-xs text-gray-700' key={index}><img className='w-4' src={listImg} />{item.name}</p>
              })
            }
            <form onSubmit={handleSubmit}>
              <div className='mt-4 mb-1 flex justify-between'> 
              <label htmlFor="email" className='text-xs text-gray-700'>Email address</label>
              <span className='text-red-500 text-xs'>{errorEmail}</span>
            </div>
            <input value={email} onChange={handleEmail} id='email' type="email" placeholder='email@company.com' className={`py-2 mb-3 px-4 text-sm placeholder:text-gray-400 w-full border border-gray-400 rounded-md outline-none focus:outline-none active:outline-none valid:border-green-500 ` + (errorEmail ? ' border-red-500 text-red-500' : 'border-gray-400 ')} required/>
            <button onClick={handleSubmit} className='py-2 px-3 text-sm bg-[#36384D] active:scale-95 text-white w-full rounded-md'>Subscribe to monthly newsletter</button>
            </form>
          </div>
          <div className='md:w-1/2 md:order-2 order-1' >
            <img src={screen.width > 768 ? sideDesktop :  sideMobile } className='w-full h-full' />
          </div>
        </div> 
        
            
        : 
        
        
        <div className='md:w-3/12 w-full absolute top-1/2 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl'>
          <img src={successImg} />
          <h2 className='text-4xl font-bold text-gray-900 my-6'>Thanks for subscribing!</h2>
          <p>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
          <button onClick={()=>setShowSuccess(false) || setEmail('')} className=' mt-6 py-2 px-3 text-sm bg-[#36384D] active:scale-95 text-white w-full rounded-md'>Dismiss message</button>
        </div>
        }
      </div>
    </React.Fragment>
  )
}

export default App