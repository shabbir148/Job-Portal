# Job Portal UI

A modern, responsive job portal website built with React and Vite, featuring a clean and intuitive user interface for job seekers and employers.
Live Demo: [Live](https://job-portal-sage-phi.vercel.app/) 

## 🎯 Project Overview

This project is a frontend implementation of a job portal website based on the [Dribbble design reference](https://dribbble.com/shots/20254545-Job-Portal-Website). The application provides a seamless experience for users to search for jobs, browse featured listings, and learn about top companies.

## ✨ Features

### Core Features
- **Responsive Header**: Logo, navigation links, and action buttons (Login, Sign up, Post a Job)
- **Hero Section**: Prominent search functionality with job title, location, and company filters
- **Featured Jobs**: Card-based layout displaying job listings with company details
- **How It Works**: Step-by-step process explanation (Create Account → Upload CV → Find Job → Apply)
- **Top Companies**: Showcase of hiring companies with their logos
- **Testimonials**: Others Review
- **Footer**: Comprehensive footer with relevant links


## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/shabbir148/Job-Portal.git
cd job-portal-ui
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
# or
yarn build
```

### 5. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
job-portal-ui/
├── public/
│   ├── favicon.ico
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── CompaniesSection/
│   │   │   └── CompaniesSection.js
│   │   ├── Footer/
│   │   │   └── Footer.js
│   │   ├── Header/
│   │   │   └── Header.js
│   │   ├── Hero/
│   │   │   └── Hero.js
│   │   ├── HowItWorks/
│   │   │   └── HowItWorks.js
│   │   ├── JobSection/
│   │   │   └── JobSection.js
│   │   └── Testimonials/
│   │       └── Testimonials.js
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md

```

## 🎨 Design Implementation

The UI closely follows the provided Dribbble design with attention to:
- **Color Scheme**: Consistent brand colors and proper contrast ratios
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins throughout
- **Component Layout**: Pixel-perfect implementation of design elements
- **Responsive Behavior**: Seamless adaptation across all device sizes

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

Key responsive features:
- Collapsible navigation menu on mobile
- Stacked layout for smaller screens
- Optimized touch targets for mobile interaction
- Carousel implementation for featured jobs on mobile

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## 🌙 Dark Mode

The application includes a dark mode toggle that:
- Persists user preference in localStorage
- Provides smooth transitions between themes
- Maintains proper contrast ratios in both modes
- Includes appropriate color schemes for all components

## 📊 Mock Data

The application uses mock data located in `src/data/mockData.js` containing:
- **Job Listings**: Sample job postings with various companies and positions
- **Company Information**: Company logos, names, and details
- **Categories**: Job categories and industry types
- **Testimonials**: Other revivew


## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deployment scripts to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Git Commit Convention

This project follows conventional commit messages:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions or modifications
- `chore:` - Build process or auxiliary tool changes

## 🐛 Known Issues

- None currently reported

## 📞 Support

If you encounter any issues or have questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce the problem


## 🙏 Acknowledgments

- Design inspiration from [MindInventory UI/UX on Dribbble](https://dribbble.com/shots/20254545-Job-Portal-Website)
- Icons provided by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📈 Performance

The application is optimized for performance with:
- Code splitting and lazy loading
- Optimized images and assets
- Minimal bundle size
- Fast development server with HMR

---

**Live Demo**: [\[Your Deployment URL Here\]](https://job-portal-sage-phi.vercel.app/)
**Repository**: [\[Your GitHub Repository URL Here\]](https://github.com/shabbir148/Job-Portal)

Built with ❤️ using React and Vite
