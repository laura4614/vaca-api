import Router from "express-promise-router";
import groupRouter from './group.router.js';
import {
    connectDatabase,
    commitDatabase,
    rollbackDatabase
} from "../lib/database.js";

const AsyncRouter = () => {
    const router = Router();

    router.use(connectDatabase);
    router.use("/groups", groupRouter());
    router.use(commitDatabase);
    router.use(rollbackDatabase);

    return router;
}

export default AsyncRouter;