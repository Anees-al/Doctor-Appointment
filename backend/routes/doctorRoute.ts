import express from 'express';
import { createDoctor, getAllDoctors, getDoctorByDepartment, getDoctorById } from '../controllers/doctorcontroller.js';


const router=express.Router();

router.post('/createdoctor', createDoctor);
router.get('/getalldoctors',getAllDoctors);
router.get('/getdoctorsbydepartment/:department',getDoctorByDepartment)
router.get('/getdoctorbyid/:doctorId',getDoctorById)

export default router;