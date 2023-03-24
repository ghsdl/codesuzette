import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Category from './pages/Category/Category';
import NotFound from './pages/NotFound/NotFound';
import Legals from './pages/Legals/Legals';
import { getResources, getCategories, getTags } from './pages/Utils';

interface Resource {
  id: number;
  name: string;
  url: string;
  description: string;
  image: string;
  locale: string;
  price: string;
  categories: number;
  tagsName: [];
}

type Resources = Resource[];

interface GenericObject {
  id: number;
  name: string;
  resources: number[];
}

type Categories = GenericObject[];

type Tags = GenericObject[];

function App() {
  const [loadingResources, setLoadingResources] = useState<boolean | null>(
    null
  );
  const [loadingCategories, setLoadingCategories] = useState<boolean | null>(
    null
  );
  const [loadingTags, setLoadingTags] = useState<boolean | null>(null);
  const [categories, setCategories] = useState<Categories>([]);
  const [tags, setTags] = useState<Tags>([]);
  const [resources, setResources] = useState<Resources>([]);

  useEffect(() => {
    getResources(setResources, setLoadingResources);
  }, []);

  useEffect(() => {
    getCategories(setCategories, setLoadingCategories);
  }, []);

  useEffect(() => {
    getTags(setTags, setLoadingTags);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Home
              resources={resources}
              categories={categories}
              tags={tags}
              loadingResources={loadingResources}
              loadingCategories={loadingCategories}
              loadingTags={loadingTags}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/websites" element={<Category category="websites" />} />
        <Route path="/courses" element={<Category category="courses" />} />
        <Route path="/videos" element={<Category category="videos" />} />
        <Route path="/readings" element={<Category category="readings" />} />
        <Route path="/games" element={<Category category="games" />} />
        <Route
          path="/challenges"
          element={<Category category="challenges" />}
        />
        <Route path="/legals" element={<Legals />} />
      </Routes>
    </Router>
  );
}

export default App;
