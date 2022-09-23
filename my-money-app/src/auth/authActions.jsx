import { toast } from "react-toastify";
import axios from "axios";

function submit(valus, url){
    //Chamada http
}

export function logout(){
    return {
        type: "TOKEN_VALIDATED",
        payload: false
    }
}

export function validateToken(token){
    return dispatch => {
        //REGRA DE VALIDAÇÃO DO TOKEN
        dispatch(logout()); //OU LOGIN
    }
}