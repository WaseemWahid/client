import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Create from './views/Create';
import './App.css';
import Dashboard from './views/Dashboard';
import EditProduct from './views/EditProduct';
import OneProduct from './views/OneProduct';

function App() {
  return (
    <BrowserRouter>
      <h1>Product Manager</h1>
      <Link to="/products/new">Add a product</Link>
      ||
      <Link to="/products">Dashboard</Link>
      <Switch>
        <Route exact path="/products">
          <Dashboard />
        </Route>
        <Route exact path="/products/new">
          <Create />
        </Route>
        <Route exact path="/products/:id/edit">
          <EditProduct/>
        </Route>
        <Route exact path="/products/:id">
          <OneProduct />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
