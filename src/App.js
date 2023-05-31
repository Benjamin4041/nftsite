import './App.css';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Homepage from './page/homepage/homepage';
// import NftandPrice from './component/nftandPrice/nftandPrice';
// import Footer from './component/footer/footer';
import Nftpage from './page/Nftpage/Nftpage';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            {/* <Route path='/test' element={<Footer/>}/> */}
            <Route path='/nftpage' element={<Nftpage/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
