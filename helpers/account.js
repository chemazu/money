const fetch = require('node-fetch');

async function handleAccountId(code){
  const url = 'https://api.withmono.com/account/auth';
    const options = {
        method: 'POST',
        headers: {'mono-sec-key': 'live_sk_uauQJ2QMGBTeMmIzDVAU', 'Content-Type': 'application/json'},
        body: JSON.stringify({code: `${code}`})
      }
      try {
        const response =await fetch  (url,options)
        return response.json() //accountId
      } catch (error) {
        res.send(error)
      }
}
async function handleAccountInformation (code){
  const accountId = await handleAccountId(code)
  const url = `https://api.withmono.com/accounts/${accountId.id}`;
  const options = {method: 'GET', headers: {'mono-sec-key': 'live_sk_uauQJ2QMGBTeMmIzDVAU'}};
try {
  const response =await fetch  (url,options)
  return response.json() //accountInformation
} catch (error) {
 res.send(error)
}

  
}
module.exports={
  getAccountInformation :async(req,res,next)=>{
    const{ code} = req.body
    const accountInformation= await handleAccountInformation(code)
    res.status(200).json(accountInformation)
    next()

  }
  }