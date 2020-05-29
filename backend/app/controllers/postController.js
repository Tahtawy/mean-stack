const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.savePost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const selectedPost = await Post.findById(req.params.id);
    res.json(selectedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { description: req.body.description } },
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
};
