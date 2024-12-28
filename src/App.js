import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CategoryList from "./pages/CategoryList";
import AddCategory from "./pages/AddCategory";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import CategoryDetails from "./pages/CategoryDetails";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import EventList from "./pages/EventList";
import AddEvent from "./pages/AddEvent";
import ContactDetails from "./pages/ContactDetails";

function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories" element={<CategoryList/>}/>
            <Route path="/add_category" element={<AddCategory/>}/>
            <Route path="/contacts" element={<ContactList/>}/>
            <Route path="/add_contacts" element={<AddContact/>}/>
            <Route path="/category/:categoryId" element={<CategoryDetails/>}/>
            <Route path="/events" element={<EventList/>}/>
            <Route path="/add_event" element={<AddEvent/>}/>
            <Route path="/contact/:id" element={<ContactDetails/>}/>
          </Routes>
        </main>
            <Footer/>
      </Router>
    </>
  );
}

export default App;
