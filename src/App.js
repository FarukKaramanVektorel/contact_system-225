import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CategoryList from "./pages/CategoryList";
import AddCategory from "./pages/AddCategory";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import CategoryDetails from "./pages/CategoryDetails";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/add_category" element={<AddCategory />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/add_contacts" element={<AddContact />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
