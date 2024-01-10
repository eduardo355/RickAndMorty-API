import { useEffect, useState } from 'react'
import './Personajes.css'

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
        <main>
            <div className="containerPersonajes">
            {Personajes.map(personaje => (
                <div key={personaje.id} className="card">
                    <img src={personaje.image} alt={personaje.name} width={200} />
                    <div className="content">
                        <span className='name'>{personaje.name}</span>
                        <span className='Especie'>Estado: {personaje.status} - Especie: {personaje.species}</span>
                        <span className='locacion'> <strong>Locacion Actual:</strong> <br></br> {personaje.location.name}</span>
                        <span> <strong>Lugar de Origen:</strong> <br></br> {personaje.origin.name}</span>
                    </div>
                </div>
            ))}
            </div>
            <div className="ConatinerBtn">
                <button onClick={() => handleNextPage()}>Siguiente</button>
                {btnBack && <button onClick={() => handleBackPage()}>Regresar</button>}
            </div>
        </main>
    )  
}

export default Personajes