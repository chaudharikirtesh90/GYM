import Blog from '../models/Blog.js';

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch blogs.' });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found.' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch blog.' });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, author: req.user?._id || req.body.author });
    res.status(201).json({ message: 'Blog created.', blog });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Blog creation failed.' });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found.' });
    res.status(200).json({ message: 'Blog updated.', blog });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Blog update failed.' });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found.' });
    res.status(200).json({ message: 'Blog deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete blog.' });
  }
};
