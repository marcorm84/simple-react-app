import http from 'utils/http';

class movieService {
  endpoint = process.env.REACT_APP_MOVIES_URL;
  async getMovies() {
    const url = `${this.endpoint}`;

    return http.get(url)
    .then((data)=>{
      return data;
    }, (err)=>{
      throw new Error(`There was an error in the response.`);
    });
  }
}

export default new movieService();
