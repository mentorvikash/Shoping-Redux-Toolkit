import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './compontents/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/cart" element={<Cart />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;

// 11:56 => Learn Redux Toolkit in one video