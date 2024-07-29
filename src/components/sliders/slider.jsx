import React, { useState, useEffect } from "react";
import { Circle, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const Slider = () => {
  const slides = [
    {
      images: [
        "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://img.freepik.com/fotos-gratis/vista-de-um-bolo-de-ervas-daninhas-lindamente-ornamentado_23-2151379504.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user",
        "https://img.freepik.com/fotos-gratis/bolo-de-casamento-rosa-decorado-com-velas-e-petalas-de-rosa_8353-9971.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user",
      ],
      text: "Descubra as últimas tendências e renove seu guarda-roupa com estilo!",
    },
    {
      images: [
        "https://img.freepik.com/fotos-gratis/bolo-de-frutas_74190-4962.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user",
        "https://img.freepik.com/fotos-gratis/bolo-de-chocolate-nu-decorado-com-morangos-framboesa-pequenas-macas-e-calda_140725-5875.jpg?size=626&ext=jpg&ga=GA1.1.860888004.1721808221&semt=sph",
        "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      text: "Está na hora de renovar seu guarda-roupa com estilo e economia! ",
    },
    {
      images: [
        "https://img.freepik.com/fotos-gratis/composicao-de-delicioso-bolo-de-chocolate_23-2148875608.jpg?ga=GA1.1.860888004.1721808221&semt=sph",
        "https://img.freepik.com/fotos-gratis/bolo-delicioso-com-arranjo-de-laranjas_23-2149095715.jpg?ga=GA1.1.860888004.1721808221&semt=sph",
        "https://img.freepik.com/fotos-premium/roti-sisir-ou-pao-caseiro-doce-macio-pull-over-roti-sisir-e-um-pao-tradicional_464898-1101.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user",
      ],
      text: "É hora de renovar o guarda-roupa dos pequenos com peças lindas e confortáveis!",
    },
    {
      images: [
        "https://img.freepik.com/fotos-gratis/festival-bolo-com-glitterball-no-topo_1304-4022.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user",
        "https://img.freepik.com/fotos-gratis/close-up-de-colorido-muffins-com-iluminado-velas-ligado-cakestand_23-2147917444.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user",
        "https://img.freepik.com/fotos-premium/a-natureza-morta-do-bolo-de-aniversario_23-2151444299.jpg?ga=GA1.1.860888004.1721808221&semt=ais_user",
      ],
      text: "Chegou a hora de renovar seu estoque de calçados com estilo e conforto!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="max-w-[1800px] h-[720px] m-auto mb-12 relative group mt-28 bg-black/10">
      <div
        style={{
            backgroundImage: `url(${slides[currentSlide].images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        className="w-full h-full bg-center bg-contain duration-500"
      >
        <div className="absolute inset-0 flex">
          {slides[currentSlide].images.map((image, index) => (
            <div
              key={index}
              className="w-1/3 h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        </div>


      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[80px] text-2xl rounded-full p-2 bg-sky-blue-200 text-cream-100 cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={32} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-sky-blue-200 text-cream-100 cursor-pointer">
        <ArrowRight onClick={nextSlide} size={32} />
      </div>
      <div className="flex top-4 justify-center py-4">
        {slides[currentSlide].images.map((image, index) => (
          <div
            key={index}
            onClick={() => goToSlide(currentSlide)}
            className={`text-2xl cursor-pointer ${
              index === 0 ? "text-sky-blue-200" : "text-sky-blue-100"
            }`}
          >
            <Circle size={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
