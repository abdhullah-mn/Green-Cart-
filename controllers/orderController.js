import Order from "../models/orderModel.js";
import Product from "../models/product.js";
import Address from "../models/Address.js";

//place order COD : /api/order/cod
export const placeOrderCOD = async (req,res)=>{
try{
  const {user_id,items,address} = req.body;
    if(!address || !items || items.length === 0){
        return res.json({message: "Please provide all the required fields"});
    }
    //if data all are provided we need to calculate the amount of the order
    let amount = await items.reduce(async (acc, item)=> {
        const product = await Product.findById(item.product);
        return (await acc) + (product.offerPrice * item.quantity);
    },0 //this 0 is the initial value of the accumulator 
);  
}
catch(error){
    console.error("Error placing order:", error);
    res.status(500).json({message: "Internal Server Error"});
}
};
