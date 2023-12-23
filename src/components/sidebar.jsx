import '../styles/sidebar.css'
const Sidebar =({isSidebarOpen})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen? '' : 'sidebar-closed'}`}>
            <div className="sidebar-helper">
                <div className="sidebar-absolute-helper">
                    <div>Bruh</div>
                    <div>Bruh</div>
                    <div>Bruh</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sidebar