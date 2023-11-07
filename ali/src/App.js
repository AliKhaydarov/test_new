import './App.css';
import Header from './companent/Header/Header';
import Tashkilot from './pages/Tashkilot/Tashkilot';
import Mikoniyat from './pages/Imkoniyatlar/Imkoniyat'; 
import Teacher from './pages/Imkoniyatlar/Teacher/teacher'; 
import Parents from './pages/Imkoniyatlar/parents/Parents'
import Hamkorlar from './pages/Hamkorlar/Hamkorlar';
import Fother from './companent/Fother/Fother';
import Kirish from './companent/Login/Kirish';
import Cardi from './companent/Card/Card';
import Form from "./companent/Form/Form"
import { Routes, Route } from "react-router-dom";
import { useState , useEffect} from 'react';
import axios from "axios"


function App() {
 return(
  <>
     <Header/> 
    <Routes>
      <Route path="tashkilot" element={<Tashkilot/>}/>  
      <Route path="Kirish" element={<Kirish/>}/>  
      <Route path="imkoniyatlar" element={<Mikoniyat/>}/> 
      <Route path="imkoniyatlar/Parents" element={<Parents/>}/> 
      <Route path="imkoniyatlar/Teacher" element={<Teacher/>}/> 
      <Route path="Hamkorlar" element={<Hamkorlar/>}/> 
    </Routes>
    <Fother/>
    </>
 )
}

export default App;

//   <div className="Card"> 
//   {data.slice(0,31).map((item)=><Cardi image={item.thumbnail} tittle={item.title} price={item.price} description={item.description}/>
// )}
//   </div>



    {/* <Header/> 
    <Routes>
      <Route path="tashkilot" element={<Tashkilot/>}/>  
      <Route path="Kirish" element={<Kirish/>}/>  
      <Route path="imkoniyatlar" element={<Mikoniyat/>}/> 
      <Route path="imkoniyatlar/Parents" element={<Parents/>}/> 
      <Route path="imkoniyatlar/Teacher" element={<Teacher/>}/> 
      <Route path="Hamkorlar" element={<Hamkorlar/>}/> 
    </Routes>
    <Fother/> */} 


    // function App() {
    //   const [ data , setData] = useState([]);  
    //   useEffect(()=> {
    //   let data = axios
    //   .get("https://dummyjson.com/products")
    //   .then ((res) => setData(res.data.products));
    //   },[]);
    //   console.log(data);
    //   return ( 
    //     <>
    //     <Form/>
    //     </>
    //   )
    // }