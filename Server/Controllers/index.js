"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactusPage = exports.DisplayProjectPage = exports.DisplayServicePage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Services', page: 'Services' });
}
exports.DisplayServicePage = DisplayServicePage;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayContactusPage(req, res, next) {
    res.render('index', { title: 'Contactus', page: 'contactus' });
}
exports.DisplayContactusPage = DisplayContactusPage;
//# sourceMappingURL=index.js.map