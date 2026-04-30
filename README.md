# Full-stack Blog Application

### 1. Project Overview
A simple, modular, and easy-to-understand full-stack blog application. Users can view all blog posts, create new posts, read detailed single posts, and delete them. The application uses a decoupled architecture with a React frontend and a Node.js backend. Data is stored in a MongoDB Atlas cloud database.

### 2. Tech Stack
* **Frontend:** React (Vite)
* **Backend:** Node.js + Express
* **Database:** MongoDB Atlas (Cloud)

### 3. Folder Structure
```text
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
```

### 4. Local Setup Steps:
* **Clone repo:**
  ```bash
  git clone <repository_url>
  cd <repository_folder_name>
  ```
* **Run Backend:**
  ```bash
  cd backend
  npm install
  npm run dev
  ```
  *(Make sure to create a `.env` file in the `backend` folder with `MONGO_URI` and `PORT=5000`)*
* **Run Frontend:**
  ```bash
  cd frontend
  npm install
  npm run dev
  ```

### 5. API Endpoints
* `GET /api/posts` → get all posts
* `GET /api/posts/:id` → get single post
* `POST /api/posts` → create post
* `DELETE /api/posts/:id` → delete post

### 6. Sample JSON:
```json
{
"title": "My Blog",
"content": "This is content",
"author": "Humanshu"
}
```

### 7. AWS EC2 DEPLOYMENT (ONLY STEPS, NO CODE CHANGES)

**1. Launch EC2 (Ubuntu)**
* Log in to the AWS Management Console and go to EC2.
* Launch a new instance using an **Ubuntu** AMI.
* Ensure you configure the Security Group to allow inbound traffic on ports `22` (SSH), `80` (HTTP), `5000` (Backend API), and `5173` or `4173` (Frontend).
* SSH into your instance using your `.pem` key file.

**2. Install Node.js**
* Once logged into the EC2 terminal, install Node.js:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

**3. Clone repo**
* Clone your application code onto the server:
  ```bash
  git clone <your-repository-url>
  cd <repository-folder>
  ```

**4. Setup .env**
* Go into the backend directory and set up environment variables:
  ```bash
  cd backend
  nano .env
  ```
* Add `MONGO_URI` and `PORT=5000`. Save and exit.

**5. Run backend**
* Install dependencies and run the Node.js server (use `pm2` for production or `nohup` so it runs in the background):
  ```bash
  npm install
  npm install -g pm2
  pm2 start server.js --name "backend"
  ```

**6. Build frontend (npm run build)**
* Go to the frontend directory, install dependencies, and build the static files:
  ```bash
  cd ../frontend
  npm install
  npm run build
  ```

**7. Serve frontend**
* You can serve the built frontend using a static server like `serve`:
  ```bash
  npm install -g serve
  serve -s dist -l 5173
  ```
* (Alternatively, run it in the background using pm2: `pm2 start "serve -s dist -l 5173" --name "frontend"`)

---

## 🧪 TESTING

### Testing using Postman

You can test the backend API endpoints locally or on your deployed EC2 instance using Postman.

1. **Get All Posts:**
   - Method: `GET`
   - URL: `http://localhost:5000/api/posts`
   - Click **Send**.

2. **Create a Post:**
   - Method: `POST`
   - URL: `http://localhost:5000/api/posts`
   - Go to the **Body** tab, select **raw**, and choose **JSON** format.
   - Enter the sample JSON:
     ```json
     {
     "title": "My Blog",
     "content": "This is content",
     "author": "Humanshu"
     }
     ```
   - Click **Send**.

3. **Get Single Post:**
   - Method: `GET`
   - URL: `http://localhost:5000/api/posts/<post-id>` (Replace `<post-id>` with an actual ID from step 1).
   - Click **Send**.

4. **Delete a Post:**
   - Method: `DELETE`
   - URL: `http://localhost:5000/api/posts/<post-id>`
   - Click **Send**.
