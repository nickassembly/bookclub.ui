import Cookies from 'js-cookie';

export const getAuthHeader = () => {
    if (Cookies.get('token') === "") return;
  
    const token = Cookies.get('token');
    return {headers: { Authorization: `Bearer ${token}` } };
  };
  