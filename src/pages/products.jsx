import { Header } from "../components/header/header"
import { Link } from 'react-router-dom';
import { Slider } from "../components/sliders/slider";






export const Products = () => {
    return(
        <>
<Header/>
 <h1 className="font-bold text-center text-6xl py-2 text-sky-blue-200 mt-16 text-lime-400">
        Receitas de Bolos
      </h1>
      <p>É aqui que encontra as nossas melhores receitas de bolos de sempre. De todas as formas e feitios, para todas as ocasiões, experimente!
      </p>
<div className="flex flex-col max-w-[1400px] m-auto bg-black/10">
     
      <div className="flex items-center gap-8 m-auto py-4 font-bold mt-32 mr-20 ml-20 ">
        <Link to={'/bolos caseiros'}>
          <img
            src="https://img.freepik.com/fotos-gratis/uma-vista-superior-doce-redondo-bolo-com-acucar-em-po-e-laranja-no-meio-fatiado-doce-delicioso-prato-interior-sobre-o-fundo-cinza-biscoito-de-acucar_140725-17059.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
           Bolos caseiros
          </p>
        </Link>

        <div>
       <Link to={'/bolos de aniversario'}>
          <img
            src="https://img.freepik.com/fotos-premium/um-bolo-com-velas-e-uma-fita-rosa-ao-fundo_883101-926.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
           Bolos para aniversarios
          </p>
          </Link>
        </div>
        <div>
          <img
            src="https://img.freepik.com/fotos-gratis/vista-lateral-da-sobremesa-de-frutas-em-camadas-com-chantilly-e-calda-de-chocolate-em-um-prato_140725-10274.jpg?t=st=1721810389~exp=1721813989~hmac=20d67f5e72b81560ca63eb2acb6a489472f93f122528d419919ac95d6648e8cf&w=740"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Bolos Gelados
          </p>
        </div>
        <div>
        <Link to={'/bolos de casamento'}>
          <img
            src="https://t3.ftcdn.net/jpg/03/56/25/78/240_F_356257802_iEj26EmyHf5Z4mpfkt8Y0altBHYkMgju.jpg"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Bolos de Casamentos
          </p>
          </Link>
        </div>

        <div>
        <Link to={'/capcakes'}>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/1386030605/display_1500/stock-photo-tasty-chocolate-cupcake-with-blackberry-and-mint-sweet-cupcake-1386030605.jpg"
            alt=""
            className="rounded-full w-60 h-60 py-2 transition duration-300 transform hover:scale-110 cursor-pointer"
          />
          <p className="text-center hover:text-orange cursor-pointer font-bold">
            Capcakes
          </p>
          </Link>
        </div>
      </div>
    </div>

    <Slider/>
        </>
    )
}