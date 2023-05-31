import "./App.css";
import Homepage from "./Home/Homepage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Homepage} />
        {/* <Route path="/cart" Component={Cart} /> */}
      </Routes>
    </>
  );
}

export default App;

// "url" : "http://ecx.images-amazon.com/images/I/51N7GT9BQ%2BL.jpg
// "url" : "http://ecx.images-amazon.com/images/I/418h3hauXWL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/517S6KnRpOL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51UfXhiC61L.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51i1Xy1BxHL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL.jpg
// "url" : "http://ecx.images-amazon.com/images/I/51Ba653B6ZL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51DeQeU7MiL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/31NhIzIMrUL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/416xeHGXbUL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51N7GT9BQ%2BL.jpg
// "url" : "http://ecx.images-amazon.com/images/I/418h3hauXWL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/517S6KnRpOL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51UfXhiC61L.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51i1Xy1BxHL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL.jpg
// "url" : "http://ecx.images-amazon.com/images/I/51Ba653B6ZL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51DeQeU7MiL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/31NhIzIMrUL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/416xeHGXbUL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/51N7GT9BQ%2BL.jpg
// "url" : "http://ecx.images-amazon.com/images/I/418h3hauXWL.jpg",
// "url" : "http://ecx.images-amazon.com/images/I/517S6KnRpOL.jpg",
