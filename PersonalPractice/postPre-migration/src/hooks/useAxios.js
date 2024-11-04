import axios from "axios"
import { useEffect, useState } from "react"
import { apiInstance } from "../utils/utils"

const baseURL = apiInstance.getUri;

export const useAxios = ({ url, method, body = null, headers = null }) => {
    const [state, setState] = useState({
        response: null,
        isLoading: true,
        hasError: false,
    })

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setState({
                    ...state,
                    isLoading: false,
                    hasError: false,
                })
            })
            .catch((err) => {
                setState({
                    ...state,
                    isLoading:false,
                    hasError: true
                })
            })
            .finally(() => {
                setState({
                    ...state,
                    isLoading: false,
                    hasError: false,
                })
            });
    }


    useEffect(() => {
      fetchData();
    }, [method, url, body, headers])
    


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
