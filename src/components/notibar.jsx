import '../styles/notibar.css'
const Notibar=({isNotibarOpen})=>{
    return(
        <>
        <div className={`notibar ${isNotibarOpen? '' :'notibar-closed'}`}>
            <div className="notibar-helper">
                <div className="notibar-absolute-helper">
                    <div>Bruh</div>
                    <div>Bruh</div>
                    <div>Bruh</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Notibar