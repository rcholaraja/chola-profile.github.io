# Personal Career Website

A professional, modern, and responsive portfolio website with **easy configuration** - no HTML editing required!

## 🚀 Features

- **Configuration-Based** - Update ONE file (`js/config.js`) to customize everything
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Smooth scrolling, hover effects, and dynamic content
- **Performance Optimized** - Fast loading times with lazy loading and optimized assets
- **Contact Form** - Functional contact form with validation
- **SEO Friendly** - Semantic HTML and proper meta tags
- **Reusable** - Share with others - they just update `config.js`

## ⚡ Quick Start

1. **Update Your Info**: Edit `js/config.js` with your personal details
2. **Add Images**: Place your photos in the `images/` folder (or use the included placeholders)
3. **Open**: Open `index.html` in a browser
4. **Deploy**: Host on GitHub Pages, Netlify, or Vercel

**That's it!** No HTML knowledge required.

## 📁 Current Configuration

The website is pre-configured with:
- **Name**: Chola
- **Email**: rcholaraja@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/chola/
- **GitHub**: https://github.com/rcholaraja
- **Phone**: +91 7795561343
- **Sample images**: Placeholder images included

## 📋 What You Can Customize (All in `config.js`)

## 📋 What You Can Customize (All in `config.js`)

✅ **Personal Information** - Name, title, description, contact details  
✅ **Social Links** - LinkedIn, GitHub, Twitter, personal website  
✅ **About Section** - Your story and career statistics  
✅ **Work Experience** - Jobs, responsibilities, technologies  
✅ **Skills** - Proficiency levels in various technologies  
✅ **Education** - Degrees, institutions, certifications  
✅ **Projects** - Portfolio items with descriptions and links  
✅ **Contact Info** - Email, phone, location  
✅ **SEO Settings** - Page title, description, keywords

## 📁 Project Structure

```
career-website/
├── index.html          # Main HTML (loads data from config)
├── css/
│   └── style.css      # All styles
├── js/
│   ├── config.js      # ← YOUR PERSONAL DETAILS (Edit this!)
│   └── script.js      # Functionality (populates from config)
├── images/            # Your photos
│   ├── profile.jpg    # Professional headshot (included)
│   ├── project1.jpg   # Project screenshots (included)
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
├── README.md          # This file
└── SETUP.md          # Quick setup guide
```

## 🎨 Sections Included

1. **Navigation** - Sticky navbar with smooth scroll
2. **Hero Section** - Eye-catching introduction with profile photo
3. **About** - Your story and career statistics
4. **Experience** - Work history with timeline layout
5. **Skills** - Technology proficiency with animated bars
6. **Education** - Academic background and certifications
7. **Projects** - Portfolio showcase with project cards
8. **Contact** - Contact form and information
9. **Footer** - Copyright and social media links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Dynamic content loading and interactivity
- **Font Awesome** - Icon library

## 🎨 Easy Customization

### Method 1: Update config.js (Recommended)

All your personal details are in **one file**: `js/config.js`

```javascript
const CONFIG = {
  personalInfo: {
    name: "Chola",                      // ← Change this
    title: "Software Engineer",          // ← Change this
    email: "rcholaraja@gmail.com",      // ← Change this
    phone: "+91 7795561343",            // ← Change this
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/chola/",
      github: "https://github.com/rcholaraja"
    }
  },
  // ... and everything else!
}
```

### Method 2: Change Colors

Edit `css/style.css` (lines 11-17):

```css
:root {
  --primary-color: #2563eb;    /* Main brand color */
  --secondary-color: #64748b;   /* Secondary color */
  --accent-color: #f59e0b;      /* Accent/highlight color */
}
```

### 9. Contact Form

The contact form currently logs data to console. To make it functional:

**Option 1: Using FormSpree (Easiest)**
1. Sign up at https://formspree.io/
2. Get your form endpoint
3. Update in `js/config.js`:
```javascript
contact: {
  form: {
    endpoint: "https://formspree.io/f/YOUR-FORM-ID"
  }
}
```

**Option 2: Your Own Backend**
- Update the endpoint in `config.js`
- Modify form handler in `script.js`

## 🚀 How to Use

## 🚀 How to Use

### Step 1: Customize Your Information

1. Open `js/config.js`
2. Update all personal details (name, email, social links, etc.)
3. Update work experience, skills, education, and projects
4. Save the file

### Step 2: Add Your Images

1. Replace `images/profile.jpg` with your professional photo
2. Replace `images/project1.jpg` through `project4.jpg` with your project screenshots
3. Or keep the placeholder images for now

### Step 3: Test Locally

1. Open `index.html` in your web browser
2. Verify all content displays correctly
3. Test on mobile (F12 → Toggle device toolbar)
4. Check the contact form

### Step 4: Deploy

**GitHub Pages (Free):**

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Deploy to Netlify

1. Create a Netlify account
2. Drag and drop the `career-website` folder
3. Your site will be live instantly with a custom URL

### Option 4: Deploy to Vercel

1. Create a Vercel account
2. Import the project from GitHub or upload directly
3. Deploy with one click

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ✨ Features to Add (Optional Enhancements)

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Testimonials/Recommendations
- [ ] Animation library (AOS, GSAP)
- [ ] Multi-language support
- [ ] PDF resume download
- [ ] Analytics integration (Google Analytics)
- [ ] Live chat widget
- [ ] Loading animation
- [ ] Progress indicator

## 🎯 SEO Optimization Tips

1. Update the `<title>` tag with your name
2. Add a proper `description` meta tag
3. Add Open Graph tags for social media sharing
4. Create a `sitemap.xml` file
5. Add `robots.txt` file
6. Use descriptive alt text for all images
7. Ensure fast loading times (< 3 seconds)

## 📝 Content Writing Tips

### About Section
- Keep it concise (2-3 paragraphs)
- Highlight your unique value proposition
- Mention years of experience and expertise
- Include your passion and motivation

### Experience Descriptions
- Use action verbs (Led, Developed, Implemented, Improved)
- Quantify achievements with numbers (40% improvement, 1M users)
- Focus on impact and results
- Keep bullet points concise

### Project Descriptions
- Explain the problem solved
- Highlight key technologies
- Mention any notable achievements
- Keep it under 2-3 sentences

## 🔧 Troubleshooting

### Images Not Loading
- Check image paths are correct
- Ensure images are in the `images/` folder
- Verify image file extensions match HTML references

### Form Not Working
- Check browser console for errors
- Ensure all form fields have proper IDs
- Update the form submission handler in `script.js`

### Navbar Not Sticky
- Check CSS for `.navbar` class
- Ensure JavaScript is loaded properly

### Mobile Menu Not Opening
- Verify JavaScript is loaded
- Check browser console for errors
- Ensure the nav-toggle ID matches

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them!

## 📞 Support

If you need help customizing this website, feel free to:
- Open an issue on GitHub
- Contact me through the website
- Check the documentation

## 🌟 Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: System fonts for optimal performance
- Design inspiration: Modern portfolio websites

---

**Made with ❤️ for showcasing your professional journey**

Ready to launch your career website? Follow the customization guide above and make it yours! 🚀
