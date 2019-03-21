import Api from "../../src/js/api.js"

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    
  });

});

describe("An appstore", function() {
  let api = new Api()
  beforeEach(function() {
    // something that runs before each, ideally seeding data
  });

  afterEach(function() {
   // something that runs after each
  });
  it("should properly get all movies", done => {
    console.log("YO")
    api.getMovies().then(response => {
      expect(response.data.movies.length).toBe(10)
      done()
    })
  });

});