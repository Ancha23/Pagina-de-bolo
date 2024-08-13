import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { WhatsappLogo, FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import { useState } from 'react';
import { SliderContacts } from "../components/sliders/slider.contacts";
import { EnvelopeSimple } from "@phosphor-icons/react";


export const Contact = () => {

    const [showForm, setShowForm] = useState(false);
    return(
        <>
<Header/>
<div className="w-[1200px] h-[700px] flex mx-auto m-10">
        <div className="w-1/2 h-full bg-pink- relative flex items-center justify-center">
         <img src="https://cdn.pixabay.com/photo/2015/07/12/18/01/cook-842240_640.jpg" alt="" />
          <div className="absolute text-center text-pink-300">
           
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-pink-300 border border-sky-blue-100">
         
          <div className="max-w-md w-full px-6 py-4">
             
                </div>
               
              </div>

             
      </div>
      <Footer/>
        </>
    )
}