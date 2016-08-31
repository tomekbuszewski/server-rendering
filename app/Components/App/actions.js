import axios from 'axios';
import store from '../../store';

const fetch = (id) => {
  const endpoint = '/data/index.json';
  const payload = { id, title: 'abc' };
  // return store.dispatch({ type: 'ADD_CONTENT', payload });

  return dispatch => {
    axios.get(endpoint).then((res) => {
      Array.prototype.forEach.call(res.data, d => {
        const payload = {
          id:    d.id,
          title: d.title
        };

        dispatch({ type: 'ADD_CONTENT', payload });
      });
    });
  };

  // return axios.get(endpoint).then((res) => {
  //   Array.prototype.forEach.call(res.data, d => {
  //     const payload = {
  //       id:    d.id,
  //       title: d.title
  //     };
  //
  //     dispatch({ type: 'ADD_CONTENT', payload });
  //   });
  // });
};

const actions = {
  fetch
};

export default actions;