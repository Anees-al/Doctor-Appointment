import express from 'express';
import { createDoctor, getAllDoctors, getDoctorByDepartment } from '../controllers/doctorcontroller.js';


const router=express.Router();

router.post('/createdoctor', createDoctor);
router.get('/getalldoctors',getAllDoctors);
router.get('/getdoctorsbydepartment/:department',getDoctorByDepartment)


export default router;