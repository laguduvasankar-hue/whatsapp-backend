import express from "express"
import User from "../controller/userController.js"

const router =express.Router()


router.post('/Register',User.register)






export default router