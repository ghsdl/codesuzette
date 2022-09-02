import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/layout/Layout';
import Homepage from './components/pages/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Homepage />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
