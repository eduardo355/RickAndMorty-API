

export const GetPersonajes = () => {
    const URL = `https://rickandmortyapi.com/api/character/?page=${nextPage}`
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const setPersonajes = data.results 
        if(data.info.prev !== null){
            const setBack(true)
        }  else {
            setBack(null)
        }    
    }) 
    .catch((error) => {
        console.error(error)
    })
}