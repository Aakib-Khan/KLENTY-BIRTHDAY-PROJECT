import mongoose from "mongoose";
import PostMessage from "../models/postMessages.js"

export const getPostById = async (req, res) => {
    try {
        const postMessages = await PostMessage.findById({ _id: req.params.id });

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addPost = async (req, res) => {
    try {
        const post = req.body
        const newpost = new PostMessage(post)
        await newpost.save()
        res.send(newpost)

    } catch (error) {
        res.status(404).json({ message: error });

    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = post

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

