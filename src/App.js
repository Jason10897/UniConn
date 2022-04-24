import AppFrame from './components/AppFrame/AppFrame';
import Router from './Router';

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
