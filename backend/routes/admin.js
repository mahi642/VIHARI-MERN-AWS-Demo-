const express = require('express');
const router = express.Router();
const fileUpload=require('../middleware/fileUpload');
const adminController=require('../controllers/admin');

router.get('/allusers',adminController.getAllUsers);
router.post('/adduser',adminController.addUser);
router.post('/announcements',adminController.postsendmail);
router.delete('/deleteuser/:userId',adminController.deleteUser);

module.exports=router;