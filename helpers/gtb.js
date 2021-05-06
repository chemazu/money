// mono api to get account information
const {Mono} = require("mono-node");

const monoClient = new Mono({
  secretKey: "live_sk_uauQJ2QMGBTeMmIzDVAU",
});

monoClient.user.walletBalance((err, results) => {
  // Handle errors
  if (err) {
      console.log(err);
  }
  if (results){
      console.log(results);
  };
});
