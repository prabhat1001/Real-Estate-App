import React from 'react'
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
        <div className='BgImage'>
            <div className='TagLine'>Find a home that suits your lifestyle.</div>
            <div className='Container_1'>
                    <Link to='/home'>
                        <a className='Go'>LET'S GET STARTED</a>
                    </Link>
                </div>
        </div>
    </>
  )
}



export default LandingPage