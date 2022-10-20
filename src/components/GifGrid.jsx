
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const { images, isLoading} = useFetchGifts( category );

    return (
    <div>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Loading...</h2>) 
        }
        <h2></h2>

        <div className="card-grid">
            {
                images.map( (image) => {
                    return(
                        <GifItem 
                            key={image.id} 
                            {...image}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

// {...image} CARGAR PROPIEDADES DEL ELEMENTO DESESTRUCTURADA