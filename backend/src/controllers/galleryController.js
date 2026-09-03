import Gallery from '../models/Gallery.js';

export const getGallery = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch gallery.' });
  }
};

export const createGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.create(req.body);
    res.status(201).json({ message: 'Gallery item created.', item });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Gallery item creation failed.' });
  }
};

export const updateGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Gallery item not found.' });
    res.status(200).json({ message: 'Gallery item updated.', item });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Gallery item update failed.' });
  }
};

export const deleteGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Gallery item not found.' });
    res.status(200).json({ message: 'Gallery item deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete gallery item.' });
  }
};
