const { createUser, getAllUsers, updateUser, deleteUser, toggleBlockUser} = require("../controllers/admin.controller");
const { verifyToken, isAdmin } = require("../middleware/authJwt");
const router = require("express").Router();

router.get("/", [verifyToken, isAdmin], getAllUsers);
router.post("/create", [verifyToken, isAdmin], createUser);
router.put("/edit/:id", [verifyToken, isAdmin], updateUser);  // Updated here
router.delete("/delete/:id", [verifyToken, isAdmin], deleteUser);


module.exports = router;
