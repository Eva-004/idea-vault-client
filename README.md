# 💡 IdeaVault – Startup Idea Sharing Platform

🚀 Live Site: https://idea-vault-client-zeta.vercel.app/ 

🛠️ Server Repo: https://github.com/Eva-004/idea-vault-server-side

---

## 📌 Project Overview

**IdeaVault** is a modern web-based platform where users can share startup ideas, explore innovative concepts from others, and engage through comments and discussions.  
The platform focuses on **idea validation, collaboration, and community-driven feedback** to refine startup concepts.

---

## ✨ Key Features

- 🧠 Share and publish startup ideas with detailed information
- 🔍 Explore trending and latest ideas from other users
- 💬 Comment system (add, edit, delete own comments)
- ❤️ User interaction system for engagement
- 🔐 Secure authentication using JWT (Email/Password + Google Login)
- 👤 Profile management with update feature
- 📊 Filter ideas by category and search by title
- 🌙 Dark / Light theme support
- 📱 Fully responsive design (Mobile / Tablet / Desktop)
- ⚡ Protected routes for authenticated users
- 🔔 Toast notifications for all actions

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- React.js
- Tailwind CSS
- HeroUI / ShadCN UI
- React Toastify
- Next Themes

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Google OAuth Integration

---

## 📄 Pages & Routes

### 🌍 Public Routes
- Home Page (Trending Ideas + Banner)
- Login
- Register
- Idea Details (public view optional depending on setup)

### 🔒 Private Routes
- Add Idea
- My Ideas
- My Interactions
- Profile Page
- Idea Details (full interaction access)

---

## 🏠 Home Page Features

- 🎯 Hero Banner (3 slides minimum)
- 🔥 Trending Ideas Section (limit: 6)
- 📌 Featured categories
- 🚀 Call-to-action: Explore Ideas
- 🎨 Modern UI design with clean layout

---

## 🧑‍💻 Authentication System

- Email & Password login
- Google login support
- JWT token-based authentication
- Protected route handling
- Persistent login on page refresh

---

## 🧠 Idea Management

Each idea includes:

- Title
- Short Description
- Detailed Description
- Category
- Tags (optional)
- Image URL
- Budget (optional)
- Target Audience
- Problem Statement
- Proposed Solution

---

## 💬 Comment System

- Add comments on ideas
- Edit own comments
- Delete own comments
- Each comment includes:
  - Username
  - Timestamp
  - Comment text

---

## 🔍 Search & Filter

- Search by idea title (case-insensitive)
- Filter by category
- Optional date range filtering

---

## 🎨 UI/UX Highlights

- Clean and modern UI design
- Consistent spacing & typography
- Responsive grid layout (3-column desktop)
- Smooth navigation experience
- Custom 404 page
- Loading spinner during data fetch
- Toast feedback for all actions

---

## ⚙️ Security Features

- JWT token authentication
- Protected private routes
- Secure API calls
- User-based data access control

---

## 🚀 Deployment

- Frontend: Vercel
- Backend: Render / Railway
- MongoDB Atlas for database

---

## 📌 Installation Guide

```bash
# Clone client
git clone https://github.com/Eva-004/idea-vault-client

# Install dependencies
npm install

# Run project
npm run dev
