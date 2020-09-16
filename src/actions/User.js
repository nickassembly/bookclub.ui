import api from './api.js';

export const ACTION_TYPES = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  READ: 'READ',
  GET_ALL: 'GET_ALL',
};
export const Login = (username, password) => (dispatch) => {
  console.log('User Actions');
  api
    .users()
    .getAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getAll = () => (dispatch) => {
  console.log('User Actions');
  api
    .users()
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
    .users()
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
    .users()
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
    .users()
    .deleteById(id)
    .then(onSuccess())
    .catch((err) => console.log(err));
};
