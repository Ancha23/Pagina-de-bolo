import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Slider } from "../components/sliders/slider";
import { BolosDeAniversario } from "./receitas dos bolos/bolos de aniversario/aniversarios";

export const Home = () => {
  return(
    <>
    <Header/>
    <Slider/>
    <BolosDeAniversario/>
    <div className="bg-black/20">

    </div>
    <Footer/>
    </>
  )
}