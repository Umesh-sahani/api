const express = require('express');
const router = express.Router();
const User = require('../Models/User');

// Store random data into database
router.post("/createUser", async (req, res) => {
    try {
        for (let i = 1; i <= 10000; i++) {
            let name = ['Sohan', 'Mohan', 'Monita', 'Pooja', 'Rekha', 'Nandani', 'Suman', 'Ajay', 'Mohit', 'Babita', 'Chandan', 'Divya', 'Diwakar', 'Ganga', 'Harish'];
            let age = Math.floor(Math.random() * 55) + 15;
            let mobile =
                Math.floor(Math.random() * 900000000) + 6000000000;

            let index = Math.floor(Math.random() * name.length);

            name = name[index] + index * Math.floor(Math.random() * 100)

            const user = new User({
                name: name,
                age: age,
                mobile: mobile
            });
            await user.save();
        }

        res.status(200).json({ option: true, message: "All record submitted" });

    } catch (error) {
        console.log("Internal Server Error");
    }
});

// get all data from database
router.get("/getUsers", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ option: false, message: "Unable to fetch record" })
    }
});

module.exports = router;