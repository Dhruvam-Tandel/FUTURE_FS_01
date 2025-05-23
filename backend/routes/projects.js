const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }); // Most recent first
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

// GET /api/projects/:id - Get single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Failed to fetch project' });
  }
});

// POST /api/projects - Create new project
router.post('/', async (req, res) => {
  const { title, description, techStack, github } = req.body;

  if (!title || !description || !techStack || !github) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const project = new Project({ title, description, techStack, github });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Failed to create project' });
  }
});

// PUT /api/projects/:id - Update existing project
router.put('/:id', async (req, res) => {
  const { title, description, techStack, github } = req.body;

  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, techStack, github },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Failed to update project' });
  }
});

// DELETE /api/projects/:id - Delete project
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;
