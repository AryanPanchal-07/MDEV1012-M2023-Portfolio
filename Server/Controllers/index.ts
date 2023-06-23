import express from 'express';

//controller function to display home page
export function DisplayHomePage(req: express.Request ,res: express.Response , next: express.NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

//controller function to display about page
export function DisplayAboutPage(req: express.Request ,res: express.Response , next: express.NextFunction): void
{
    res.render('index', { title: 'About', page: 'about' });
}

//controller function to display service page
export function DisplayServicePage(req: express.Request ,res: express.Response , next: express.NextFunction): void
{
    res.render('index', { title: 'Services', page: 'Services' });
}

//controller function to display projects page
export function DisplayProjectPage(req: express.Request ,res: express.Response , next: express.NextFunction): void
{
    res.render('index', { title: 'Projects', page: 'projects' });
}

//controller function to display Contact page
export function DisplayContactPage(req: express.Request ,res: express.Response , next: express.NextFunction): void
{
    res.render('index', { title: 'Contact', page: 'contact' });
}