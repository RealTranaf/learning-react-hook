import './App.css';
import {useState} from 'react'
import ToDoList from './ToDoList';
import MountedExample from './MountedExample';
import UpdateDom from './useEffectExample/UpdateDom';
import CallAPI from './useEffectExample/CallAPI';
import ListenDomEvent from './useEffectExample/ListenDomEvent';
import ResizeWindow from './useEffectExample/ResizeWindow';
import Timer from './useEffectExample/Timer'
import PreviewAvatar from './useEffectExample/PreviewAvatar';
import ChatApp from './useEffectExample/ChatApp';

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
      {show && <ChatApp></ChatApp>} 
      
    </div>

  );
}


export default App;
