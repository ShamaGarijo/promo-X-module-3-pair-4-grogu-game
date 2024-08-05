import "../scss/App.scss";
import {useState} from 'react';
import Main from "./Main";
import Header from "./Header";
import ResetButton from "./ResetButton";
import DiceButton from "./DiceButton";



const App = () => {
  const [positionGrogu, setpositionGrogu] = useState(0);

  
  return (
    <>
    <Header/>
    <Main/>
    <DiceButton/>
    <ResetButton/>
    


    </>
  );
};

export default App;
