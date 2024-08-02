import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Slider } from "../components/sliders/slider";
import { BolosDeAniversario } from "./receitas dos bolos/bolos de aniversario/aniversarios";
import { MagnifyingGlass, CaretDown, Star} from "@phosphor-icons/react";
import { motion } from "framer-motion";


export const Home = () => {
  
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

   
 
<div className="flex  mt-10 bg-white rounded-2xl shadow-custom">
  
  <div className=" ml-10  ">
  <img 
  className="w-52 h-52 mt-4"
  src="https://media.istockphoto.com/id/1676097087/photo/pastel-de-tres-leches-three-milk-cake-latin-america-bakery-with-strawberries.webp?s=2048x2048&w=is&k=20&c=3HJQGzEw0qNoFoT8lN9B97I0Soi3Y6pxYmRmujps2jk=" alt="" />
 <div className="flex"> <Star size={25} className="text-yellow-300 flex "/>
  <Star size={25} className="text-yellow-300  "/>
  <Star size={25} className="text-yellow-300  "/>
  <Star size={25} className="text-yellow-300 "/></div>
 
  <img 
  className="w-52 h-52 mt-6"
  src="https://media.istockphoto.com/id/1676097087/photo/pastel-de-tres-leches-three-milk-cake-latin-america-bakery-with-strawberries.webp?s=2048x2048&w=is&k=20&c=3HJQGzEw0qNoFoT8lN9B97I0Soi3Y6pxYmRmujps2jk=" alt="" />
  <div className="flex"> <Star size={25} className="text-yellow-300 flex "/>
  <Star size={25} className="text-yellow-300  "/>
  <Star size={25} className="text-yellow-300  "/>
  <Star size={25} className="text-yellow-300 "/>
  </div>

  <img 
  className="w-52 h-52 mt-6"
  src="https://media.istockphoto.com/id/1676097087/photo/pastel-de-tres-leches-three-milk-cake-latin-america-bakery-with-strawberries.webp?s=2048x2048&w=is&k=20&c=3HJQGzEw0qNoFoT8lN9B97I0Soi3Y6pxYmRmujps2jk=" alt="" />
 <div className="flex"> <Star size={25} className="text-yellow-300 flex "/>
  <Star size={25} className="text-yellow-300  "/>
  <Star size={25} className="text-yellow-300  "/>
  <Star size={25} className="text-yellow-300 "/></div>
 
  </div>
  

  <motion.div 
    initial={{ x: '100%', opacity: 0 }}
    animate={{ x: '0', opacity: 1 }}
    transition={{ duration: 0.9, delay: 0.9 }}
    className="ml-8 p-4  bg-white"
  >
    <div className="ml-52">
    <h1 className="text-2xl text-orange-500 font-bold mt-10">Bolo de laranja com cobertura de chocolate</h1>
    <h4 className="text-orange-300 text-xl">Ingredientes</h4>
    <h5 className="text-orange-200">Massa</h5>
<ul className="list-disc pl-5"> 
  <li>2 ovos</li>
  <li>1 xícara (chá) de açúcar</li>
  <li>2 colheres (sopa) de margarina</li>
  <li>200 ml de água</li>
  <li>2 xícaras (chá) de farinha de trigo</li>
  <li>1 envelope de preparado para suco de laranja</li>
  <li>1 colher (sopa) de fermento químico</li>
</ul>
<h5 className="text-orange-200 mt-4">Cobertura</h5>
<ul className="list-disc pl-5"> 
  <li>200 ml de leite</li>
  <li>3 colheres (sopa) de achocolatado em pó</li>
  <li>3 colheres (sopa) de açúcar</li>
  <li>1 colher (sopa) de margarina</li>
</ul>
<h4 className="text-orange-300 text-xl mt-8">Modo de preparo</h4>
    <h5 className="text-orange-200">Massa</h5>
    <ol className="list-decimal pl-5">
        <li>Bata os ingredientes na batedeira, seguindo a ordem e batendo bem a cada adição.</li>
        <li>Despeje em fôrma redonda média untada e enfarinhada.</li>
        <li>Leve ao forno médio preaquecido (180 ºC) por cerca de 40 minutos ou até dourar.</li>
        <li>Depois de morno, desenforme e regue com a cobertura.</li>
        <li>Sirva em temperatura ambiente.</li>
    </ol>

    <h5 className="text-orange-200">Cobertura</h5>
    <ol>
        <li>Misture os ingredientes em uma panela e leve ao fogo médio, mexendo sempre, até ferver. Utilize.</li>
    </ol>
    </div>
  </motion.div>

  <motion.div 
    initial={{ x: '-100%', opacity: 0.9 }}
    animate={{ x:  10, scale: 1, rotate: 0 }}
    transition={{ duration: 0.9,   }}
    className="flex justify-center items-center" // Adicionei flex para garantir que o conteúdo esteja centralizado
  >

    <img 
      src="https://img.freepik.com/fotos-premium/um-bolo-com-xarope-de-chocolate-e-morangos-em-um-prato_1088278-52303.jpg?size=626&ext=jpg&ga=GA1.1.860888004.1721808221&semt=ais_hybrid" 
      alt="Smoothie de Morango"
      className="w-[400px] h-[400px] rounded-lg" // Adicionei classes de largura e altura para garantir que a imagem seja visível
    />
  </motion.div>
</div>

      
    
<h1 className="mt-16 text-4xl text-pink-600 flex justify-center items-center">Veja aqui as nossas melhores receitas</h1>
   <Slider/>
    <div className="shadow-custom">
 <BolosDeAniversario/>
    </div>
    <Footer/>
    </>
  )
}