import express  from "express";
import controller from "../controller/user.controller"

const router = express.Router()

router.get("/",controller.readAllUser)
router.get("/:id",controller.readUserByID)
router.post("/",controller.createUser)
router.put("/:id",controller.updateUser)
router.delete("/:id",controller.deleteUser)

export = router