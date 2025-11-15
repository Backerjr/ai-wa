# RozmoWA - Premium English Learning Platform

<div align="center">

![RozmoWA Logo](https://via.placeholder.com/400x100/000000/FFFFFF?text=RozmoWA)

**Learn English like a conversation, not a textbook**

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-demo-url.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

[Live Demo](https://your-demo-url.com) • [Documentation](./DEVELOPER_GUIDE.md) • [Report Bug](https://github.com/yourusername/rozmowa/issues)

</div>

---

## 📖 About

RozmoWA is a boutique English learning platform that breaks away from traditional gamified approaches. Inspired by editorial design and powered by AI, it offers a premium, human-centered learning experience.

### ✨ What Makes It Different

- **🎨 Editorial Design** - Looks like a high-end magazine, not a typical learning app
- **🤖 AI-Powered** - Teachers can generate complete lessons and quizzes with AI
- **💭 Philosophy-Driven** - Focus on understanding and connection, not points and streaks
- **👥 Human-First** - Learning presented as a personal journey, not a race

---

## 🎯 Features

### For Students
- ✅ **Beautiful Dashboard** - Editorial-style interface with elegant typography
- ✅ **Interactive Lessons** - Multi-step lessons with reflection and practice
- ✅ **Progress Tracking** - Visualize your learning journey
- ✅ **Achievement System** - Celebrate milestones without pressure
- ✅ **Mobile Optimized** - Seamless experience on all devices

### For Teachers
- ✅ **Student Narratives** - See progress as stories, not just numbers
- ✅ **AI Quiz Generator** - Create comprehensive quizzes in seconds
- ✅ **AI Lesson Builder** - Generate complete lesson plans instantly
- ✅ **Analytics Dashboard** - Track class performance with elegant visualizations

### For Administrators
- ✅ **Annual Report View** - Data presented like a premium business report
- ✅ **User Management** - Handle students, teachers, and content
- ✅ **Analytics & Insights** - Platform-wide metrics and trends

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/rozmowa.git

# Navigate to directory
cd rozmowa

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app running.

---

## 🎨 Design Philosophy

RozmoWA follows three core principles:

1. **Less is More** - Minimal UI with maximum impact
2. **Whitespace is Luxury** - Generous spacing creates premium feel
3. **Typography is Art** - Every word deserves beautiful rendering

### Color Palette
```css
Primary:   #000000 (Black)
Secondary: #FFFFFF (White)
Grays:     #FAFAFA → #52525B (Zinc scale)

Accents:
- Listen:  #3B82F6 (Blue)
- Speak:   #A855F7 (Purple)
- Read:    #EC4899 (Pink)
- Write:   #F59E0B (Amber)
```

---

## 📱 Screenshots

<div align="center">

### Student Dashboard
![Dashboard](https://via.placeholder.com/800x500/FAFAFA/000000?text=Student+Dashboard)

### Lesson Experience
![Lesson](https://via.placeholder.com/800x500/FAFAFA/000000?text=Lesson+View)

### AI Tools
![AI Tools](https://via.placeholder.com/800x500/FAFAFA/000000?text=AI+Quiz+Creator)

</div>

---

## 🛠 Tech Stack

### Frontend
- **React 18+** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

### Backend (Recommended)
- **Node.js + Express** or **Next.js**
- **PostgreSQL** - Database
- **Redis** - Caching
- **Anthropic Claude** - AI features

### Infrastructure
- **Vercel/Netlify** - Hosting
- **AWS S3** - Media storage
- **GitHub Actions** - CI/CD

---

## 📦 Project Structure

```
rozmowa/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   ├── utils/          # Helper functions
│   └── styles/         # Global styles
├── public/             # Static assets
├── docs/               # Documentation
└── tests/              # Test files
```

---

## 🎭 Available Prototypes

This repository includes 12 fully functional prototypes:

1. **Student Dashboard** - Main learning interface
2. **Lesson Experience** - Interactive lesson flow
3. **Teacher Dashboard** - Student management
4. **Admin Panel** - Platform analytics
5. **Mobile Version** - Touch-optimized UI
6. **Landing Page** - Marketing site
7. **Onboarding Flow** - User setup
8. **Component Library** - Design system docs
9. **Profile & Settings** - User management
10. **AI Quiz Creator** - Generate quizzes
11. **AI Lesson Creator** - Generate lessons
12. **Interactive Demo** - Guided tour

See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for detailed documentation.

---

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm test             # Run tests
```

### Environment Variables
```env
VITE_API_URL=http://localhost:3000/api
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

---

## 🚀 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/rozmowa)

### Manual Deployment
```bash
# Build
npm run build

# The dist/ folder is ready to deploy
```

---

## 🗺 Roadmap

### Phase 1 (Current) - Design System ✅
- [x] Complete UI/UX design
- [x] Interactive prototypes
- [x] Component library
- [x] Documentation

### Phase 2 - Core Features 🔄
- [ ] User authentication
- [ ] Lesson content management
- [ ] Progress tracking
- [ ] Payment integration

### Phase 3 - AI Integration 📋
- [ ] Claude API integration
- [ ] Quiz generation
- [ ] Lesson generation
- [ ] Personalized recommendations

### Phase 4 - Advanced Features 📋
- [ ] Live video classes
- [ ] Voice recording
- [ ] Teacher-student messaging
- [ ] Mobile native apps

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Product Design** - [Your Name](https://github.com/yourusername)
- **Development** - [Your Name](https://github.com/yourusername)
- **AI Integration** - Powered by Anthropic Claude

---

## 💬 Support

- 📧 Email: support@rozmowa.com
- 💬 Discord: [Join our community](https://discord.gg/rozmowa)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/rozmowa/issues)
- 📖 Docs: [Full Documentation](./docs)

---

## 🙏 Acknowledgments

- Inspired by editorial design principles from Kinfolk and Monocle
- Typography guidance from Matthew Carter
- AI powered by Anthropic Claude
- Community feedback and support

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/rozmowa?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/rozmowa?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/rozmowa?style=social)

---

<div align="center">

**[⬆ back to top](#rozmowa---premium-english-learning-platform)**

Made with ❤️ by the RozmoWA team

[Website](https://rozmowa.com) • [Twitter](https://twitter.com/rozmowa) • [LinkedIn](https://linkedin.com/company/rozmowa)

</div>
