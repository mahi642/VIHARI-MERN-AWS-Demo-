const Razorpay = require('razorpay')

module.exports.createorder =async(req,res)=>{
  try {
    var instance = new Razorpay({ key_id: 'rzp_test_lQaiC5AbagJXwZ', key_secret: 'OIbscxDvgT55qLYOKZpOxKx6' })

  var options = {
    amount: req.body.price * 100,
    currency: "INR",
    receipt: "receipt#1",
  }
  await instance.orders.create(options, (err, order) => {
    res.json(order.id)
  });  
  } catch (error) {
    console.log(error)
  }
 
 
}