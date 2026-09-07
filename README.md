<div align="center">

  <!-- Logo / Header Motif -->
  <h1>💍 BETROTHAL CEREMONY INVITATION 💍</h1>
  <h3>An Interactive, Rich Royal Digital Wedding & Engagement Invitation Web Application</h3>

  <p align="center">
    <b>Crafted for the Royal Betrothal Ceremony of Meet & Nandini</b>
  </p>

  <!-- Badges -->
  <p align="center">
    <a href="https://betrothal-ceremony-invitation.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Live Demo" />
    </a>
    <a href="https://github.com/JoshiRudra-devop/Betrothal-ceremony-invitation">
      <img src="https://img.shields.io/github/stars/JoshiRudra-devop/Betrothal-ceremony-invitation?style=for-the-badge&color=gold" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/JoshiRudra-devop/Betrothal-ceremony-invitation/stargazers">
      <img src="https://img.shields.io/github/forks/JoshiRudra-devop/Betrothal-ceremony-invitation?style=for-the-badge&color=orange" alt="GitHub Forks" />
    </a>
    <br/>
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-13.1-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Developer-Rudra_Joshi-ff69b4?style=for-the-badge&logo=github&logoColor=white" alt="Developer Rudra Joshi" />
  </p>

  <p align="center">
    <a href="#-live-demo"><b>🌐 Live Demo</b></a> •
    <a href="#-key-features"><b>✨ Features</b></a> •
    <a href="#-tech-stack"><b>🛠 Tech Stack</b></a> •
    <a href="#-local-installation-guide"><b>💻 Local Setup</b></a> •
    <a href="#-credits--author"><b>👤 Author & Credits</b></a>
  </p>

  ---
</div>

## 🌐 Live Demo

Experience the interactive royal digital invitation live on Vercel:

👉 **[https://betrothal-ceremony-invitation.vercel.app](https://betrothal-ceremony-invitation.vercel.app)** 👈

*(Note: If your Vercel deployment URL uses a custom domain or project slug, simply update the link in this README file).*

---

## ✨ Key Features

- **💌 Interactive Envelope Unveiling**: Tap to open a wax-sealed royal invitation envelope with smooth Framer Motion & GSAP animations.
- **🎴 Scratch-Card Date Reveal**: Interactive HTML5 canvas scratch surface allowing guests to scratch away gold foil to reveal the auspicious wedding date.
- **🎵 Traditional Indian Ambient Audio**: Toggleable background sitar audio player with smooth fade & visual soundwave indicators.
- **⏳ Real-Time Countdown & Calendar Sync**: Dynamic countdown timer to the ceremony with one-click **Add to Google Calendar / Outlook / iCal**.
- **🏰 Royal Cultural Motifs**: Custom SVG Rangoli, Mandala, Paisley, Palace Arches, and Marigold Garlands designed for an authentic royal touch.
- **🗺️ Interactive Venue & Map Navigation**: Direct integration with Google Maps, venue directions, and contact details.
- **🎉 Festive Flower & Confetti Blast**: Interactive celebration overlays firing flower showers and gold confetti upon interaction.
- **📱 Ultra-Responsive Glassmorphic UI**: High-end mobile-first responsive layout with gold gradients, velvet dark modes, and fluid typography.

---

## 🛠 Tech Stack

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Framework** | ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) | Next-gen React core UI rendering |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white) | Lightning-fast development & bundling |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first responsive styling engine |
| **Animations** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) + GSAP | Complex timeline animations & micro-interactions |
| **Effects** | Canvas Confetti | Confetti & celebratory particle triggers |
| **Icons** | Lucide React | Clean, scalable vector icons |
| **Linter** | Oxlint | High-speed JavaScript/JSX code linting |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Hosted live web deployment |

---

## 💻 Local Installation Guide

Follow these step-by-step instructions to run this project on your local machine.

### 📋 Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v18.0.0 or higher recommended): [Download Node.js](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn / pnpm**
- **Git**: [Download Git](https://git-scm.com/)

---

### 🚀 Step-by-Step Setup

#### 1️⃣ Clone the Repository
Open your terminal or command prompt and clone the repository:
```bash
git clone https://github.com/JoshiRudra-devop/Betrothal-ceremony-invitation.git
```

#### 2️⃣ Navigate to the Project Directory
```bash
cd Betrothal-ceremony-invitation
```

#### 3️⃣ Install Dependencies
Install all required npm packages:
```bash
npm install
```

#### 4️⃣ Run Development Server
Start the local Vite development server:
```bash
npm run dev
```

Once started, open your browser and navigate to:
```text
http://localhost:5173
```
*(or the local port URL displayed in your terminal window)*

---

### 📦 Production Build & Preview

To generate an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
Betrothal-ceremony-invitation/
├── public/                     # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/                 # SVGs and global assets
│   ├── components/             # Reusable UI components
│   │   ├── DecorativeMotifs/   # Custom traditional Indian SVG ornaments (Mandala, Rangoli, etc.)
│   │   ├── AddToCalendarButton.jsx # Calendar integration
│   │   ├── AudioPlayer.jsx     # Background sitar music player
│   │   ├── CelebrationOverlay.jsx  # Confetti celebration layer
│   │   ├── CeremonyDetails.jsx # Event time & location details
│   │   ├── CoupleIntro.jsx     # Bride & Groom profile section
│   │   ├── EnvelopeHero.jsx    # Opening envelope interaction
│   │   ├── EventTimeline.jsx   # Milestone schedule timeline
│   │   ├── FamilyIntro.jsx     # Host family greeting
│   │   ├── LoadingScreen.jsx   # Royal preloader screen
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── ScratchDateCard.jsx # Interactive scratch card component
│   │   └── VenueLocation.jsx   # Google Maps venue integration
│   ├── config/
│   │   └── invitationContent.js# Centralized invitation data configuration
│   ├── App.jsx                 # Main application structure
│   ├── App.css                 # Custom animation styles & utilities
│   ├── index.css               # Tailwind CSS imports & global design tokens
│   └── main.jsx                # Application entry point
├── index.html                  # HTML entry point
├── tailwind.config.js          # Custom colors, fonts & theme configuration
├── vite.config.js              # Vite build setup
└── package.json                # Dependencies & scripts
```

---

## 👤 Credits & Author

<div align="center">

### Designed & Developed with ❤️ by

## 👨‍💻 **Rudra Joshi**
*Full Stack Web Developer & Designer*

[![GitHub](https://img.shields.io/badge/GitHub-JoshiRudra--devop-181717?style=for-the-badge&logo=github)](https://github.com/JoshiRudra-devop)
[![Vercel Live Demo](https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel)](https://betrothal-ceremony-invitation.vercel.app)

---

### 🙏 Special Thanks & Acknowledgments
- **Host Family**: The Joshi Family & Peepalvanshi Family
- **Sacred Blessings**: || श्री शूरापुरा दादाया नमः || & || श्री आशा-puri माताजी नमः ||

</div>

---

<div align="center">
  <sub>© 2026 Rudra Joshi. All rights reserved. Crafted for the Betrothal Ceremony of Meet & Nandini.</sub>
</div>
