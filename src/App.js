import {Routes,Route} from 'react-router-dom';
import UseCallBackHook from './pages/UseCallBackHook';
import UseContextHook from './pages/UseContextHook';
import UseEffectHook from './pages/UseEffectHook';
import UseMemoHook from './pages/UseMemoHook';
import UseRefHook from './pages/UseRefHook';
import UseStateHook from './pages/UseStateHook';

function App() {
  return (
    <div style={{margin:"15px"}}>
      <Routes>
        <Route path='/' element={<UseStateHook />} />
        {/* <Route path='/' element={<UseEffectHook />} /> */}
        {/* <Route path='/' element={<UseRefHook />} /> */}
        {/* <Route path='/' element={<UseMemoHook />} /> */}
        {/* <Route path='/' element={<UseCallBackHook />} /> */}
        {/* <Route path='/' element={<UseContextHook />} /> */}
      </Routes>
    </div>
  );
}

export default App;
