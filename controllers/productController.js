



// add product : /api/product/add
export const addProduct = async(req,res)=>{
    try{
        let productData = JSON.parse(req.body.productData);
        const image = req.file;
        let imagesUrl = await promise.all(
            image.map(async(item)=>{

                let result = await cloudinary.uploader.upload(item.path, {resourse_type: "image"});
                return result.secure_url;

            })
        )
    
        await Product.create({
            name: productData.name,
            description: productData.description,
            images: imagesUrl
        });
        res.json({success: true, message: "Product added successfully"});


    }catch(error){

        console.log(error);
        res.json({success: false, message: "Failed to add product"});

    }



    



}

// Get product : /api/product/list 
export const productList = async (req,res)=>{





}

// Get single product : /api/product/id
export const productById = async (req,res)=>{


}

//change product in stock : /api/product/stock
export const changeStock = async(req,res)=>{



}