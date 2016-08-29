import axios from 'axios';

const fetch = (dispatch) => {
  const endpoint = '/data/index.json';

  return axios.get(endpoint).then((res) => {
    Array.prototype.forEach.call(res.data, d => {
      const payload = {
        id:    d.id,
        title: d.title
      };

      dispatch({ type: 'ADD_CONTENT', payload });
    });
  });
};

const actions = {
  fetch
};

export default actions;