import { VFC } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const App: VFC = () => (
  <>
    <header>
      <Header />
    </header>

    <footer>
      <Footer />
    </footer>
  </>
);

export default App;
