import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Category from './pages/Category/Category';
import NotFound from './pages/NotFound/NotFound';
import Legals from './pages/Legals/Legals';
import { categories } from './data/categories.js';
import { tags } from './data/tags.js';
import { resources } from './data/resources.js';
import { getResourcesByCategory } from './Utils';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Home resources={resources} categories={categories} tags={tags} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/websites"
          element={<Category resources={getResourcesByCategory('websites')} />}
        />
        <Route
          path="/courses"
          element={<Category resources={getResourcesByCategory('courses')} />}
        />
        <Route
          path="/videos"
          element={<Category resources={getResourcesByCategory('videos')} />}
        />
        <Route
          path="/readings"
          element={<Category resources={getResourcesByCategory('readings')} />}
        />
        <Route
          path="/games"
          element={<Category resources={getResourcesByCategory('games')} />}
        />
        <Route
          path="/challenges"
          element={
            <Category resources={getResourcesByCategory('challenges')} />
          }
        />
        <Route path="/legals" element={<Legals />} />
      </Routes>
    </Router>
  );
}

export default App;
