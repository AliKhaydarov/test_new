import "./Kirish.css";
import { FiHelpCircle } from "react-icons/fi";

function Kirish() {
    return(
        <>
        <div className="L-top">
            <h1 className="L-h1">Kirish eMaktab</h1>
            <a href="" className="L-a">Tizimda ro‘yxatdan o‘tmaganmisiz?</a>
            </div>
            <div className="L-Cen">
                <label>Login</label>
                <br/>
                <input></input>
                <br/>
                <br/>
                <label>Parol</label>
                <br/>
                <input type="password"></input>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className="L-btn"><h2>Tizimga kiring</h2></button>
            </div>
            <div className="L-But">
            <FiHelpCircle className="L-I"/>
            <p>Login yoki parolni unutdingizmi?</p>
            <a href="" className="L-a2">Loginni tiklash.</a>
            </div>
            </>
    )
}

export default Kirish;