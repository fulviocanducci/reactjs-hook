import Home from './Home';
import Count from './Count';
import Todos from './Todos';
import About from './About';
import Github from './Github';
import Table from './Table';
import Login from './Login';


const Menus = [
    { link:'/', text:'Home', component:Home },
    { link:'/counter', text:'Count', component:Count },
    { link:'/todos', text:'Todos', component:Todos },
    { link:'/github', text:'Gibhub', component:Github },
    { link:'/table', text:'Table', component:Table },
    { link:'/about', text:'About', component:About },
    { link:'/login', text:'Login', component:Login }
];

export default Menus;