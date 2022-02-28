import './App.css';

import Section1 from './componentes/Sec/section1/Section1';
import Section2 from './componentes/Sec/section2/Section2';
import Section3 from './componentes/Sec/section3/Section3';
import Header from './componentes/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <article className='container'>
        <Section1/>
        <Section2/>
        <Section3/>
      </article>
    </div>
  );
}

export default App;
