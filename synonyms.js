var request = require("request");
var options = { method : 'GET',
     url: 'https://fourtytwowords.herokuapp.com/word/grain/relatedWords?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164' 
}
request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });