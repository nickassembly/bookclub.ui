import api from './api';

export const ACTION_TYPES = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  GET_ALL: 'GET_ALL',
};

export const getAll = () => (dispatch) => {
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

export const create = (data, onSuccess) => (dispatch) => {
  data = formateData(data);
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

export const update = (id, data, onSuccess) => (dispatch) => {
  data = formateData(data);
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
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
