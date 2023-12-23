import { FiveStar } from './fivestar'


function SidebarUnit({pfp}) {
    return (<div className='sidebar-unit'>
                <div className="sidebar-pfp"><img src={pfp} alt="" /></div>
                <div className="sidebar-rest">
                    <div className="sidebar-name">Uncle Mussafir</div>
                    <div className="sidebar-rating">
                        <FiveStar />
                    </div>
                </div>
            </div>);
  }

  export default SidebarUnit