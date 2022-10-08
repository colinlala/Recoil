import './App.css'
import Header from "./components/Header";
import { RecoilRoot } from "recoil";
import RoutesConfig from './routes';

function App() {
  
  return (
    <RecoilRoot>
      <Header />
      <RoutesConfig />
    </RecoilRoot>
  )
}

export default App
