import { CardBolos } from "../../../components/cake.card/card";
import { Aniversario } from "../../../data/dataAniversario";

export const BolosDeAniversario = () => {
    return(
        <>
        <div className="">
     
      <section
        className="min-h-[calc(100vh-100px)] flex justify-between
      "
      >
        <main className="w-[78%] p-4">
          <h1 className="font-bold text-sky-blue-200 text-3xl ml-10 mt-14 text-lime-400">
            Receitas de bolos de aniversario
          </h1>
          <hr className="h-[6px] bg-sky-blue-200 rounded-3xl w-32 my-2" />

          <section className="mt-10 grid grid-cols-4 justify-items-center gap-3 ml-96">
            {Aniversario.map((bolosAniversario) => {
              return (
                <CardBolos
                  id={bolosAniversario.id}
                  name={bolosAniversario.name}
                  category={bolosAniversario.category}
                  imageUrl={bolosAniversario.imageUrl}
                />
              );
            })}
          </section>
        </main>

      </section>
    
     
    </div>
        </>
    )
}