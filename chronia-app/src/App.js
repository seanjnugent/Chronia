import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
      </Routes>
    </Router>
  );
}

export default App;
