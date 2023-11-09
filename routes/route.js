const express=require("express");
const router=express.Router();

// import { saveSendEmails, getEmails, toggleStarredEmail, deleteEmails, 
//     moveEmailsToBin } from '../controller/email-controller.js';
    const{saveSendEmails, getEmails, toggleStarredEmail, deleteEmails, 
        moveEmailsToBin }=require("../controller/email-controller.js")
const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.post('/save-draft', saveSendEmails);
routes.get('/emails/:type', getEmails);
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);
routes.post('/bin', moveEmailsToBin);

module.exports=routes;