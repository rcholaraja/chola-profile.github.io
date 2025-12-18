# Quick Setup Guide

Follow these simple steps to customize your career website!

## ⚡ Quick Start (5 Minutes)

Your website now uses a **configuration file** approach, making it super easy to update!

### Step 1: Update Your Personal Information

Open `js/config.js` and update the following sections:

#### Personal Info
```javascript
personalInfo: {
  name: "Your Name",              // ← Change this
  title: "Your Job Title",         // ← Change this
  description: "Your description", // ← Change this
  email: "your@email.com",        // ← Change this
  phone: "+1 234 567 890",        // ← Change this
  location: "Your City, Country",  // ← Change this
  
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile",  // ← Change this
    github: "https://github.com/yourprofile",         // ← Change this
    twitter: "",  // Optional
    website: "",  // Optional
  }
}
```

### Step 2: Add Your Photos

Place your images in the `images/` folder:

1. **profile.jpg** - Your professional headshot (400x400px recommended)
2. **project1.jpg** through **project4.jpg** - Your project screenshots (800x600px recommended)

**Note:** Sample placeholder images are already included! Replace them when ready.

### Step 3: Customize Content in config.js

#### About Section
Update your story and statistics:
```javascript
about: {
  paragraphs: [
    "Your first paragraph about yourself",
    "Your second paragraph"
  ],
  stats: [
    { number: 5, label: "Years Experience" },
    { number: 50, label: "Projects Completed" },
    { number: 25, label: "Technologies Mastered" }
  ]
}
```

#### Work Experience
Update with your actual jobs:
```javascript
experience: [
  {
    title: "Your Job Title",
    company: "Company Name",
    duration: "Jan 2020 - Present",
    location: "City or Remote",
    responsibilities: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      // Add more...
    ],
    technologies: ["React", "Node.js", "AWS"]
  },
  // Add more jobs...
]
```

#### Skills
Adjust skill levels (0-100):
```javascript
skills: {
  frontend: [
    { name: "React.js", level: 90 },  // ← Change levels
    { name: "JavaScript/TypeScript", level: 85 },
    // Add or remove skills...
  ],
  // Same for backend, database, devops...
}
```

#### Education
Update your degrees and certifications:
```javascript
education: [
  {
    degree: "Your Degree",
    institution: "University Name",
    year: "2015 - 2017",
    description: "Details about your education",
    icon: "graduation-cap"
  },
  // Add more...
]
```

#### Projects
Showcase your work:
```javascript
projects: [
  {
    title: "Project Name",
    description: "Brief description of the project",
    image: "images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    links: {
      demo: "https://your-demo-url.com",  // Optional
      github: "https://github.com/you/repo"  // Optional
    }
  },
  // Add more projects...
]
```

### Step 4: Test Locally

1. Open `index.html` in your web browser
2. All content should now display your information!
3. Check all sections load correctly
4. Test the contact form
5. Try the mobile view (press F12 → Toggle device toolbar)

### Step 5: Deploy Your Website

Choose one of these easy deployment options:

#### Option A: GitHub Pages (Free & Popular)

```bash
# Navigate to your career-website folder
cd career-website

# Initialize git (if not already done)
git init
git add .
git commit -m "My personal career website"
git branch -M main

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# Enable GitHub Pages:
# Go to: Settings → Pages → Source: main branch → Save
# Your site: https://YOUR_USERNAME.github.io/YOUR_REPO/
```

#### Option B: Netlify (Instant Deploy)

1. Go to https://app.netlify.com/drop
2. Drag and drop your `career-website` folder
3. Done! Your site is live instantly

#### Option C: Vercel

1. Sign up at https://vercel.com
2. Click "New Project"
3. Import from GitHub or upload folder
4. Deploy with one click

## 🎨 Customization Tips

### Change Color Scheme

Edit `css/style.css` (lines 11-17):

```css
:root {
  --primary-color: #2563eb;    /* Main brand color */
  --accent-color: #f59e0b;     /* Accent/highlight color */
  /* Change these to your preferred colors */
}
```

### Add More Projects

In `config.js`, simply add more objects to the `projects` array:

```javascript
projects: [
  // ... existing projects
  {
    title: "New Project",
    description: "Description",
    image: "images/project5.jpg",
    technologies: ["Tech1", "Tech2"],
    links: { demo: "", github: "" }
  }
]
```

### Remove a Section

If you don't need a section (e.g., Education), you can:
1. Hide it with CSS: Add `#education { display: none; }` to `style.css`
2. Or remove the `<section id="education">` from `index.html`

### Connect Contact Form

To make the contact form actually send emails:

1. **Using FormSpree (Easiest)**:
   - Sign up at https://formspree.io/
   - Get your endpoint URL
   - Update in `config.js`:
   ```javascript
   contact: {
     form: {
       endpoint: "https://formspree.io/f/YOUR-FORM-ID"
     }
   }
   ```

2. **Using Your Own Backend**:
   - Update the endpoint in `config.js`
   - Modify the form submission handler in `script.js` (line ~180)

## 📁 File Structure

```
career-website/
├── index.html           # Main HTML (minimal, loads from config)
├── js/
│   ├── config.js       # ← YOUR PERSONAL DETAILS GO HERE
│   └── script.js       # Functionality (populates from config)
├── css/
│   └── style.css       # Styling
├── images/
│   ├── profile.jpg     # Your photo
│   └── project*.jpg    # Project screenshots
├── README.md           # Documentation
└── SETUP.md           # This file
```

## ✨ Advantages of Config-Based Approach

✅ **Easy Updates**: Change one file (`config.js`) to update entire site  
✅ **Reusable**: Share with friends - they just update `config.js`  
✅ **Organized**: All personal data in one place  
✅ **Maintainable**: No need to search through HTML  
✅ **Flexible**: Easy to add/remove items

## 🚀 Pro Tips

### For Your LinkedIn Profile

After deploying, update your LinkedIn:
1. Add website URL to profile header
2. Mention it in your About section
3. Share a post: "Excited to launch my new portfolio website! Check it out at [URL]"

### Content Writing Best Practices

- **Be concise**: Recruiters spend 6-7 seconds initially
- **Use action verbs**: Led, Developed, Implemented, Achieved
- **Quantify results**: "Improved performance by 40%"
- **Show personality**: Let your unique voice come through
- **Update regularly**: Add new projects and skills

### Image Guidelines

- **Profile photo**: Professional attire, good lighting, neutral background
- **Projects**: Show your app's main interface or key features
- **File size**: Keep under 200KB for fast loading (use https://tinypng.com/)
- **Format**: JPG for photos, PNG for screenshots with text

### SEO Optimization

Update in `config.js`:
```javascript
seo: {
  title: "Your Name - Software Engineer | Portfolio",
  description: "Brief description for search engines",
  keywords: "software engineer, web developer, react, node.js",
  author: "Your Name"
}
```

## 📊 What to Track

After deployment, consider adding:
- **Google Analytics**: Track visitors and popular sections
- **Hotjar**: See how users interact with your site
- **LinkedIn Analytics**: Monitor profile clicks from your posts

## 🆘 Common Issues

**Q: Content not showing?**  
A: Make sure `config.js` loads before `script.js` in `index.html`. Check browser console for errors.

**Q: Images not loading?**  
A: Check file names match exactly (case-sensitive on some servers). Ensure images are in the `images/` folder.

**Q: How do I add a 5th project?**  
A: Add another object to the `projects` array in `config.js` and add `project5.jpg` to the images folder.

**Q: Can I add a blog?**  
A: Yes! Either add a new section or link to Medium/Dev.to articles in your projects.

**Q: Mobile menu not working?**  
A: Check browser console for JavaScript errors. Ensure `script.js` is loading properly.

## 📋 Pre-Launch Checklist

- [ ] All personal info updated in `config.js`
- [ ] Profile photo added
- [ ] Project screenshots added
- [ ] All social links tested
- [ ] Contact email verified
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] Spell-check completed
- [ ] All links working
- [ ] LinkedIn profile updated with website URL

## 🎯 What's Next?

After launching:

1. **Share Everywhere**:
   - LinkedIn profile and posts
   - Twitter/X bio
   - GitHub profile README
   - Email signature
   - Resume header

2. **Keep Updated**:
   - Add new projects quarterly
   - Update skills as you learn
   - Refresh work experience
   - Share achievements

3. **Drive Traffic**:
   - Write blog posts
   - Share on social media
   - Contribute to open source
   - Network in tech communities

4. **Monitor Performance**:
   - Add analytics
   - Track visitor stats
   - See which sections get attention
   - Iterate based on feedback

---

## 🌟 Current Configuration

The site is currently configured with:
```javascript
name: "Chola"
email: "rcholaraja@gmail.com"
linkedin: "https://www.linkedin.com/in/chola/"
github: "https://github.com/rcholaraja"
phone: "+91 7795561343"
```

**This is just example data - update with YOUR information in `js/config.js`!**

---

**Ready to launch? Update `config.js` and refresh your browser! 🚀**

Your professional career website will help you:
- ✨ Stand out to recruiters and employers
- 💼 Showcase your work professionally
- 🎯 Control your online presence
- 🤝 Network more effectively
- 📈 Advance your career

Good luck! 🎉
