import './Header.css';
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
        <div className="K-header">
            <div className="K-logo">
                <img src="https://static.emaktab.uz/img/logotypes/uzlogotype.png" 
                alt=""
                />
            </div>
            <ul>
                <li><Link className='link' to="tashkilot">Tashkilot</Link></li> <span className="span">|</span>
                <li><Link className='link' to="Imkoniyatlar/teacher">Imkoniyatlar</Link></li> <span className="span">|</span>
                <li><Link className='link' to='Hamkorlar'>Hamkorlarga</Link></li> <span className="span">|</span>
                <li>Yordam</li> 
            </ul>
                <select >
                    <option className="Slc" value="">O'zb</option>
                    <option className="Slc" value=" ">rus</option>
                </select>
                <Link className='link1' to="kirish"><button className="K-1btn">Kirish</button></Link>
                <button className="K-2btn" >Tashkilotni ulash</button>
        </div>
        <div className='A1'></div>
        </>
    );
}

export default Header;
