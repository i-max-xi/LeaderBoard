const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const postData = async (raw) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nEcxuVGuA9uybtzKJufy/scores/',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset= UTF-8',
      },
      body: raw,
      redirect: 'follow',
    },
  );
};

const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nEcxuVGuA9uybtzKJufy/scores/',
    {
      method: 'GET',
      redirect: 'follow',
    },
  );
  const scoreBoard = document.querySelector('#scoreShow');
  const scoreList = await response.json();
  scoreBoard.innerHTML = '';
  scoreList.result.forEach((event) => {
    scoreBoard.innerHTML += `<li class="user"><span>${event.user}: ${event.score}</span></li>`;
  });
};

export { postData, getData };
