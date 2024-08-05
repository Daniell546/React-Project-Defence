const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");
const { auth } = require("../utils");
const { MongooseError } = require("mongoose");
const { getErrorMessage } = require("../utils/getErrorMessage");

router.post("/create", auth(), async (req, res) => {
    const data = { ...req.body };
    try {
        const createdPerfume = await perfumeManager.create(data);
        res.status(200).send(createdPerfume);
        return createdPerfume;
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }
});

router.put("/:perfumeId/edit", auth(), async (req, res) => {
    const id = req.params.perfumeId;
    const body = req.body;
    const newData = body.newPerfumeData;
    const owner = body.owner;
    try {
        const perfume = await perfumeManager.edit(id, newData, owner);
        res.status(200).send(perfume);
        return perfume;
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }
});


router.delete("/:perfumeId/delete", auth(), async (req, res) => {
    const id = req.params.perfumeId;
    try {
        const deletedPerfume = await perfumeManager.delete(id);
        
        await perfumeManager.deleteCommentsByPerfume(id);
        await perfumeManager.updateUsersDeletePerfumeComments(id)
        res.send(deletedPerfume);
        return deletedPerfume;
    } catch (error) {
        return res.send(getErrorMessage(error));
    }
});

module.exports = router;
