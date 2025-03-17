import './App.css';
import {useState} from 'react'
import ToDoList from './useStateExample/ToDoList';
import MountedExample from './useStateExample/MountedExample';
import UpdateDom from './useEffectExample/UpdateDom';
import CallAPI from './useEffectExample/CallAPI';
import ListenDomEvent from './useEffectExample/ListenDomEvent';
import ResizeWindow from './useEffectExample/ResizeWindow';
import Timer from './useEffectExample/Timer'
import PreviewAvatar from './useEffectExample/PreviewAvatar';
import ChatApp from './useEffectExample/ChatApp';
import UseLayoutEffectExample from './useEffectExample/UseLayoutEffectExample';
import Counter from './useRefExample/Counter';
import Memo from './useCallBackExample/Memo';
function App() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
      setShow(!show);
  }

  return (
    // <ToDoList>
      
    // </ToDoList>
    // <MountedExample>
      
    // </MountedExample>
    // <UpdateDom>
      
    // </UpdateDom>
    // <CallAPI>

    // </CallAPI>
    <div style={{padding: 20}}>
      <button onClick={handleShow}>Show</button>
      {/* {show && <ListenDomEvent></ListenDomEvent>}  */}
      {/* {show && <ResizeWindow></ResizeWindow>}  */}
      {/* {show && <Timer></Timer>}  */}
      {/* {show && <PreviewAvatar></PreviewAvatar>}  */}
      {/* {show && <ChatApp></ChatApp>}  */}
      {/* {show && <UseLayoutEffectExample></UseLayoutEffectExample>}  */}
      {/* {show && <Counter></Counter>}  */}
      {show && <Memo></Memo>} 
      
    </div>

  );
}


export default App;
