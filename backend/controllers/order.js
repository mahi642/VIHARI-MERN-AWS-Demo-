const Razorpay = require('razorpay')

module.exports.createorder =async(req,res)=>{

var instance = new Razorpay({ key_id: 'rzp_test_4R2LUNV53xXIN1', key_secret: 'shSo85WEMnmOgqFJ3HSEvuQY' })

var options ={
  amount: req.body.price*100,
  currency: "INR",
  receipt: "receipt#1",
}
await instance.orders.create(options,(err, order)=> {
    res.json(order.id)
}); 
 
}