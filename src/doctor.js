export class DoctorService {
  constructor(search) {
    this.search = search;
  }
  async getResponse() {
    let response;
    try {
      console.log(this.search);
      response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.search}&location=45.523%2C-122.676%2C10&user_location=45.523%2C-122.676&sort=distance-asc&limit=10&user_key=${process.env.API_KEY}`);
      // response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.523%2C-122.413%2C100&user_location=45.523%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
