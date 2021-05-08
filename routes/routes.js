const { Router } = require("express");

const { getAccountId,getAccountInformation,getAccountStatement } = require("../helpers/account");

const router = Router()
router.post("/info",getAccountId)
router.get('/info',getAccountInformation)
module.exports= router