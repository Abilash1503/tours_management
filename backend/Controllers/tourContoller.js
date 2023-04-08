
import Tour from '../models/Tour.js'


export const createTour = async (res,req)=>{
    const newTour= new Tour(req.body)

    try {
        const savedTour = await newTour.save()
        res.status(200).json({success:true,message:'successFully create',   data:savedTour})
    } catch (err) {
        res.tours,{success:false,message:'failed'}
    }
}