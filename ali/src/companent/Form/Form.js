import "./Form.css";
import { useState } from "react";

function Form() {
    const [Phone, setPhone] = useState("+998 ")
    const [Name, setName] = useState("")
    const [Fullname, setFullname] = useState("")
    const [Email, setEmail] = useState("")
    function change (e){
        alert (`Telefon raqami: ${Phone} ismi: ${Name} Familiyasi ${Fullname} Emaili: ${Email} `)
        e.preventDefault();
    }
    return(
        <div className="Form">
            <form>
            <h1>Ro'yxatdan o'tish</h1>
            <label>Phone</label>
            <br/>
            <input placeholder="Telefon raqamingiz" value={Phone} onChange={(e) => setPhone(e.target.value)}></input>
            <br/>
            <br/>
            <label>Ism</label>
            <br/>
            <input placeholder="Ism" value={Name} onChange={(e) => setName(e.target.value)}></input>
            <br/>
            <br/>
            <label>Familiya</label>
            <br/>
            <input placeholder="Familiya" value={Fullname} onChange={(e) => setFullname(e.target.value)}></input>
            <br/>
            <br/>
            <label >Email</label>
            <br/>
            <input placeholder="Email (Majburiy emas)" value={Email} onChange={(e) => setEmail(e.target.value)}></input>
            <br/>
            <br/>
            <br/>
            <br/>
            <button className="Button1" onClick={change}>Change</button>
            </form>
        </div>


    )
}
export default Form;