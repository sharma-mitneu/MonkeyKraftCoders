import express from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/user";
import { existsEmail, existsUsername } from "../utils/utils";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../utilities/token";
import Filter from "bad-words";
import ProblemModel from "../models/problem";
import { customCors } from "../utilities/cors";

const accountsRouter = express.Router();

accountsRouter.post<{}, { id?: string; token?: string; success: boolean; message: string }, User>("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            res.status(400).json({
                success: false,
                message: "Missing required fields.",
            });
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const usernameRegex = /^[a-zA-Z0-9_-]{3,15}$/;

        if (!emailRegex.test(email)) {
            res.status(400).json({
                success: false,
                message: "Email is not valid.",
            });
            return;
        }

        if (!usernameRegex.test(username)) {
            res.status(400).json({
                success: false,
                message: "Username must be between 3 to 15 characters and can only contain letters, numbers, hyphens, and underscores.",
            });
            return;
        }

        const filter = new Filter();

        if (filter.isProfane(username)) {
            res.status(400).json({
                success: false,
                message: "Username contains inappropriate language.",
            });
            return;
        }

        if (await existsUsername(username)) {
            res.status(409).json({
                success: false,
                message: "Username already exists.",
            });
            return;
        } else if (await existsEmail(email)) {
            res.status(409).json({
                success: false,
                message: "Email already exists.",
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            username: username,
            email: email,
            password: hashedPassword,
        };

        const userModel = new UserModel(user);
        await userModel.save();

        const userFromDb = await UserModel.findOne({
            username: username,
            email: email,
            password: hashedPassword,
        });

        const id = userFromDb ? userFromDb.id.toString() : "none";

        const token = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET!);

        console.log("User '", user.username, "' signed up at ", new Date());
        res.status(201).json({
            token: token,
            id: id,
            success: true,
            message: "Account created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating account",
        });
    }
});

accountsRouter.post<{}, { id?: string; token?: string; success: boolean; message: string }, { username_or_email: string; password: string }>("/login", async (req, res) => {
    const { username_or_email, password } = req.body;

    if (!username_or_email || !password) {
        res.status(400).json({
            success: false,
            message: "Missing required fields",
        });
        return;
    }

    try {
        const user = await UserModel.findOne({
            $or: [
                { username: username_or_email },
                { email: username_or_email },
            ],
        });

        if (!user) {
            res.status(400).json({
                success: false,
                message: "Username or Email doesn't exist",
            });
            return;
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                user.username,
                process.env.ACCESS_TOKEN_SECRET!
            );

            console.log("User '", user.username, "' logged in at ", new Date());
            res.json({
                token: token,
                id: user.id,
                success: true,
                message: "Logged in successfully",
            });
        } else {
            console.log(
                "User '",
                user.username,
                "' failed login (incorrect password) at ",
                new Date()
            );
            res.json({ success: false, message: "Password incorrect" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
});

accountsRouter.post("/delete/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        await UserModel.findByIdAndDelete(id);
        res.json({
            success: true,
            message: "Account deleted successfully",
        });
    } catch (error) {
        res.json({ success: false, message: error });
    }
});

accountsRouter.get("/id/:id", authenticateToken, async (req, res) => {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    if (!user) {
        res.status(404).json({ success: false, message: "User not found" });
        return;
    }

    res.json(user);
});

accountsRouter.get("/:name", async (req, res) => {
    const name = req.params.name;

    const user = await UserModel.findOne({
        username: name,
    });

    if (!user) {
        res.status(404).json({ success: false, message: "User not found" });
        return;
    }

    let allProblems = await ProblemModel.find();

    let easyProblems = 0;
    let mediumProblems = 0;
    let hardProblems = 0;

    let easySolved = 0;
    let mediumSolved = 0;
    let hardSolved = 0;

    for (let i = 0; i < allProblems.length; i++) {
        const problem = allProblems[i].main;
        const difficulty = problem.difficulty;

        if (difficulty === "easy") {
            easyProblems++;
            if (user.problems_solved.includes(problem.name)) {
                easySolved++;
            }
        } else if (difficulty === "medium") {
            mediumProblems++;
            if (user.problems_solved.includes(problem.name)) {
                mediumSolved++;
            }
        } else {
            hardProblems++;
            if (user.problems_solved.includes(problem.name)) {
                hardSolved++;
            }
        }
    }

    const publicUser = {
        username: user.username,
        email: user.email,
        submissions: user.submissions,
        problems_starred: user.problems_starred,
        problems_solved: user.problems_solved,
        easy_problems_count: easyProblems,
        medium_problems_count: mediumProblems,
        hard_problems_count: hardProblems,
        problems_solved_easy: easySolved,
        problems_solved_medium: mediumSolved,
        problems_solved_hard: hardSolved,
        problems_attempted: user.problems_attempted,
        problems_solved_count: user.problems_solved_count,
        rank: user.rank,
        views: user.views,
        solution_count: user.solution_count,
        reputation_count: user.reputation_count,
    };

    res.json(publicUser);
});

export default accountsRouter;
