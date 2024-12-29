import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
import Login from "./pages/Login"; // Login sayfasını ekliyoruz

// PrivateRoute bileşeni
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Token kontrolü
  return token ? children : <Navigate to="/login" />; // Token yoksa login sayfasına yönlendir
};

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <main>
          <Routes>
            {/* Login sayfası */}
            <Route path="/login" element={<Login />} />

            {/* Korumalı rotalar */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <PrivateRoute>
                  <CategoryList />
                </PrivateRoute>
              }
            />
            <Route
              path="/add_category"
              element={
                <PrivateRoute>
                  <AddCategory />
                </PrivateRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactList />
                </PrivateRoute>
              }
            />
            <Route
              path="/add_contacts"
              element={
                <PrivateRoute>
                  <AddContact />
                </PrivateRoute>
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <PrivateRoute>
                  <CategoryDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/events"
              element={
                <PrivateRoute>
                  <EventList />
                </PrivateRoute>
              }
            />
            <Route
              path="/add_event"
              element={
                <PrivateRoute>
                  <AddEvent />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact/:id"
              element={
                <PrivateRoute>
                  <ContactDetails />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;