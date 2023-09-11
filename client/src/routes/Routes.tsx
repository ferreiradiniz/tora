import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ViaCep } from "../ViaCep";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/viacep",
        element: <ViaCep />,
    }

]);


//<a href="/viaCep">ViaCep</a>
//<a href="/nominatim">Nominatim</a>