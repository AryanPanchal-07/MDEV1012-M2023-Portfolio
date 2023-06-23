"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const Controllers_1 = require("../Controllers");
router.get('/', (req, res, next) => (0, Controllers_1.DisplayHomePage)(req, res, next));
router.get('/home', (req, res, next) => (0, Controllers_1.DisplayHomePage)(req, res, next));
router.get('/about', (req, res, next) => (0, Controllers_1.DisplayAboutPage)(req, res, next));
router.get('/Services', (req, res, next) => (0, Controllers_1.DisplayServicePage)(req, res, next));
router.get('/project', (req, res, next) => (0, Controllers_1.DisplayProjectPage)(req, res, next));
router.get('/contact', (req, res, next) => (0, Controllers_1.DisplayContactusPage)(req, res, next));
exports.default = router;
//# sourceMappingURL=index.js.map