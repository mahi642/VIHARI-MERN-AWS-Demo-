const Bus = require("../models/buses");

exports.addBus = async (req, res) => {
  const {
    srcname,
    destname,
    bname,
    deptime,
    arrtime,
    durtime,
    tktprice,
    btype,
  } = req.body;
  const BusImage = req.file;
  const Imageurl = BusImage.path;
  try {
    const newBus = new Bus({
      srcname,
      destname,
      trname: bname,
      deptime,
      arrtime,
      durtime,
      tktprice,
      btype,
      Imageurl,
    });
    const result = await newBus.save();
    res.status(201).json(result);
  } catch (error) {
    console.error("Error adding bus:", error);
    res
      .status(500)
      .json({ message: "Adding Bus failed, please try again later." });
  }
};

exports.getBuses = async (req, res) => {
  try {
    const Buses = await Bus.find({});
    res.status(200).json({ buses: Buses });
  } catch (error) {
    res.status(500).json({ message: "Error while fetching buses" });
  }
};

exports.deleteBus =  (req, res) => {
  const busId=req.params.busId;
   Bus.findByIdAndDelete(busId)
   .then((deletedBus)=>{
    if(!deletedBus){
      return res.status(404).json({message: "Bus not found"});
    }
   }).then((bus)=>{
    res.status(200).json({message: "Bus deleted successfully  "});
   })
   .catch((error)=>{
    res.status(500).json({message:"Internal server error"});
   })
};

exports.getBusDetails=async (req,res)=>{

  try{
    const busId=req.params.busId;
    const busData=await Bus.findById(busId);
    res.status(200).json({bus:busData});
  } catch(error){
    res.status(500).json({ message: "Error while fetching bus" });
  }  
}

exports.editBus = async (req, res) => {
  const {
    srcname,
    destname,
    bname,
    deptime,
    arrtime,
    durtime,
    tktprice,
    btype,
  } = req.body;
  const busId = req.params.busId; 

  try {
    const busToUpdate = await Bus.findById(busId);
    if (!busToUpdate) {
      return res.status(404).json({ message: "Bus not found" });
    }

    busToUpdate.srcname = srcname;
    busToUpdate.destname = destname;
    busToUpdate.trname = bname;
    busToUpdate.deptime = deptime;
    busToUpdate.arrtime = arrtime;
    busToUpdate.durtime = durtime;
    busToUpdate.tktprice = tktprice;
    busToUpdate.btype = btype;

    const updatedBus = await busToUpdate.save();

    res.status(200).json({bus:updatedBus});
  } catch (error) {
    console.error("Error updating bus:", error);
    res.status(500).json({ message: "Updating bus failed, please try again later." });
  }
};

