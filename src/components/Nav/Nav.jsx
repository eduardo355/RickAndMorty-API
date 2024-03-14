import RickAndMorty from "../Icons/RickAndMory"

const Nav = () => {
    return (
        <nav className="flex items-center max-sm:justify-center gap-[1em] p-[1em]">
            <RickAndMorty />
            <h1 className="text-2xl font-bold">Rick And Morty - API</h1>
        </nav>
    )
}

export default Nav