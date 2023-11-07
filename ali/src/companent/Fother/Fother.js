import './Fother.css';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";

function Fother() {
    return (
        <>
        <div className="K-Fother">
            <div className="Box">
                <h4>Tashkilot haqida</h4>
                <ul>
                    <li>Biz haqimizda</li>
                    <li>Yangiliklar</li>
                    <li>Aloqa uchun ma'lumotlar</li>
                </ul>
                <BiLogoFacebookSquare className='i1'/>
                <BiLogoInstagramAlt className='i1'/>
                <BiLogoTelegram className='i1'/>
                <BiLogoYoutube className='i1'/>
            </div>
            <div className="Box">
            <h4>Imkoniyatlar</h4>
                <ul>
                    <li>Imkoniyatlar</li>
                    <li>Ota-onalarga</li>
                    <li>O‘quvchilarga</li>
                    <li>Davlat organlariga</li>
                </ul>
            </div>
            <div className="Box">
            <h4>Hamkorlarga</h4>
                <ul>
                    <li>Hamkorlik dasturlari</li>
                </ul>
            </div>
            <div className="Box">
            <h4>Qo‘llab-quvvatlash  </h4>
            <p >Qo‘llab-quvvatlash xizmati<br/>portal</p>
            <button className="F-Btn1">Tashkilotni ulash</button>
            </div>
        </div>
        <div className="K-Fother-Buttom">
                <li className="li1">Foydalanuvchining shartnomasi</li>
                <p>© 2023 ООО «Kundalik»</p>
        </div>
        
        </>
    );
}

export default Fother;