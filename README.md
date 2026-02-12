# Personal Portfolio Website

A modern, fast, and responsive personal portfolio website built with Node.js, Express.js, and EJS templates. Features a dark theme with neon accents, smooth animations, and a fully responsive design.

## 🚀 Features

- **Dark Theme Design** - Beautiful black/dark theme with neon blue/purple accents
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll reveal effects, typing animations, and hover effects
- **Multiple Sections**:
  - Hero section with animated introduction
  - About section with education and experience
  - Skills section with progress bars
  - Projects section with filtering
  - Resume download page
  - Contact form with social links
- **No Database** - All content stored in JSON files
- **SEO Optimized** - Meta tags and semantic HTML
- **Modern UI/UX** - Glassmorphism effects, gradient accents, and smooth transitions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and configure:
   ```
   PORT=3000
   NODE_ENV=development
   ```

4. **Add your content**
   - Edit `data/profile.json` with your personal information
   - Edit `data/projects.json` with your projects
   - Add your profile image to `public/images/profile.jpg`
   - Add project images to `public/images/` (project1.jpg, project2.jpg, etc.)
   - Add your resume PDF to `public/resume/resume.pdf`

5. **Start the server**
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Portfolio1/
├── data/
│   ├── profile.json          # Your profile information
│   └── projects.json          # Your projects data
├── public/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── main.js            # Frontend JavaScript
│   ├── images/                # Images directory
│   └── resume/                # Resume PDF directory
├── routes/
│   ├── index.js               # Home, About, Skills routes
│   ├── projects.js            # Projects route
│   ├── resume.js              # Resume route
│   └── contact.js             # Contact route
├── views/
│   ├── partials/
│   │   ├── header.ejs         # Header partial
│   │   └── footer.ejs         # Footer partial
│   ├── index.ejs              # Home page
│   ├── projects.ejs           # Projects page
│   ├── resume.ejs             # Resume page
│   ├── contact.ejs            # Contact page
│   └── error.ejs              # Error page
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore file
├── package.json               # Dependencies and scripts
├── server.js                  # Express server
└── README.md                  # This file
```

## 📝 Customization

### Updating Profile Information

Edit `data/profile.json`:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "intro": "Your introduction",
  "bio": "Your bio",
  "email": "your.email@example.com",
  "location": "Your Location",
  "profileImage": "/images/profile.jpg",
  "resumeFile": "/resume/resume.pdf",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "email": "mailto:your.email@example.com"
  },
  ...
}
```

### Adding Projects

Edit `data/projects.json`:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "image": "/images/project1.jpg",
      "techStack": ["React", "Node.js", "MongoDB"],
      "github": "https://github.com/yourusername/project",
      "liveDemo": "https://project-demo.com",
      "category": "Full Stack"
    }
  ]
}
```

### Customizing Colors

Edit CSS variables in `public/css/style.css`:
```css
:root {
    --accent-primary: #00d4ff;      /* Neon blue */
    --accent-secondary: #7c3aed;    /* Purple */
    --bg-primary: #0a0a0a;          /* Background */
    ...
}
```

## 🎨 Features Breakdown

### Home Page
- Full-screen hero section with typing animation
- Smooth scroll indicator
- Profile image with glow effect

### About Section
- Profile image and bio
- Education timeline
- Experience timeline

### Skills Section
- Categorized skills (Frontend, Backend, Tools, Others)
- Animated progress bars
- Hover effects on skill cards

### Projects Section
- Project cards with images
- Filter by category (All, Full Stack, Frontend, Backend)
- GitHub and Live Demo links
- Tech stack tags

### Resume Page
- Download resume button
- Detailed resume information
- Contact information

### Contact Page
- Contact form (frontend submission)
- Social media links
- Contact information cards

## 🔧 Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon (auto-reload)

## 📦 Dependencies

- **express** - Web framework for Node.js
- **ejs** - Embedded JavaScript templating
- **dotenv** - Environment variable management

### Dev Dependencies

- **nodemon** - Auto-reload during development

## 🌐 Deployment

### Deploy to Heroku

1. Create a `Procfile`:
   ```
   web: node server.js
   ```

2. Set environment variables in Heroku dashboard

3. Deploy:
   ```bash
   git push heroku main
   ```

### Deploy to Vercel/Netlify

These platforms work best with serverless functions. You may need to adapt the Express app structure.

### Deploy to DigitalOcean/Railway

1. Set up your server
2. Clone the repository
3. Install dependencies: `npm install`
4. Set environment variables
5. Start with PM2: `pm2 start server.js`

## 🐛 Troubleshooting

### Port Already in Use
Change the PORT in `.env` file or kill the process using the port:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Images Not Loading
- Ensure images are in `public/images/` directory
- Check file paths in JSON files match actual file names
- Use placeholder images if needed

### Styling Issues
- Clear browser cache
- Check browser console for errors
- Ensure CSS file is being loaded

## 📄 License

MIT License - feel free to use this project for your portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ using Node.js, Express.js, and EJS**
