const Apartment = require('../model/Apartment')


const getAllapartments = async (req,res,next)=>{
    let apartments;
    try{
        apartments = await Apartment.find();
    } catch (err) {
        console.log(err)
    }

    if (!apartments){
        
        return res.status(404).json({message:'No apartments found'})
    } 
    
    return res.status(200).json({apartments})
}

const addApartments = async (req,res,next)=>{
    let newApartments;
    // const {id,rooms,name, price, description} = req.body;
    try{
        newApartments = new Apartment({
            rooms:req.body.rooms,
            name:req.body.name,
            price:req.body.price, 
            descr:req.body.descr
        });
        
        await newApartments.save()

    } catch (err) {
        console.log(err)
    }

    if (!newApartments){
        return res.status(500).json({message:'Unable to add'})
    } 

    return res.status(201).json({newApartments})
}

const getbyId = async (req,res,next)=>{
    const id = req.params.id
    let apartment;
    try{
        apartment=await Apartment.findById(id)
    }catch(err){
        console.log(err)
    }

    if (!apartment){
        return res.status(500).json({message:'No app were found'})
    } 

    return res.status(200).json({apartment})
}


const updateApartment = async (req,res,next)=>{
    const id = req.params.id;
    const { rooms, name, price, descr} = req.body;
    let apartment;
    try{
        apartment =await Apartment.findByIdAndUpdate(id,{
          
            rooms,
            name,
            price,
            descr
        })
        apartment = await apartment.save()
    } catch (err){
        console.log(err)
    }
    if (!apartment){
        return res.status(404).json({message:'Unable to update'})
    } 

    return res.status(200).json({apartment})
}

const deleteApartment = async (req,res,next)=>{
    const id = req.params.id;
    console.log(id)
    const { rooms, name, price, descr} = req.body;
    let apartment;
    try{
        apartment = await Apartment.findByIdAndRemove(id,{

            rooms,
            name,
            price,
            descr
        })
        apartment = await apartment.save()
    } catch (err){
        console.log(err)
    }
    if (!apartment){
        return res.status(404).json({message:'Unable to delete'})
    } 

    return res.status(200).json({message:"Apartment was deleted"})
}


exports.getAllapartments = getAllapartments;
exports.addApartments = addApartments;
exports.getbyId = getbyId;
// exports.updateApartment = updateApartment;
exports.deleteApartment = deleteApartment;