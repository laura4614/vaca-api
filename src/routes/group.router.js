import Router from "express-promise-router";
import Controller from "../controllers/group.controller.js";
import continuator from "../lib/continue.decorator.js";

const GroupsRouter = () => {

    const router = Router();
    const controller = Controller();
 
    router.get('/', continuator(controller.getAll));
    router.get('/:id', continuator(controller.getById));
    router.delete('/:id', continuator(controller.deleteById));
    router.post('/', continuator(controller.create));
    router.put('/:id', continuator(controller.fullUpdateById));

    return router;
};

export default GroupsRouter;