// https://github.com/acord-robotics/panoptes-python-client/issues/2

fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=TMpca4WzdFxx8aPN41yfNg3mX78KTgx3A33Z4ypp") // Neo is asteroid, we're using a `fetch` function with the url as the param
  .then(function(response) {
  // SUCCESS RESPONSE
    console.log(response); // Log the result to the console
  })
  .catch(function(response) {
  // FAILURE RESPONSE
    console.log('Error! Please try again');
  });
