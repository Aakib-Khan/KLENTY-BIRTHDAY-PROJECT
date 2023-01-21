import express from "express";
import { getPosts, addPost, updatePost, getPostById, deletePost, } from "../controllers/posts.js";


const router = express.Router()

router.get('/:id', getPostById)
router.get('/', getPosts)
router.post('/addPost', addPost)
router.put('/updatepost/:id', updatePost);
router.delete('/deletepost/:id', deletePost);


export default router