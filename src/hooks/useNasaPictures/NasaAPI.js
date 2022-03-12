import axios from 'axios';
import { formatDateToYMD } from '../../utils';

const NASA_KEY = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    error.response
      ? Promise.reject(new Error(error.response.data.msg))
      : Promise.reject(error)
);
export const getNasaPictures = async (startDate) => {
  const startDateFormatted = formatDateToYMD(startDate);
  const endDateFormatted = formatDateToYMD(new Date());

  try {
    const response = await axiosInstance.get('', {
      params: {
        start_date: startDateFormatted,
        end_date: endDateFormatted,
      },
    });
    return {
      pictures: response.data.filter(
        (picture) => picture.media_type === 'image'
      ),
    };
  } catch (error) {
    return { error: error.message };
  }
};
