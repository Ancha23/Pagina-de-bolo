import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Plus } from "@phosphor-icons/react";

const products = [
  {
    product: "Bolo de manga",
    image: "https://cdn.pixabay.com/photo/2017/09/19/08/52/pancake-2764589_640.jpg",
    description: "Descricao 1",
  },
  {
    product: "Bolo 2",
    image: "https://cdn.pixabay.com/photo/2013/11/28/04/15/cake-219595_640.jpg",
    description: "Descricao 2",
  },
  {
    product: "Medicamento 3",
    image: "https://cdn.pixabay.com/photo/2017/03/17/11/59/food-2151361_640.jpg",
    description: "Descricao 3",
  },
  {
    product: "Medicamento 4",
    image: "https://cdn.pixabay.com/photo/2020/03/10/03/49/red-velvet-cake-4917734_640.jpg",
    description: "Descricao 4",
  },
  {
    product: "Medicamento 5",
    image: "https://cdn.pixabay.com/photo/2023/09/21/11/41/ai-generated-8266497_640.jpg",
    description: "Descricao 5",
  },
  {
    product: "Medicamento 6",
    image: "https://cdn.pixabay.com/photo/2024/06/28/06/14/cakes-8858646_640.jpg",
    description: "Descricao 6",
  },
  {
    product: "Medicamento 7",
    image: "https://cdn.pixabay.com/photo/2014/08/26/12/49/the-cake-427920_640.jpg",
    description: "Descricao 7",
  },
  {
    product: "Medicamento 8",
    image: "https://cdn.pixabay.com/photo/2024/06/28/06/18/cakes-8858652_640.jpg",
    description: "Descricao 8",
  },
  {
    product: "Medicamento 9",
    image: "https://cdn.pixabay.com/photo/2024/04/04/15/59/ai-generated-8675363_640.jpg",
    description: "Descricao 9",
  },
  {
    product: "Medicamento 10",
    image: "https://cdn.pixabay.com/photo/2017/08/31/09/20/cake-baker-2699914_640.jpg",
    description: "Descricao 10",
  },
];

export const TopProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 4;
  const slideCount = Math.ceil(products.length / slidesPerView);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideCount - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideCount - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-roboto font-light text-castanho-200">
         
          </h2>
          <div
            className="w-[980px] h-1 ml-8"
            style={{ background: 'url("./pattern/traço.jpg")' }}
          ></div>
        </div>
        <div className="relative group overflow-hidden">
          <div
            className="flex transition-transform duration-3000"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / slidesPerView)
              }%)`,
              width: `${slideCount * 100}%`,
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="mx-2" style={{ minWidth: "8%" }}>
                <div className="bg-branco-100 rounded-md shadow-md ml-10">
                  <div
                    className="h-52 w-full mb-4 rounded-t-md"
                    style={{
                      background: `url(${product.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                       backgroundRepeat: "no-repeat"
                    }}
                  ></div>
                  <h3 className="text-xl font-roboto font-bold mb-1 ml-4">
                    {product.product}
                  </h3>
                  <p className="text-sm font-roboto text-cinza-300 mb-4 ml-4">
                    {product.description}
                  </p>
                  <div className="flex">
                    <button className="bg-green-300 text-branco-100 font-roboto w-full h-10 px-3 py-1.5 font-light rounded-bl-md text-sm flex justify-center items-center gap-1 hover:bg-verde-100 hover:text-branco-100 transition-all duration-300">
                      <Plus size={12} />
                    </button>
                    <button className="bg-pink-500 text-branco-100 font-roboto w-full font-semibold h-10 px-3 py-1.5  rounded-br-md text-sm uppercase flex justify-center items-center gap-1 hover:bg-castanho-100 hover:text-branco-100 transition-all duration-300">
                      Ver receita
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-castanho-200 text-branco-100 cursor-pointer"
            onClick={prevSlide}
          >
            <ArrowLeft size={22} />
          </div>
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-castanho-200 text-branco-100 cursor-pointer"
            onClick={nextSlide}
          >
            <ArrowRight size={22} />
          </div>
        </div>
      </div>
    </section>
  );
};
