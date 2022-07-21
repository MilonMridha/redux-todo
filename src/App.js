
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Home from './Pages/Home';
import Error from './Pages/Error';
import AddBooks from './Features/Books/AddBooks';
import EditBook from './Features/Books/EditBook';
import BooksView from './Features/Books/BooksView';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-book' element={<AddBooks></AddBooks>}></Route>
        <Route path='/edit-book' element={<EditBook></EditBook>}></Route>
        <Route path='/show-books' element={<BooksView></BooksView>}></Route>



        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
