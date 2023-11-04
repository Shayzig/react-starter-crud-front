import { Route, HashRouter as Router, Routes } from "react-router-dom";

import "./assets/scss/global.scss";

import { AppHeader } from "./cmps/AppHeader";

import { ItemIndex } from "./pages/ItemIndex";
import { ItemEdit } from "./pages/ItemEdit";
import { ItemDetails } from "./pages/ItemDetails";

import { RegularRoute } from "./pages/RegularRoute";
import NestedRoute from "./pages/NestedRoute";
import Team from "./cmps/Team";
import Vision from "./cmps/Vision";
import Footer from "./cmps/Footer";

function App() {
  return (
    <Router>
      <section className="main-app">

        <AppHeader />

        <main className="container">
          <Routes>
            <Route path="/" element={<ItemIndex />} />
            <Route path="item/edit/:id?" element={<ItemEdit />} />
            <Route path="/item/:id" element={<ItemDetails />} />

            <Route path="/route" element={<RegularRoute />} />
            <Route path="/nestedRoute" element={<NestedRoute />}>
              <Route path="first" element={<Team />} />
              <Route path="second" element={<Vision />} />
            </Route>
          </Routes>
        </main>

        <Footer />
        
      </section>
    </Router>
  );
}

export default App;
