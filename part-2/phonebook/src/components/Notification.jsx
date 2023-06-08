import '../notification.css'

const Notification = ({message}) =>{
    if(message===null){
        return
    }
    return(
        <div className="notification-message">
            {message}
        </div>
    )
}

export default Notification