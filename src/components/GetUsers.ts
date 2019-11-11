import axios from 'axios';

async function getUsers(number: Number) {
  const { data: { info } } = await axios.get(`https://randomuser.me/api/?results=${number}`);
  return info;
}

export default { getUsers };
