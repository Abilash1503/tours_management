
import  express  from "express";
import { createTour } from "../Controllers/tourContoller.js";

const router = express.Router()



router.post('/',createTour)


export default router