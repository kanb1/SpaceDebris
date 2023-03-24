import React from 'react';
import Lottie from "lottie-react";
// import animation from "../media/loadingAnim.json";
import logoAnimation from "../media/loadingAnimation.json";

export default function LoadingAnimation() {
  return (
    <section className='h-[100vh] fadeOut bg-observableBlack flex flex-col items-center pb-12 pt-[40vh] w-full z-[10] fixed top-0 left-0'>
              {/* <svg className="animate-spin h-24 w-24 text-primaryYellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> */}
            <Lottie
                animationData={logoAnimation}
                loop={true}
                className='h-56 w-56'
            />
            <div className='flex items-center'>
                <p className='text-primaryGray-800 uppercase'>Loading</p>
            </div>
    </section>
  )
}
