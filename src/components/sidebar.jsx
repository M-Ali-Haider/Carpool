import SidebarUnit from './sidebarunit'
import pfp from '../assets/pfp.png'
import '../styles/sidebar.css'
const Sidebar =({isSidebarOpen})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen? '' : 'sidebar-closed'}`}>
            <div className="sidebar-helper">
                <div className="sidebar-absolute-helper">
                    <SidebarUnit   pfp={pfp}  />
                    <SidebarUnit   pfp={pfp}  />
                    <SidebarUnit   pfp={pfp}  />
                    <SidebarUnit   pfp={pfp}  />
                </div>
            </div>
        </div>
        </>
    )
}
  export default Sidebar