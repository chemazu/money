const { Router } = require("express");

const { getAccountInformation,getAccountStatement } = require("../helpers/account");

const router = Router()

router.post('/info',getAccountInformation)
module.exports= router