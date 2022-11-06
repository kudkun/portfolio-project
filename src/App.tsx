import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { RecoilRoot } from 'recoil'

function App() {
  return (
      <RecoilRoot>
        <Header />
        <Footer />
      </RecoilRoot>
  );
}

export default App;
