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
<div className="" style={{ backgroundImage: 'url("hhttps://img.freepik.com/fotos-premium/proprietario-de-cafe-sorridente-confiante-tomando-notas-e-falando-no-smartphone_549545-1255.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user")', backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "500px",
    display: 'flex',
    justifyContent: 'center',
   
         zIndex: '-1',
        
         overflow: 'hidden', 
 }}></div>
<main className="main mt-14" >
        <div className="flex justify-center items-center  flex-col mt-36">
         
          <div className=" border-b-black flex justify-center flex-col">
            <strong className="text-8xl text-orange ">CONTACTOS</strong>
                <p className="text-center text-2xl mt-12 flex ">
                <WhatsappLogo size={50} style={{ marginRight: '10px', color: '#25D366' }} />
                <FacebookLogo size={50} style={{ margin: '0 10px', color: '#1877F2' }} />
                <InstagramLogo size={50} style={{ marginLeft: '10px', color: '#C13584' }} />
                </p>

                <div className="flex justify-center items-center">
                    
                        <button className="text-white text-sm border-black border-spacing-4 shadow-lg rounded-2xl bg-black/70 w-40 h-10 hover:bg-sky-blue-200  hover:transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out hover:w-44 mt-11 hover:mt-12 hover:shadow-2xl hover:rounded-3xl">
                        Clique aqui para enviar um email
                        </button>
                   
                </div>
          </div>
        </div>
      
      </main>
<Footer/>
        </>
    )
}