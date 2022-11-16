import {Routes,Route} from 'react-router-dom';
import UseCallBackHook from './pages/UseCallBackHook';
import UseMemoHook from './pages/UseMemoHook';
import UseRefHook from './pages/UseRefHook';

function App() {
  return (
    <div style={{margin:"15px"}}>
      <Routes>
        {/* <Route path='/' element={<UseRefHook />} /> */}
        {/* <Route path='/' element={<UseMemoHook />} /> */}
        <Route path='/' element={<UseCallBackHook />} />
      </Routes>
    </div>
  );
}

export default App;
