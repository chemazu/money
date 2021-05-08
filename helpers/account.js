const fetch = require('node-fetch');

async function handleAccountId(code){
  const url = 'https://api.withmono.com/account/auth';
    const options = {
        method: 'POST',
        headers: {'mono-sec-key': 'live_sk_uauQJ2QMGBTeMmIzDVAU', 'Content-Type': 'application/json'},
        body: JSON.stringify({code: `${code}`})
      }
      const response =await fetch  (url,options)
      return response.json()
  // fetch(url, options)
  // .then(res => res.json())
  // .then(json => {return json})
  // .catch(err => console.error('error:' + err));
}

module.exports={
  getAccountId :async(req,res,next)=>{
   const{ code} = req.body
    const accountId = await handleAccountId(code)
    console.log(accountId)
    res.status(200).json(accountId)
    next()

  },
  getAccountInformation:()=>{
    console.log(milk)
  }
  }