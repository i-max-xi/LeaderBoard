import './styles.css';
import { getData } from '../modules/api.js';
import addPoints from '../modules/add.js';

const myform = document.querySelector('#myform');

myform.addEventListener('submit', (event) => {
  event.preventDefault();
  addPoints();
});
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
});

window.onload = () => {
  getData();
};