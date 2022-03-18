import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({ category }: any) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__bounceIn'>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>

                {
                    data.map((img: any) => (
                        <GifGridItem
                            key={img.id}
                            {...img}

                        />
                    ))
                }
            </div>
        </>
    )
}
