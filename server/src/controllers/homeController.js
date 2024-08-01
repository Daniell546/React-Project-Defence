const express = require("express");
const router = express.Router();
const perfumeManager = require("../managers/perfumeManager");

router.get("/home", async (req, res) => {
    let perfumes = (await perfumeManager.getPerfumes().lean()).reverse();
    res.send(perfumes);
    return perfumes;
});

router.get("/:perfumeId", async (req, res) => {
    const id = req.params.perfumeId;
    const perfume = await perfumeManager.getOnePerfume(id).lean();
    res.send(perfume);
    return perfume;
});

router.get("/search/:text/:criteria", async (req, res) => {
    const text = req.params.text;
    const criteria = req.params.criteria;
    const perfumes = await perfumeManager.search(text, criteria)
    res.send(perfumes);
    return perfumes
});

module.exports = router;
