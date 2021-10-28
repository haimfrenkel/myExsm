"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.post('/create', (req, res) => {
    const add = controller_1.Create(req.body["arrey"], req.body["isEqual"], res);
});
router.get('/getAll', (req, res) => {
    const add = controller_1.getAll(res);
});
module.exports = router;
//# sourceMappingURL=router.js.map