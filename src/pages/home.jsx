import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Slider } from "../components/sliders/slider";
import { BolosDeAniversario } from "./receitas dos bolos/bolos de aniversario/aniversarios";
import { MagnifyingGlass, CaretDown, Gift} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from 'react';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
    <Header/>
   <div>
    <div>
      <div className="">
        <img src="" alt="" />
        <p>hjdjd</p>
      </div>
    </div>
    <div className="flex flex-col items-center mt-10">
  <div className="flex items-center space-x-4">
    <img 
      className="w-1/5" 
      sizes="10"
      src="https://img.freepik.com/vetores-gratis/texto-fresco-e-delicioso-de-padaria-para-design-de-banner-ou-cartaz_1308-123028.jpg?size=626&ext=jpg" 
      alt="Imagem de padaria" 
    />
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-grow">
      <input 
        type="text" 
        placeholder="Pesquisar aqui uma receita..." 
        className="p-2 w-full border-none focus:outline-none" 
      />
      <button className="p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  </div>
</div>
<div className="flex  mt-8 justify-center intems-center text-pink-400 text-xl font-bold"> 
  <p className="flex mr-10">Receitas <CaretDown  className="mt-2 ml-2" size={16}/></p>
 
  <p className=" flex mr-10">Datas Especias <CaretDown  className="mt-2 ml-2" size={16}/></p>
  <p className="flex mr-10">Sobre-nos <CaretDown  className="mt-2 ml-2" size={16}/></p>
  <p className="flex mr-10">Loja <CaretDown  className="mt-2 ml-2" size={16}/></p>
</div></div>

<section>
      {/* Seção que contém o ícone de presente */}
      {!isOpen && (
        <motion.section
 className="flex justify-center items-center mt-36"
          animate={{
            y: [0, -10, 0], // Movimento vertical
            scale: 1, // Tamanho constante
            rotate: 0, // Sem rotação
          }}
          transition={{
            duration: 0.5, // Duração do salto
            repeat: Infinity, // Repetir infinitamente
            repeatType: 'loop', // Tipo de repetição
            ease: 'easeInOut', // Tipo de easing
          }}
          onClick={() => setIsOpen(true)} // Adiciona um handler para o clique
          style={{ cursor: 'pointer' }} // Adiciona um cursor de ponteiro para indicar que é clicável
        >
          <Gift size={300}  weight="bold"
          className="text-pink-300 "
          />
        </motion.section>
      )}

      {/* Seção que contém o conteúdo adicional */}
      {isOpen && (
        <div className="flex justify-center items-center mt-8">
          <motion.div 
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className=""
          >
            <img 
              src="https://img.freepik.com/fotos-gratis/smoothie-de-morango-com-waffle-minusculo-chocolate-e-fatias-de-morangos-no-prato-branco-na-superficie-azul-escura_114579-33846.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid" 
              alt="Smoothie de Morango"
            />
          </motion.div>

          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="ml-8 bg-pink-400/40 p-4 rounded"
          >
            <h4>Bolo no ponte</h4>
            <ol>
              <li>1 massa de pão-de-ló assadeira média</li>
              <li>1/2 l de leite mais um copo para molhar o bolo</li>
            </ol>
          </motion.div>
        </div>
      )}
    </section>


   <Slider/>
    <div className="bg-black/20">
 <BolosDeAniversario/>
    </div>
    <Footer/>
    </>
  )
}