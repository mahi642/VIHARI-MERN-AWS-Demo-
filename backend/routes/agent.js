const express = require('express');
const router = express.Router();
const fileUpload=require('../middleware/fileUpload');
const agentController=require('../controllers/agent');

router.post('/addbus',fileUpload.single('image'),agentController.addBus);
router.get('/allbuses',agentController.getBuses);
router.delete('/deletebus/:busId',agentController.deleteBus);
router.get('/getbus/:busId',agentController.getBusDetails);
router.put('/editbus/:busId',agentController.editBus);

module.exports=router;