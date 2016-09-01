import axios from 'axios';

const endpoint = 'http://localhost:3100/data/index.json';

const getfetch = (id = 10) => {
  return dispatch => {
    axios(endpoint)
      .then(res => {
        Array.prototype.forEach.call(res.data, d => {
          const payload = { id: d.id, title: d.title };
          dispatch({ type: 'ADD_CONTENT', payload });
        })
      })
      .catch(error => {
        console.log('Error', error.message);
      });
  };
};

const actions = {
  getfetch
};

export default actions;