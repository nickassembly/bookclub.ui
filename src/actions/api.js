import axios from 'axios';

const baseUrl = 'https://bookclubapi.azurewebsites.net/api/v1/';

export default {
  book(url = baseUrl + 'books') {
    return {
      getAll: () => axios.get(url),
      getById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      deleteById: (id) => axios.delete(url + id),
    };
  },
};
