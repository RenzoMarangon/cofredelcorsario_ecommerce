import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error404 from "../../pages/Error404/Error404";


interface Props {
  children: ReactNode; 
}

export const RoutesWithNotFound = ({children}:Props) => {
  return (
    <Routes>
        {children}
        <Route path="*" element={<Navigate to="/404" />}/>
        <Route path="/404" element={<Error404 />}/>
    </Routes>
  )
}
