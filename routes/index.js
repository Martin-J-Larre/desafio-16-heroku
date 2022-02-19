const { Router } = require('express');
const router = Router();
const controllerMethods = require('../controllers/controllerMethods');

const serverRoutes = (app) => { 
    
    app.use("/", router);

    router.get("/", controllerMethods.root);
    router.get("/info", controllerMethods.getInfo);
    router.get("/api/random", controllerMethods.getNumRandom);
    router.get("/mensajes", controllerMethods.getError);
    router.get("/productos", controllerMethods.getError);
    router.get("*", controllerMethods.getNotExist);
}

module.exports = serverRoutes;