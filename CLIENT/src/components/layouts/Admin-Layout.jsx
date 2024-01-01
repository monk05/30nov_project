import { NavLink, Outlet } from "react-router-dom"
import { FaUserLarge,FaComments} from "react-icons/fa6"
import { GrServices } from "react-icons/gr";

import { FaHome } from "react-icons/fa";

export const AdminLayout=()=>{
    return (
    <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUserLarge />Users</NavLink>
                        </li>
                        <li> <NavLink to="/admin/contacts"><FaComments />Contacts</NavLink>
                        </li>
                        <li><NavLink to ="/Service"><GrServices />Services</NavLink>
                        </li>
                        <li><NavLink to ="/"><FaHome />Home</NavLink> </li>
                    </ul>
                </nav>

            </div>
        </header>
        <Outlet/>
    </>
    )
}