const userModel = require("../Model/User");

// Fetch all data
exports.fetch = async (req, res) => {
    try {
        const users = await userModel.find(); // Fetch from MongoDB
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};


// // Fetch data by ID
// exports.fetchId = (req, res) => {
//     const id = Number(req.params.id);
//     const user = userModel.find((user) => user.id === id);

//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404).json({ message: "ID is not valid" });
//     }
// };

// Create new data and update the existing JSON file
exports.createData = async (req, res) => {
    try {
        const { first_name, last_name, email, gender, job_title } = req.body;

        // Check if all required fields are provided
        if (!first_name || !last_name || !email || !gender || !job_title) {
            return res.status(400).json({ msg: "Enter all required data" });
        }

        // Check if email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Duplicate email, please use a different email" });
        }

        // Create new user
        const newUser = await userModel.create(req.body);
        res.status(201).json(newUser);

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

