import { Nav } from "react-bootstrap"

export const MenuBarItem = () => {
    const items = [
        {id: 0,label:'INICIO',link:'/inicio'},
        {id: 1,label:'SERVICIOS',link:'/servicios'},
        {id: 2,label:'PROYECTOS',link:'/proyectos'},
        {id: 3,label:'MATERIALES',link:'/materiales'},
        {id: 4,label:'CONTACTO',link:'/contacto'},
    ]
    return (
        items.map( item => (
            <Nav.Link key={item.id} href={item.link}>{item.label}</Nav.Link>
        ))
    )
}
