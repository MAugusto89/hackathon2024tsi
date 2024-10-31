import HomeDenunciaScreen from '../src/components/HomeDenunciaScreen/index'
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
const routes = [
    {
        path:'/',
        element: <Login />
    },
    {
        path:'/home',
        element: <HomeScreen />
    },
    {
        path:'/denuncia',
        element: <HomeDenunciaScreen />
    }
]

export default routes;