import axios from "axios"
import { Axios } from "../lib/Axios"


export const submitLogin = async (dispatch, value) => {
    
    let response = await Axios.post('/users/login-test', value)
    
    dispatch({
        type: "submit",
        payload: value
    })
}

export const fetchLogin = async (dispath, value) => {
    
}