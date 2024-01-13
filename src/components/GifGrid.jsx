import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem';

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && (<h2 className='loading'>Cargando...</h2>)
            } 

            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifItem key={image.id} 
                           {...image}
                        />
                    ))
                }
            </div>

        </>
    )
}
