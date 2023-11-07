import "./Home.css";
import Header from './companent/Header/Header';
import Login from './companent/Login/Login';
import Fother from './companent/Fother/Fother';
function Home() {
    return ( <div className="app">
        <Header/>
        <Login/>
        <Fother/>
    </div>
   
    )
  }
  
  export default Home;
  