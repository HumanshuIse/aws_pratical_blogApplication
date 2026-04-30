# Full-stack Blog Application

## 1. Project Overview

A complete, modern full-stack blog application designed to provide a seamless reading and writing experience. It allows users to browse blog posts, view detailed articles, create new content, and manage their existing posts. The project is architected with a decoupled frontend and backend for high scalability and easy deployment.

---

## 2. Features

- Create post
- View posts
- View single post
- Delete post

---

## 3. Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas

---

## 4. Prerequisites

Before setting up the project, ensure your environment meets the following requirements:

- **Node.js:** v18 or v20
- **npm:** Package manager (comes with Node.js)
- **MongoDB Atlas:** Valid connection string for your database

Check your currently installed versions with these commands:
```bash
node -v
npm -v
```

---

## 5. Connect to EC2 Instance (SSH)

To deploy the application, SSH into your AWS EC2 instance. Use the following command format:

```bash
ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip
```

**Explanation:**
- `/path/to/your-key.pem`: The absolute path to your downloaded AWS private key.
- `ubuntu`: The default username for Ubuntu AMIs (use `ec2-user` if running Amazon Linux).
- `your-ec2-public-ip`: The IPv4 Public IP address of your EC2 instance.

---

## 6. Install Node.js (Ubuntu)

Run the following commands on your EC2 instance to install Node.js and npm:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install npm
```

---

## 7. Backend Setup

Configure the environment variables for your backend server.

### 1) Backend Configuration
```bash
cd backend
cp .env.example .env
```

### 2) Update Environment Variables (.env)
Using Nano:
```bash
nano .env
```

Update values:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

**Save & Exit Nano:**
1. `CTRL + O` → save
2. `Enter` → confirm
3. `CTRL + X` → exit

---

## 8. Install Dependencies

You must install dependencies for both the frontend and backend.

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

---

## 9. Run the Application

To run both servers simultaneously, open two separate terminal windows (or SSH sessions).

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev -- --host
```
*(Note: `--host` exposes the Vite development server so it can be accessed publicly via the EC2 IP.)*

---

## 10. Access Application

Open your web browser and navigate to:

```text
http://your-ec2-public-ip:5173
```

---

## 11. Security Group Configuration

For your application to be reachable from the internet, you must configure your AWS EC2 Security Group:

1. Go to your **EC2 Dashboard** > **Security Groups**.
2. Select the security group attached to your instance.
3. Click **Edit inbound rules** and add the following rule:
   - **Type:** Custom TCP
   - **Port:** `5173`
   - **Source:** `0.0.0.0/0` (Anywhere)
4. Save the rules.

---

## 12. API Endpoints

The backend Express server exposes the following REST API routes:

- `GET /api/posts` - Retrieve all blog posts
- `GET /api/posts/:id` - Retrieve a single blog post by its ID
- `POST /api/posts` - Create a new blog post
- `DELETE /api/posts/:id` - Delete a blog post by its ID

---

## 13. Sample Request JSON

When creating a post via `POST /api/posts`, use the following payload structure:

```json
{
  "title": "My Blog",
  "content": "This is content",
  "author": "Humanshu"
}
```

---

## 14. Important Notes

- **Never commit `.env`**: Always ensure your `.env` file is listed in `.gitignore` to prevent leaking secrets to version control.
- **Keep secrets safe**: Protect your MongoDB connection string and JWT secrets.
- **Ensure backend runs on port 5000**: The frontend Axios requests are hardcoded to hit `http://localhost:5000`.
- **No spaces around '=' in `.env`**: Environment variables must be formatted exactly as `KEY=VALUE`.
