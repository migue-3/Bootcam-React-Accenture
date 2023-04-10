
export const getImagen = async() => {

    try {

        const apiKey = 'nKfUer9Ujp84AX9ipgKDzKjO8WUWwsQZ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

    } catch (error) {
        // manejo del error
        //console.error(error)
        return'No se encontro la imagen';
    }
    
    
    
}




