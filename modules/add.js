import { postData, getData } from './api.js';

const addPoints = () => {
  const name = document.querySelector('#name');
  const point = document.querySelector('#score');
  const form = document.querySelector('#myform');
  const raw = JSON.stringify({
    user: name.value,
    score: point.value,
  });
  postData(raw);
  form.reset();
  getData();
};

export default addPoints;
