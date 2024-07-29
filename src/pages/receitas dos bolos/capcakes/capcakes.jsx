import { CardBolos } from "../../../components/cake.card/card";
import { Capcakes } from "../../../data/capcakes";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer/footer";

export const AllCapcakes = () => {
    return(
        <>
        <div className="">
     <Header/>
      <section
        className="min-h-[calc(100vh-100px)] flex justify-between
      "
      >
        <main className="w-[78%] p-4">
          <h1 className="font-bold text-sky-blue-200 text-3xl ml-10 mt-14 text-lime-400">
            Receitas de Capcakes
          </h1>
          <hr className="h-[6px] bg-sky-blue-200 rounded-3xl w-32 my-2" />

          <section className="mt-10 grid grid-cols-4 justify-items-center gap-3 ml-80">
            {Capcakes.map((caps) => {
              return (
                <CardBolos
                  id={caps.id}
                  name={caps.name}
                  category={caps.category}
                  imageUrl={caps.imageUrl}
                />
              );
            })}
          </section>
        </main>

      </section>
      <Footer/>
     
    </div>
        </>
    )
}