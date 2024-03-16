import RickAndMorty from "../Icons/RickAndMory"

const Nav = () => {
    return (
        <nav className="flex items-center max-sm:justify-center gap-[1em] p-[.5em] bg-slate-900 mb-4 shadow-md">
            <RickAndMorty />
            <h1 className="text-2xl font-bold text-white">Rick And Morty</h1>
        </nav>
    )
}

export default Nav