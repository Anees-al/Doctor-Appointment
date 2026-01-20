import express from 'express';
import { createAppointment, getAllAppointments, getAppointmentByDoctorId } from '../controllers/appointmentcontroller.js';
import autheticate from '../middlewares/authMiddleware.js'

const router=express.Router();
router.post('/createappointment/:doctorId', autheticate,createAppointment);
router.get('/getallappointment',getAllAppointments);
router.get('/getappointmentbydoctor/:doctorId',getAppointmentByDoctorId)


export default router