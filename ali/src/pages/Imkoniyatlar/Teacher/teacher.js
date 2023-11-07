import './teacher.css';
import { Link } from 'react-router-dom'

function Teacher() {
  return ( <div className="Te-Cen2">
    <h1>Imkoniyatlar</h1>
    <Link><button className='m-btn'>O‘qituvchilarga</button></Link>
    <Link to="imkoniyatlar/Parents"><button>ota-onalarga</button></Link>
    <Link><button>O'quvchilarga</button></Link>
    <Link><button>O‘qituvchilarga</button></Link>
  </div>
 
  )
}

export default Teacher;