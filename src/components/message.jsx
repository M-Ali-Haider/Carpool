import '../styles/message.css'
import minimize from '../assets/minimize.svg'
const Message = ({isMsgBoxOpen,handleMsgBox}) =>{
    return(
        <>
        <div className={`message ${isMsgBoxOpen ? '': 'message-closed'}`}>
            <div className="message-helper">
                <img onClick={handleMsgBox} className='message-arrow' src={minimize} alt="" />
            </div>
        </div>
        </>
    ) 
}
export default Message