import { CardBolos } from "../../../components/cake.card/card";
import { Link } from "react-router-dom";
import { Bolos } from "../../../data/bolos";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer/footer";

export const BolosCaseiros = () => {
  return (
    <div className="">
     <Header/>
      <section
        className="min-h-[calc(100vh-100px)] flex justify-between
      "
      >
        <main className="w-[78%] p-4">
          <h1 className="font-bold text-sky-blue-200 text-3xl ml-10 mt-14 text-lime-400">
            Receitas de bolos caseiros
          </h1>
          <hr className="h-[6px] bg-sky-blue-200 rounded-3xl w-32 my-2" />

          <section className="mt-10 grid grid-cols-4 justify-items-center gap-3 ml-80">
            {Bolos.map((bolo) => {
              return (
                <CardBolos
                  id={bolo.id}
                  name={bolo.name}
                  category={bolo.category}
                  imageUrl={bolo.imageUrl}
                />
              );
            })}
          </section>
        </main>

      </section>
      <Footer/>
     
    </div>
  );
};
