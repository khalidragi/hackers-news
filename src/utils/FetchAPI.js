import axios from 'axios';

export const getStorys = async url => {
  const result = await axios.get(url);
  return result.data;
};
