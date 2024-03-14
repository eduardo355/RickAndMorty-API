import { useEffect, useState } from 'react'

function Personajes() {
    const [Personajes, setPersonajes] = useState([])
    const [nextPage, seNextPage] = useState(1)
    const [btnBack, setBack] = useState(null)

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/character/?page=${nextPage}`
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setPersonajes(data.results) 
            if(data.info.prev !== null){
                setBack(true)
            }  else {
                setBack(null)
            }    
        }) 
        .catch((error) => {
            console.error(error)
        })
    }, [nextPage])

    const handleNextPage = () =>{
        seNextPage(nextPage  +  1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleBackPage = () =>{
        seNextPage(nextPage  - 1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    return (
        <main className='flex flex-col items-center justify-center max-sm:p-0 max-sm:m-0'>
            <div className="flex items-center justify-center flex-wrap gap-5 max-sm:flex-col max-sm:p-0 max-sm:m-0">
            {Personajes.map(personaje => (
                <div key={personaje.id} className="flex flex-row justify-center w-[40vw] bg-slate-900 shadow-lg max-sm:w-[95vw] max-sm:flex-col">
                    <img src={personaje.image} alt={personaje.name} className='' />
                    <div className="flex flex-col w-full p-[1em] text-white">
                        <span className='text-[1.5em] font-bold mb-1'>{personaje.name}</span>
                        <span className='mb-[1em]'>Estado: {personaje.status} - Especie: {personaje.species}</span>
                        <span className='mb-[1em]'><strong className='text-gray-500'>Locacion Actual:</strong> <br></br> {personaje.location.name}</span>
                        <span><strong className='text-gray-500'>Lugar de Origen:</strong> <br></br> {personaje.origin.name}</span>
                    </div>
                </div>
            ))}
            </div>
            <div className="flex flex-row-reverse">
                <button className='m-[1em] text-2xl p-[.3em] border hover:bg-slate-900 hover:text-white' onClick={() => handleNextPage()}>Siguiente</button>
                {btnBack && <button className='m-[1em] text-2xl p-[.3em] border hover:bg-slate-900 hover:text-white' onClick={() => handleBackPage()}>Regresar</button>}
            </div>
        </main>
    )  
}

export default Personajes