export const AddItem = (data) =>{
    return{
        type:"AddProduct",
        payload:data
    }
}

export const EmptyCart = () =>{
    return{
        type:"EmptyProduct"
    }
}

export const EmptyById = (prddata) =>{
    return{
        type:"EmptyProductById",
        payload:prddata
    }
}