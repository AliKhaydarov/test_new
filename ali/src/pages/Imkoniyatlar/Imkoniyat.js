import './Imkoniyat.css';
import { Routes, Route } from "react-router-dom";
import Teacher from "./Teacher/teacher"



function Mikoniyat() {
  return ( <div className="">
    dacad
    <Routes>
        
        <Route path='/Imkoniyatlar/Teacher' element={<Teacher/>}/>
    </Routes>
  </div>
 
  )
}

export default Mikoniyat;
