import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Session from "./Session"
import Header from "./Header";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Creative Tutor" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
            <Route path=":catId" element={<Category />}>
              <Route path=":sessionId" element={<Session />} />
            </Route>
        </Route>

        {/*<Route index element={<h3>Select Category from above</h3>} />*/}

        <Route path="register" element={<Register />}  />
        <Route path="confirmed" element={<Confirmation />}  />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;SAN DUK KOY 2024 | <a href="https://red30tech.com/">Creative Tutor</a>
      </footer>
    </div>
  );
}

export default App;
