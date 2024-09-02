import './../assets/css/components/answer.css'
import  ActiveIndexContext from '../context/active-index-context';
import { useContext } from 'react';

export default function Answer({ text, index, onSelect, isSelected }) {
  const context = useContext(ActiveIndexContext);
  if (!context) {
    console.error('ActiveIndexContext is not provided!');
    return null;
  }
  const { stateSubmit, dispatchSubmit } = context;
  const handelClick = () => {
    dispatchSubmit({type: "CHANGE_ACTIVE", payload: index})
  }
  
  return (
    <div
      className={`answer ${isSelected ? 'selected-answer' : ''}`}
      onClick={() => onSelect(index)}
    >
      {text}
    </div>
  )
}