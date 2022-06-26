const Product = require("../RouteModule/productsModule")
const APIFeatures = require("../Utils/appFeatures");
const ErrorHandler = require("../Utils/errorHander");
const catchasynchandler = require("../middleware/CatchasyncError")
exports.getAllProducts = catchasynchandler( async(req, res)=>{

  console.log("Request for total products")
  const features = new APIFeatures(Product.find(), req.query).filter().sort().limitFields().pagination();
  const products = await features.query;
  res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
      products
      }
  })
})

exports.getProduct = catchasynchandler( async (req, res) => {
  console.log("get products details")
const product = await Product.findById(req.params.id);
console.log("what the hell")
res.status(200).json({
  status: 'success',
  data: {
    product
  }
});
}
);

exports.createProduct =catchasynchandler( async (req, res) => {

  console.log(req.body);
const newProduct = await Product.create(req.body);
console.log(newProduct)
res.status(201).json({
  status: 'success',
  data:{
    product: newProduct
  }
})
});

exports.updateProducts = catchasynchandler( async(req, res) => {

  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators: true
  })
    res.status(200).json({
      status: 'success',
      data: {
          product
      }
    });
  });

exports.deleteProducts = catchasynchandler(async(req, res) => {
  await Product.findByIdAndDelete(req.params.id);
 res.status(200).json({
   status: "success",
   message:"tour deleted"
 })
 
 
 });