import HomeDenunciaScreen from '../src/components/HomeDenunciaScreen/index'
import HomeScreen from './components/HomeScreen';
const routes = [
    {
        path:'/',
        element: <HomeScreen />
    },
    {
        path:'/denuncia',
        element: <HomeDenunciaScreen />
    }
]

export default routes;