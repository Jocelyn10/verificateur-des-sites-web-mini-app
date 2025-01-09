Page({
  handleCountry(){
    const {
      BASE_URL,
      API_KEY
    } = getApp()

    const country = 'Japon'
    // TODO 1: Convert country text to english text
    // TODO 2: If text.length > 2, Add trim, Set text to miniscule, Set a switch case => Last value  

    const URL = `${BASE_URL}/country?name=${country}`

    my.request({
      url: URL,
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY
      },
      contentType: 'application/json',

      success: function(response){
        console.log('Response : ', response);
      },
      fail: function(response){
        console.log('Echec de la requête');
      }
    });
  }
});
