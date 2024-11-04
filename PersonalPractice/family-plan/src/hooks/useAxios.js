import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useAxios = (url) => {

    let fullURL = 'http://localhost:8081/billcycle';
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(fullURL+url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })

        console.log(data);
    }

    useEffect(() => {
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
