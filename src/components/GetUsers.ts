import axios from 'axios';

async function getUsers(number: Number) {
  return axios.get(`https://randomuser.me/api/?results=${number}`);
}

export default { getUsers };
