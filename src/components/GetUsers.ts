import axios from 'axios';

let res = {};
async function getUsers(fetch = false, number = 20) {
  if (fetch) {
    res = axios.get(`https://randomuser.me/api/?results=${number}`);
  }
  return res;
}

export default { getUsers };
