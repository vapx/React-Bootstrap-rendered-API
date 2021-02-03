import React,{ useState , useEffect } from "react";
import "./style.css";
import axios from "axios";
import Navheading from "./components/Navheading";
import Apicard from "./components/Apicard";
import About from "./routes/About";
import Navbar from "./routes/Navbar";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [fakeapi,setFakeApi] = useState([]);

  function getFakeApi(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => setFakeApi(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getFakeApi();
  },[])


  return (
    <Router>
      <div className="container-fluid">
        <div>
        <Navbar />
        <Navheading heading="JSON Placeholder API in Bootstrap Card" />
        </div>
        <Switch>
          <Route extact path="/about" label="About">
            <About/>
          </Route>
          <div className="row">
            <Apicard fakeapi={fakeapi}  
            text={fakeapi}
            button="Click Me"
          />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
