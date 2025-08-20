import { Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./RoutesWithNotFound"

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound >
        <Route path="/" element={<Navigate to={"/login"}/> } />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </RoutesWithNotFound>
  )
}
