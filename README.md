# 🚀 FASTAI SaaS

[![PERN Stack](https://img.shields.io/badge/Stack-PERN-blue)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

FASTAI is a fully functional AI SaaS Application built using the **PERN stack** (PostgreSQL, Express, React, Node.js).  
It allows users to access a suite of AI-powered tools with **subscription-based billing**.

---

## 📌 Key Features

### User & Subscription Management
- 🔐 **User Authentication**: Secure sign-up, sign-in, and profile management using [Clerk](https://clerk.com/)
- 💳 **Subscription Billing**: Premium subscriptions to unlock advanced AI features
- 🗄️ **Database**: Serverless PostgreSQL database powered by [Neon](https://neon.tech/)

### AI Features
- 📝 **Article Generator**: Generate articles by providing a title and length
- 🏷️ **Blog Title Generator**: Generate blog titles using a keyword and category
- 🖼️ **Image Generator**: Generate images from AI prompts
- 🖌️ **Background Remover**: Upload an image and get a transparent background
- ❌ **Image Object Remover**: Remove specific objects from any image by describing them
- 📄 **Resume Analyzer**: Upload a resume to get a complete AI-based analysis

---

## 📂 Project Structure




---

## ⚙️ Installation

### Prerequisites
- Node.js ≥ 18  
- PostgreSQL (Neon or local)  
- npm or yarn  

### Setup

```bash
# Clone the repository
git clone https://github.com/yadavaman05/FASTAI.git
cd FASTAI

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install


Create a .env file inside the server/ folder with the following variables:

DATABASE_URL=<your_postgres_url>
CLERK_FRONTEND_API=<your_clerk_frontend_api>
CLERK_API_KEY=<your_clerk_api_key>
OPENAI_API_KEY=<your_openai_api_key>
STRIPE_SECRET_KEY=<your_stripe_key>
PORT=5000


 Run Backend Server
cd ../server
npm run dev


The backend server will start on http://localhost:5000.

 Run Frontend
cd ../client
npm start


The frontend will start on http://localhost:3000 and automatically connect to your backend.
