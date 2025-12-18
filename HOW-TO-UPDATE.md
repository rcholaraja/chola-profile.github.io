# How to Update Your Personal Details

## 📝 Simple 3-Step Process

### Step 1: Open the Config File

Navigate to: `career-website/js/config.js`

### Step 2: Update Your Information

Find and update these sections:

#### 🧑 Personal Information (Lines 15-30)
```javascript
personalInfo: {
  name: "Your Full Name",                    // Your name
  title: "Your Job Title",                    // e.g., "Software Engineer"
  description: "Your brief description",      // 1-2 sentences about you
  email: "your.email@example.com",           // Your email
  phone: "+1 234 567 8900",                  // Your phone
  location: "Your City, Country",            // Your location
  
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    twitter: "",  // Optional - leave empty if you don't have
    website: "",  // Optional - your blog or website
  }
}
```

#### 📖 About Section (Lines 45-55)
Update your story and statistics:
```javascript
about: {
  paragraphs: [
    "First paragraph about yourself...",
    "Second paragraph about your career..."
  ],
  stats: [
    { number: 5, label: "Years Experience" },      // Update numbers
    { number: 50, label: "Projects Completed" },
    { number: 25, label: "Technologies Mastered" }
  ]
}
```

#### 💼 Work Experience (Lines 60-90)
Add your actual jobs:
```javascript
experience: [
  {
    title: "Your Job Title",
    company: "Company Name",
    duration: "Jan 2020 - Present",
    location: "City or Remote",
    responsibilities: [
      "Key achievement or responsibility 1",
      "Key achievement or responsibility 2",
      "Key achievement or responsibility 3",
      "Key achievement or responsibility 4"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  },
  // Copy the above block to add more jobs
]
```

#### 🛠️ Skills (Lines 95-135)
Update your skill levels (0-100):
```javascript
skills: {
  frontend: [
    { name: "React.js", level: 90 },     // Change skill name and level
    { name: "JavaScript", level: 85 },
    // Add more skills or remove ones you don't have
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Python", level: 80 },
    // Update based on your skills
  ],
  database: [
    { name: "PostgreSQL", level: 85 },
    // Your database skills
  ],
  devops: [
    { name: "Docker", level: 85 },
    // Your DevOps skills
  ]
}
```

#### 🎓 Education (Lines 140-170)
Update your degrees and certifications:
```javascript
education: [
  {
    degree: "Your Degree Name",
    institution: "University Name",
    year: "2015 - 2017",
    description: "Major, GPA, or other details",
    icon: "graduation-cap"
  },
  // Add more degrees
  
  // For certifications:
  {
    degree: "Professional Certifications",
    certifications: [
      "Certification Name 1",
      "Certification Name 2",
      "Certification Name 3"
    ],
    icon: "certificate"
  }
]
```

#### 🚀 Projects (Lines 175-220)
Showcase your work:
```javascript
projects: [
  {
    title: "Project Name",
    description: "Brief description of what you built and its impact",
    image: "images/project1.jpg",           // Image file in images folder
    technologies: ["Tech1", "Tech2", "Tech3"],
    links: {
      demo: "https://your-live-site.com",  // Optional
      github: "https://github.com/you/repo" // Optional
    }
  },
  // Copy above block for each project
]
```

### Step 3: Save and Test

1. **Save** the `config.js` file
2. **Open** `index.html` in your browser
3. **Refresh** if it was already open
4. **Check** that all your information displays correctly

## 🎨 Optional Customizations

### Change Colors

Edit `css/style.css` - Find these lines (around line 11):

```css
:root {
  --primary-color: #2563eb;    /* Main brand color */
  --accent-color: #f59e0b;     /* Highlight color */
}
```

Popular color combinations:
- **Professional Blue**: `#2563eb` and `#f59e0b`
- **Tech Green**: `#10b981` and `#3b82f6`
- **Creative Purple**: `#8b5cf6` and `#ec4899`
- **Bold Orange**: `#f97316` and `#3b82f6`

### Add More Projects

Just copy an existing project block in the `projects` array:

```javascript
projects: [
  // ... existing projects
  {
    title: "New Project Name",
    description: "Description",
    image: "images/project5.jpg",  // Add this image to images folder
    technologies: ["React", "Node.js"],
    links: { demo: "", github: "" }
  }
]
```

### Add More Skills

Add to any skill category:

```javascript
frontend: [
  // ... existing skills
  { name: "New Skill", level: 75 }
]
```

## 💡 Tips for Good Content

### Writing Your Description
- Keep it concise (2-3 sentences)
- Highlight what makes you unique
- Mention your passion or specialty

### Describing Projects
- Focus on impact and results
- Use numbers when possible ("serving 10K users")
- Explain the problem you solved
- Keep descriptions under 2 sentences

### Listing Responsibilities
- Start with action verbs (Led, Developed, Implemented, Improved)
- Quantify achievements ("Improved performance by 40%")
- Focus on impact, not just tasks
- Keep to 4-5 bullet points per job

### Setting Skill Levels
- **90-100%**: Expert, can mentor others
- **75-89%**: Advanced, comfortable with complex tasks
- **60-74%**: Intermediate, can work independently
- **Below 60%**: Beginner to basic proficiency

## 🖼️ About the Images

**Current Status**: The website comes with placeholder images that look professional.

**To Replace Them**:
1. Go to the `images/` folder
2. Replace these files:
   - `profile.jpg` - Your professional photo (400x400px)
   - `project1.jpg` to `project4.jpg` - Your project screenshots (800x600px)
3. Keep the same filenames or update them in `config.js`

**Image Tips**:
- Keep files under 200KB for fast loading
- Use JPG for photos, PNG for screenshots
- Compress images at https://tinypng.com/

## ✅ Current Configuration

The website is pre-configured with:
- **Name**: Chola
- **Email**: rcholaraja@gmail.com  
- **LinkedIn**: https://www.linkedin.com/in/chola/
- **GitHub**: https://github.com/rcholaraja
- **Phone**: +91 7795561343

**Replace these with YOUR actual information!**

## 🆘 Need Help?

### Content Not Showing?
1. Check browser console (F12) for errors
2. Make sure `config.js` is saved
3. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

### Can't Find Something?
- All personal data is in `js/config.js`
- All styling is in `css/style.css`
- Images go in the `images/` folder

### Want to Add a Section?
See the full README.md for advanced customizations.

---

**That's it! Update `config.js`, refresh your browser, and your portfolio is ready! 🎉**
