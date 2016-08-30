import axios from 'axios';
import store from '../../store';

const fetch = () => {
  const endpoint = '/data/index.json';

  return axios.get(endpoint).then((res) => {
    Array.prototype.forEach.call(res.data, d => {
      const payload = {
        id:    d.id,
        title: d.title
      };

      store.dispatch({ type: 'ADD_CONTENT', payload });
    });
  });
};

const actions = {
  fetch
};

export default actions;