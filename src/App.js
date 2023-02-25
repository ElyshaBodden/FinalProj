
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/main.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import Home from './components/home.jsx';
import About from './components/about.jsx';
import Breeds from './components/breeds.jsx';
import SingleBreed from './components/singlebreed.jsx';
import Posts from './components/posts.jsx';
import Error from './components/error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='./componenets/Main.jsx' element={<Main />}></Route>
          <Route path='./components/home.jsx' element={ <Home />}></Route>
          <Route path='./components/about.jsx' element={ <About />}></Route>
          <Route path='./components/breeds.jsx' element={ <Breeds />}></Route>
          <Route path='./components/singlebreed.jsx/:breedId' element={ <SingleBreed />}></Route>
          <Route path='./components/posts.jsx' element={ <Posts />}></Route>
          <Route path='./components/error.jsx' element={ <Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}


export default App;
