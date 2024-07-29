import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Slider } from "../components/sliders/slider";
import { BolosDeAniversario } from "./receitas dos bolos/bolos de aniversario/aniversarios";
import { MagnifyingGlass, CaretDown} from "@phosphor-icons/react";

export const Home = () => {
  return(
    <>
    <Header/>
    
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
</div>
    <Slider/>
    <BolosDeAniversario/>
    <div className="bg-black/20">

    </div>
    <Footer/>
    </>
  )
}