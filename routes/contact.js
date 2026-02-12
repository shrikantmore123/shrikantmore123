const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Load profile data
const getProfileData = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../data/profile.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading profile data:', error);
    return {};
  }
};

// Contact page
router.get('/', (req, res) => {
  const profile = getProfileData();
  res.render('contact', {
    title: 'Contact',
    profile: profile
  });
});

// Handle contact form submission (frontend only for now)
router.post('/', (req, res) => {
  // In a real application, you would integrate with an email service here
  // For now, just return success
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.' 
  });
});

module.exports = router;
