const studModel = require('./studentModel');

const addStudent = async (req, res) => {
    const {roll_no, name, age, gender, course, marks } = req.body;
    try {
        const data = new studModel({
            roll_no,
            name,
            age,
            gender,
            course,
            marks
        });
        const userdata = await data.save();
        res.status(200).send({ userdata });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const data = await studModel.find();
        res.status(200).send({ data });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

const updateStudent = async (req, res) => {
    const { roll_no, name, age, gender, course, marks } = req.body;
    try {
        await studModel.updateOne(
            { roll_no: req.params.roll_no },
            { $set: { roll_no, name, age, gender, course, marks } }
        );

        const updatedUser = await studModel.findOne({ roll_no });
        if (updatedUser) {
            res.status(200).send(updatedUser);
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const data = await studModel.deleteOne({ roll_no: req.params.roll_no });
        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "User deleted successfully" });
        } else {
            res.status(404).send({ msg: "User not found or not deleted" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = { addStudent, getAllStudents, updateStudent, deleteStudent };