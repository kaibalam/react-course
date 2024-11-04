import { Route, Routes } from "react-router-dom"
import { ContactoPage, ErrorPage, InicioPage, MaterialesPage, ProyectosPage, ServiciosPage } from "../sites";
//Crear
const RouteItem = [
  {path:'inicio',jsx: <InicioPage />},
  {path:'servicios',jsx: <ServiciosPage />},
  {path:'proyectos',jsx: <ProyectosPage />},
  {path:'materiales',jsx: <MaterialesPage />},
  {path:'contacto',jsx: <ContactoPage />},
  {path:'/*',jsx: <ErrorPage />},
]

export const AppRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        {
          RouteItem.map((route, idx) => 
            <Route key={idx} path={route.path} element={route.jsx}/>)
        }
      </Routes>
    </div>
  )
}
