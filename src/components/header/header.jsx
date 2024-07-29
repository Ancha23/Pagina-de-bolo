import { NavBar } from "./nav";

export const Header = () => {
    return(
      <header className="bg-pink-400 h-20 flex items-center justify-between font-bold px-4">
        <h2 className="flex-1 text-3xl text-yellow-800">༺ 𝓡𝓮𝓬𝓮𝓲𝓽𝓪𝓼 𝓭𝓮 𝓑𝓸𝓵𝓸𝓼 ༻</h2>
        <div className="flex-none">
          <NavBar className="" />
        </div>
      </header>
    )
}

