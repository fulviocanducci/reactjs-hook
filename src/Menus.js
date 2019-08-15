import Home from './Home';
import Count from './Count';
import Todos from './Todos';
import About from './About';
import Github from './Github';


const Menus = [
    { link:'/', text:'Home', component:Home },
    { link:'/counter', text:'Count', component:Count },
    { link:'/todos', text:'Todos', component:Todos },
    { link:'/github', text:'Gibhub', component:Github },
    { link:'/about', text:'About', component:About }
];

export default Menus;