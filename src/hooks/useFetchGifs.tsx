import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category: any) => {
    const [state, setState] = useState({
        data: [] as any,
        loading: true
    });

    useEffect(() => {

        getGifs(category).then(
            imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            }
        )
    }, []);

    return state; // {data:[], loading:true}


}
