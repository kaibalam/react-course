import React, { useState } from 'react'
import { UserContext } from './UserContext';

const client = {
    "errorCode": "0",
    "errorMessage": "success",
    "body": {
        "msisdn": "numero",
        "name": "Nombre",
        "lastName": "Apellido",
        "clientId": 12345678,
        "contract": 87654321,
        "secHistory": 7,
        "cHistoryStatus": "DESACTIVO",
        "installDate": "2017-12-20 00:00:00",
        "balance": 0.0,
        "billsCount": 40,
        "docTypeNumber": 1,
        "docType": "CEDULA",
        "docNumber": "A-01-884552",
        "birthdate": "1974-04-11 00:00:00",
        "sex": "F",
        "profileId": "1174 MIG_POSPRE_CLARO",
        "city": "CIUDAD",
        "address": "CIUDAD",
        "district": "GUATEMALA",
        "nit": "C/F",
        "cycle": "22",
        "simNum": "8950201016727159080F",
        "brand": "Marca",
        "model": "Modelo",
        "expirationDate": "20/08/2023 02:40:59",
        "agency": "G201",
        "orderNumber": 1689972050
    },
    "agreement": {},
    "activeBlock": "false"
}
export const UserProvider = ({ children }) => {

    const [datosCliente, setDatosCliente] = useState();
    return (
        <UserContext.Provider value={{ datosCliente, setDatosCliente }}>
            { children }
        </UserContext.Provider>
  )
}
