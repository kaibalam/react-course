import axios from 'axios';


export const  apiInstance = axios.create({
    // baseURL:`${location.origin}/WS_GDT/webresources/Transacciones/`
    // baseURL:`http://10.207.41.157:5502/WS_GDT/webresources/Transacciones/` //server nuevo
    // baseURL:`http://172.24.3.158:7020/WS_GDT/webresources/Transacciones/` //server viejo
    baseURL:`http://127.0.0.1:8080/webservice-gestion-de-terminales/webresources/Transacciones/` //local
});

export const apiAuth = axios.create({
    baseURL:'https://api-qa-cloud.cenam.claro.com.gt/oauth2/v1/token'
})
