---
trigger: always_on
---

You are a senior full-stack developer.

Build a COMPLETE full-stack Blog Application that is simple, modular, and easy to write in an exam.

---

## 🎯 GOAL

Create a working blog app using:

* Frontend: React (Vite)
* Backend: Node.js + Express
* Database: MongoDB Atlas (cloud database)

The project must run locally, but be deployment-ready.

---

## 📁 PROJECT STRUCTURE

Use EXACTLY this structure:

blog-app/
│
├── frontend/   → React app
│
├── backend/    → Node backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
└── README.md

---

## 🔧 BACKEND REQUIREMENTS

1. Setup Express server

2. Connect MongoDB Atlas using Mongoose

3. Create Blog Schema:

* title (String, required)
* content (String, required)
* author (String, required)
* createdAt (Date, default: now)

4. Create REST APIs:

* GET /api/posts → get all posts
* GET /api/posts/:id → get single post
* POST /api/posts → create post
* DELETE /api/posts/:id → delete post

5. Use:

* express.json()
* cors
* dotenv

6. Keep code modular:

* models → Blog model
* controllers → logic
* routes → API routes
* config → DB connection

---

## 💻 FRONTEND REQUIREMENTS

1. Use React (Vite)

2. Pages:

* Home → list all posts
* CreatePost → form
* ViewPost → single post

3. Components:

* Navbar
* PostCard

4. Functionality:

* Fetch posts from backend (Axios)
* Display posts
* Create post
* Delete post

5. Keep UI SIMPLE:

* Basic CSS only
* No UI frameworks needed

---

## 🔐 ENVIRONMENT VARIABLES

Backend .env file:

* MONGO_URI = MongoDB Atlas connection string
* PORT = 5000

---

## ☁️ MONGODB ATLAS SETUP (IMPORTANT)

Include clear steps:

1. Go to MongoDB Atlas
2. Create free cluster
3. Create database user
4. Allow network access (0.0.0.0/0)
5. Get connection string
6. Paste into .env

---

## 📜 README REQUIREMENTS

Create a professional README.md with:

### 1. Project Overview

### 2. Tech Stack

### 3. Folder Structure

### 4. Local Setup Steps:

* Clone repo
* cd backend → npm install → npm run server
* cd frontend → npm install → npm run dev

### 5. API Endpoints

### 6. Sample JSON:

{
"title": "My Blog",
"content": "This is content",
"author": "Humanshu"
}

### 7. AWS EC2 DEPLOYMENT (ONLY STEPS, NO CODE CHANGES)

Explain:

* Launch EC2 (Ubuntu)
* Install Node.js
* Clone repo
* Setup .env
* Run backend
* Build frontend (npm run build)
* Serve frontend

---

## 🧪 TESTING

Explain how to test using Postman.

---

## 📦 OUTPUT FORMAT

Generate:

1. Backend code (all files)
2. Frontend code (all files)
3. README.md

---

## ⚠️ RULES

* Keep code EASY to understand
* Add comments
* No overengineering
* Ensure it runs without errors

---

## 🎯 FINAL RESULT

User can:

* Open frontend
* Create blog post
* Store in MongoDB Atlas
* View all posts
* Delete posts

---

Start generating step-by-step (backend first, then frontend, then README).
