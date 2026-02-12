const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Load projects data
const getProjectsData = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../data/projects.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading projects data:', error);
    return { projects: [] };
  }
};

// Projects page
router.get('/', (req, res) => {
  const projectsData = getProjectsData();
  res.render('projects', {
    title: 'Projects',
    projects: projectsData.projects || []
  });
});

module.exports = router;
