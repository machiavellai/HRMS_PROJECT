import "bootstrap";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Signup from "./pages/Home/Signup";
import Login from "./pages/Home/Login";
import Home from "./pages/Home/Home";
// import Navbar from "./layouts/Navbar/Navbar";
import employeeTable from "./pages/Employers/employeeTable";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div id="App" className="d-flex flex-column">
      <Router>
        {/* <Navbar /> */}
        <main>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/employeetable" component={employeeTable} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </main>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
