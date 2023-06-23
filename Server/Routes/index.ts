import express from 'express';
let router = express.Router();

//import the index controller
import { DisplayHomePage, DisplayAboutPage, DisplayServicePage, DisplayProjectPage,DisplayContactusPage} from '../Controllers';


/* GET default page. */
router.get('/', (req, res, next) => DisplayHomePage(req, res, next) );

/* GET home page. */
router.get('/home', (req, res, next) =>  DisplayHomePage(req, res, next) );

/* GET about page. */
router.get('/about', (req, res, next) =>  DisplayAboutPage(req, res, next) );

/* GET service page. */
router.get('/service', (req, res, next) =>  DisplayServicePage(req, res, next) );

/* GET projects page. */
router.get('/project', (req, res, next) =>  DisplayProjectPage(req, res, next) );

/* GET contact page. */
router.get('/contact', (req, res, next) =>  DisplayContactusPage(req, res, next) );


export default router;
