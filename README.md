# Uychi AI & IT Hub — Full Stack Application

**Building Central Asia's emerging technology epicenter**

## Project Overview

Uychi AI & IT Hub is a premium digital investment portal and corporate showcase platform designed to attract international tech companies, venture capitalists, startup founders, and strategic technology partners.

### Key Features
- 🌐 Multi-language support (English, Uzbek, Russian)
- 🎨 Premium corporate dark design system
- 🚀 Startup portfolio showcase
- 💼 Investment portal with ROI calculator
- 🤖 AI chat assistant powered by Claude
- 📊 Comprehensive admin dashboard
- 📱 Fully responsive design
- ♿ Accessibility-first approach
- 🔍 SEO optimized with structured data

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Animations:** Framer Motion
- **3D Graphics:** Three.js / react-three-fiber
- **Internationalization:** next-intl
- **Form Handling:** React Hook Form + Zod
- **Icons:** Lucide React
- **SEO:** next-seo, next-sitemap

### Backend
- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL 16
- **Cache:** Redis
- **ORM:** Prisma
- **Auth:** JWT + refresh tokens
- **File Storage:** AWS S3 / Cloudflare R2
- **Email:** SendGrid

### Infrastructure
- **Hosting:** AWS EC2 + RDS
- **CDN:** CloudFront
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry + Uptime Robot
- **Containerization:** Docker

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 16
- Redis
- Docker & Docker Compose (optional)

### Quick Start

```bash
# Clone repository
git clone https://github.com/raxmonjonovdev-spec/Uychi.git
cd Uychi

# Install dependencies
npm install

# Start services
docker-compose up -d

# Start development servers
npm run dev
```

Frontend: http://localhost:3001
Backend: http://localhost:3000
API Docs: http://localhost:3000/api/docs

## Project Structure

```
uychi/
├── frontend/          # Next.js application
├── backend/           # NestJS application
├── docker-compose.yml # Docker services
└── README.md
```

## License

MIT License
