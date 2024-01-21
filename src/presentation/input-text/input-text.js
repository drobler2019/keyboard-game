import './input-text.css';
import inputText from './input-text.html?raw';

export const renderInputText = (element) => {
    element.innerHTML = inputText;
}