// const { userBoard, moderatorBoard, adminBoard,getAllContent } = require("../controllers/user.controller");
// const {getAllUsers,createUser,updateUser,deleteUser} = require("../controllers/user.controller")
const { userBoard, moderatorBoard, adminBoard, getAllContent, getAllUsers, createUser, updateUser, deleteUser,toggleBlockUser} = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/authJwt");
const {isAdmin} = require('../middleware/authJwt')
const router = require("express").Router();

router.get("/user", [verifyToken], userBoard);
router.get("/mod", [verifyToken], moderatorBoard);
router.get("/admin", [verifyToken], adminBoard);
router.get("/all", getAllContent);

// New user management routes
router.get("/users", [verifyToken, isAdmin], getAllUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.patch('/users/block/:id',toggleBlockUser)

module.exports = router;  