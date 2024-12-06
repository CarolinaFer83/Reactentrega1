import { Link, Outlet } from 'react-router-dom';


function Layout () {
    return (
        <> 
        <nav>
            <ul>
                <li>
                    <link to= {"/"}> Home </link>
                    </li>
                    <li>  <link to= {"/productos"}> Productos </link> 
                    </li>
                    <li> <link to= {"/quienes"}> Quienes </link>  
                    </li>
            </ul>
         </nav>
        < Oulet/>
        </>
    )
}
export default Layout