import './App.css';
import Layout from './components/layout/layout/Layout';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
