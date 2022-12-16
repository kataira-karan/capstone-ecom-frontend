import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Register from "./components/register/Register";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/register/Login";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";
import AdminHome from "./components/AdminHome/AdminHome";
import Products from "./components/AdminHome/Products/Products";
import Category from "./components/AdminHome/Category/Category";
import Cart from "./components/Cart/Cart";
import Users from "./components/AdminHome/Users/Users";
import PreviewProduct from "./components/PreviewProduct/PreviewProduct";
import { UserProvider } from "./components/Context/UserContext";
import CheckOut from "./components/CheckOut/CheckOut";
import CheckoutSuccess from "./components/CheckOut/CheckoutSuccess";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/signup">
            <Register></Register>
          </Route>

          <Route exact path="/aboutus">
            <AboutUs></AboutUs>
          </Route>

          <Route exact path="/user/cart/checkout/">
            <CheckOut></CheckOut>
          </Route>
          <Route exact path="/user/cart/checkout/suceess">
            <CheckoutSuccess></CheckoutSuccess>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/admin">
            <AdminHome></AdminHome>
          </Route>

          {/* Admin Routes */}
          <Route exact path="/admin/products">
            <Products></Products>
          </Route>

          <Route exact path="/admin/category">
            <Category></Category>
          </Route>

          <Route exact path="/admin/users">
            <Users></Users>
          </Route>

          <Route exact path="/user/cart/cart">
            <Cart></Cart>
          </Route>

          <Route exact path="/:category">
            <ProductsByCategory></ProductsByCategory>
          </Route>

          {/* Product Routes */}
          <Route exact path="/:productName/:productId">
            <PreviewProduct></PreviewProduct>
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
