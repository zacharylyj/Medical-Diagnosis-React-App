import { useState } from 'react';
import TextInput from './components/TextInput';
import DisplayText from './components/DisplayText';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <TextInput onTextChange={handleTextChange} />
      <DisplayText text={text} />
    </div>
  );
}

export default App;
