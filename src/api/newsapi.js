import axios from 'axios';

export default axios.create({
  baseURL: 'http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=ecc6bbdfc8ce4b938cdbf136b40de6ca',
});
