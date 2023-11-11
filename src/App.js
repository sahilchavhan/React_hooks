import logo from './logo.svg';
import './App.css';
import Usestate1 from './usestate1.jsx';
import Usestate2 from './usestate2.jsx';
import Reducer1 from './Reducer1';
import Reducer from './Reducer';
import Useeffect from './useeffect.jsx';
import Useref from './useref.jsx';
import UseImperativeHandle from './useimperativehandle.jsx';
import UseContext from './useContext';

{/* <UseLayoutEffect/> thi hook is simmilar to useefect hook but the difference is that it rnders before useeffect hook and useeffect hook renders after displaying the whole website*/} 


function App() {
  
  return (
    <>
      <Usestate1/>
      <Usestate2/>
      <Reducer1/>
      <Reducer/>
      <Useeffect/>
      <Useref/>
      <UseImperativeHandle/>
      <UseContext/>
    </>
  )
}

export default App;
