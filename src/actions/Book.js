import api from './api.js';

export const ACTION_TYPES = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  GET_ALL: 'GET_ALL',
};

export const getAll = () => (dispatch) => {
  console.log('Book Actions');
  api
    .book()
    .getAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const Create = (data, onSuccess) => (dispatch) => {
  api
    .book()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Update = (id, data, onSuccess) => (dispatch) => {
  api
    .book()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: {id, ...data},
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .book()
    .deleteById(id)
    .then(onSuccess())
    .catch((err) => console.log(err));
};
