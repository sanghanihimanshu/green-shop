import { Router } from "express";
import { User } from "../db/schma/signup.js";

export const auth = Router();
auth.get("/", (req, res) => {
  res.send("you are in auth");
});
auth.post("/signup", async (req, res) => {
  try {
    const registerd = await User.findOne({ email: req.body.email });
    if (!registerd) {
      const NewUser = new User(req.body);
      NewUser.save()
        .then(() => {
          res.json({
            "res":"ragistration done",
        }), res.status(200);
        })
        .catch((error) => {
            res.json({
              "res":error.message
            }) 
        });
    }else{
        res.json({
            "res":"user alredy exist",
            "email":registerd.email
        })
    }
  } catch (error) {
    console.log(error);
  }
});
