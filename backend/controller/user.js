const User = require("../model/user")


const creation = async(req,res)=>{
    const {name,email} = req.body
   try {
    if (!name || !email) {
        res.status(400).send({
            status:'client issue',
            message:'Fill all the fields'
        })
    }
    else{
        const usercreated = await User.create({
            name,
            email,
        })
        res.status(200).send({
            status:'ok',
            message:usercreated
        })
    }

   } catch (error) {
    res.status(500).send({
        status:'server issue',
        message:error
    })
   }
}

const getusers= async(req,res)=>{
    const users = await User.find({})
    try {
        if (!users) {
            res.status(400).send({
                status:'Empty DB',
                message:'Nothing Found In Database'
            })
        }
        else{
            res.status(200).send({
                status:'OK',
                message:users
            })
        }
    } catch (error) {
          res.status(500).send({
            status:'server issue',
            message:error
        })
}}


const updatedform = async(req,res)=>{
    try {
        const id = req.params.id
        const response = await User.findById({_id:id})
        if(!response){
            res.status(400).send({
                status:'Client Issue',
                message:'ID Not Found In DB '
            })
        }
        else{
            res.status(200).send({
                status:'ok',
                message:response
            })
        }
    } catch (error) {
        res.status(500).send({
            status:'Server Issue',
            message:error
        })
    }
}

const updated = async(req,res)=>{
    const id = req.params.id
    try {
        const response = await User.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email})
        if(!response){
            res.status(400).send({
                status:'client issue',
                message:'Fill all the fields'
            })
        }
        else{
            res.status(200).send({
                status:'ok',
                message:response
            })
        }
    } catch (error) {
        res.status(500).send({
            status:'server issue',
            message:error
        })
    }

}

const deleteuser = async(req,res)=>{
    
    const id = req.params.id; 

    try {
        const response = await User.findByIdAndDelete({_id:id});
        if(!response){
            res.status(400).send({
                status:'client issue',
                message:'id not found in db'
            })
        }
        else{
            res.status(200).send({
                status:'ok',
                message:response
            })
        }
    } catch (error) {
        res.status(500).send({
            status:'server issue',
            message:error.message
        })
    }
}
module.exports={creation,getusers,updatedform,updated,deleteuser}