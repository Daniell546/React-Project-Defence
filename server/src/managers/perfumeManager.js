const Perfume = require("../models/Perfume");

exports.getPerfumes = () => Perfume.find();

exports.create = (data) => Perfume.create(data);

exports.getOnePerfume = (id) => Perfume.findById(id);

exports.edit = async (id, perfume, owner) => {
    const oldPerfume = await Perfume.findById(id).lean();
    if(oldPerfume.owner != owner._id) {
        throw new Error("Invalid user, trying to edit perfume article")
    }
    return await Perfume.findByIdAndUpdate(id, perfume, {runValidators: true});
};

exports.delete = (id) => Perfume.findByIdAndDelete(id);

exports.getByUser = async (owner) => {
    let all = await Perfume.find().lean();
    const newArr = [];
    for (let p of all) {
        if (p.owner == owner) {
            newArr.push(p);
        }
    }
    return newArr;
};

exports.search = async (text, criteria) => {
    let all = await Perfume.find().lean();
    if (text && criteria) {
        const newArr = [];
        for (let p of all) {
            if (
                p[criteria]
                    .toLocaleLowerCase()
                    .includes(text.toLocaleLowerCase())
            ) {
                newArr.push(p);
            }
        }
        return newArr;
    } else {
        return all;
    }
};
