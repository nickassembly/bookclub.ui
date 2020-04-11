export const getJwt = () => {
  var parseToken = localStorage.getItem('cool-jwt').replace('"', '');
  return parseToken.replace('"', '');
};
