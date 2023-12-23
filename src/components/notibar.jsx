import pfp from '../assets/pfp.png'
import msg from '../assets/msg.png'
import NotiUnit from './notiunit'
import '../styles/notibar.css'
const Notibar=({isNotibarOpen,openMsgBox})=>{
    return(
        <>
        <div className={`notibar ${isNotibarOpen? '' :'notibar-closed'}`}>
            <div className="notibar-helper">
                <div className="notibar-absolute-helper">
                    <NotiUnit   pfp={pfp} msg={msg}  openMsgBox={openMsgBox}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Notibar