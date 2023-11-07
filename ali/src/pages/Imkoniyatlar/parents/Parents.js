import './parents.css';
import { Link } from 'react-router-dom'

function Parents() {
  return ( <div className="T-Cen2">
    <h1>Imkoniyatlar</h1>
    <Link to="imkoniyatlar/Parents"><button >O‘qituvchilarga</button></Link>
    <Link><button className='m-btn2'>ota-onalarga</button></Link>
    <Link><button>O'quvchilarga</button></Link>
    <Link><button>O‘qituvchilarga</button></Link>
  </div>
 
  )
}

export default Parents;