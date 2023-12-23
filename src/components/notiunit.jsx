function NotiUnit({pfp, msg, openMsgBox}) {
    return (
    <div className="noti-unit">
        <div className="noti-pfp">
            <img src={pfp} alt="" />
        </div>
        <div className="noti-rest">
            <div className="noti-name">Uncle Mussafir</div>
            <div className="noti-stars">
                <div onClick={openMsgBox} className="noti-message"><img src={msg} alt="" /></div>
                <div className="noti-decline">Decline</div>
                <div className="noti-accept">Accept</div>
            </div>
        </div>
    </div>);
  }
  export default NotiUnit;