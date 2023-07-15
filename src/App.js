import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import NotFound from './components/NotFound/NotFound';
const App = () => {
  return (
      <main>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
  )
}

export default App;