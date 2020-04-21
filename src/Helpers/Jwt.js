export const getJwt = () => {
  if (localStorage.getItem('cool-jwt') === null) return;

  var parseToken = localStorage.getItem('cool-jwt').replace('"', '');
  return parseToken.replace('"', '');
};
