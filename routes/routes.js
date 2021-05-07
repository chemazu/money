const { Router } = require("express");

const { getAccountId } = require("../helpers/account");

const router = Router()

router.post("/info",getAccountId)
router.get("/",(res,req,next)=>{
    res.send("welcome")
    console.log(getAccountId)
})
module.exports= router