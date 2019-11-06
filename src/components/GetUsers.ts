async function getUsers(number) {
  axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response));
  return {{ info }};
}
