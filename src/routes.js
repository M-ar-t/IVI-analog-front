import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Catalog from "./pages/Catalog";
import FilmPage from "./pages/FilmPage";
import MovieBasket from "./pages/MovieBasket";
import { ADMIN_ROUTE, CATALOG_ROUTE, FILM_ROUTE, LOGIN_ROUTE, MOVIEBASKET_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";


//страницы только для авторизованных пользователей
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: MOVIEBASKET_ROUTE,
        Component: MovieBasket
    }
]

//страницы публичные
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: FILM_ROUTE + '/:id',
        Component: FilmPage
    }
]