//Dependencies
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Components
import Layout from './components/Layout/Layout';
//Views
import Products from './views/Products/Products';
import EditProduct from './views/EditProduct/EditProduct';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/productos/editar/:id" component={EditProduct} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
