import "./App.css";
import Data from "./datas/goods";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import Card from "./components/Card";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail/Detail";

function App() {
  let [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      {/* NavBar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">          
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      {/* Route */}
      <Switch>
        <Route path="/detail/:id">
        <Detail shoes={shoes}/>
        </Route>
        <Route exac path="/detail">
        <Detail shoes={shoes}/>
        </Route>
        <Route exac path="/">
          {/* Jumbotron */}
          <div className="jumbotron background">
            <div className="jangmi">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </div>
          </div>

          {/* card */}
          <div className="container">
            <div className="row">
              {Data.map((data, i) => {
                return <Card shoes={data} key={i} />;
              })}
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
