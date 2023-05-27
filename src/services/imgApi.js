import axios from 'axios';

const getSearchedImgApi = async (query, page = 1) => {
  try {
    const res = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=36629366-5ee8738f2ead2544f6448332f&image_type=photo&orientation=horizontal&per_page=12`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}; 
   
export default getSearchedImgApi;

