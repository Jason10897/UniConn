import AppFrame from './components/AppFrame/AppFrame';
import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
     <AppFrame>
       <Router/>
     </AppFrame>
    </div>
  );
}

export default App;
