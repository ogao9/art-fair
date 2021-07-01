import ReactDOM from 'react-dom'
import { useClickOutside} from "../utilities/useClickOutside"
import LoginForm from "../login/LoginForm";

const LoginPortal = ({onLoginSuccess, setShowLogin})=>{
    const loginRef = useClickOutside (()=>setShowLogin(false))

    const handleClose = ()=>{
        setShowLogin(false)
    }

    return ReactDOM.createPortal(
        <div className="show-login-container">
            <div className="show-login" ref={loginRef}> 
                <button className="closebtn" onClick={handleClose}><i class="fas fa-window-close fa-2x"></i></button>
                <LoginForm onLoginSuccess={onLoginSuccess}/>
            </div>
        </div>,
    document.getElementById("login-portal")
    );
}

export default LoginPortal;
