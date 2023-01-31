import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   API_KEY: '31808257-b1d1bead71ab6681d9f118ecf',
//   params: {
//     _limit: 12,
//   },
// });

export const searchImages = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=31808257-b1d1bead71ab6681d9f118ecf&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

// export const getAllImages = async () => {
//   const { data } = await instance.get('/');
//   return data;
// };
