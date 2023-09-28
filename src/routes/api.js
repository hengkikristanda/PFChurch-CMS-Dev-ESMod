import express from "express";

import sideBarMenu from "../services/sidebar.js";

const router = express.Router();

router.get("/webapi/sidebar", sideBarMenu);

export default router;
