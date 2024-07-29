


export const CardBolos = ({ id, name, category, imageUrl }) => {
    return (
        <>
            <div className="bg-white shadow-xl w-[220px] h-[300px] rounded-3xl p-2 mt-20">
                <figure className="bg-white h-2/5 flex justify-center items-center overflow-hidden ">
                    <img src={imageUrl} alt="Imagem do produto" className="w-full h-full " />
                </figure>
                <h1 className="text-center font-bold mt-2 mb-1 text-lg">{name}</h1>

                <div className="flex items-center justify-center mt-5 mb-2 border border-sky-blue-200 w-fit mx-auto rounded-md">
                   
                </div>
                
                
                    
                    <h2 className="  font-normal  text-sm">{category}</h2>
                
            </div>
        </>
    );
};
