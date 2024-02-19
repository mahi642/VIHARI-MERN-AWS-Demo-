const bus = require('../models/buses')
const ticket = require('../models/ticket')

module.exports.busList = async(req,res)=>{
   const {srcname,destname} = req.body;
   const buslist = await bus.find({srcname:srcname.toLowerCase(),destname:destname.toLowerCase()})
   if(buslist){
    res.json(buslist)
   }
}
module.exports.booking = async(req,res)=>{
   const {user,bus,seats,date} = req.body;
   const book = await ticket.create({user:user._id,bus:bus._id,tickets:seats,date});
   if(book){
      res.json({success:true})
   }
   else {
      res.json({success:false,error:"Booking unsuccessful"})
   }
} 