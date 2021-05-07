const fetch = require('node-fetch');
module.exports={
  getAccountId :async(req,res,next)=>{
    const url = 'https://api.withmono.com/account/auth';
    const options = {
        method: 'POST',
        headers: {'mono-sec-key': 'live_sk_uauQJ2QMGBTeMmIzDVAU', 'Content-Type': 'application/json'},
        body: JSON.stringify({code: `${req.body.code}`})
      };
      fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
    res.send("went through")
    next()

},

  }