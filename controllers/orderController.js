

//place order COD : /api/order/cod
export const placeOrderCOD = (req,res)=>{

    const {user_id,items,address} = req.body;
    if(!address || !items || items.length === 0){
        return res.json({message: "Please provide all the required fields"});
    }
    //if data all are provided we need to calculate the amount of the order
    let amount = await items.reduce (async (acc, item)=> {
        const product = await Product.findById(item.product);
        return (await acc) + (product.offerPrice * itemantity);
}

    
