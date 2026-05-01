# Connect to EC2 Instance (SSH)
```bash
ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip
```
Replace:
* `/path/to/your-key.pem` → path to your `.pem` key file
* `ubuntu` → use `ec2-user` for Amazon Linux
* `your-ec2-public-ip` → your instance's public IP

# Blog Project
Simple full-stack blog application:
* **backend:** Node.js + Express + MongoDB API
* **frontend:** React + Vite app

### Prerequisites
* Node.js 20.x (LTS, recommended)
* npm 10.x
* MongoDB connection string

Check versions:
```bash
node -v
npm -v
```

### Install Node.js + npm (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install npm
```

### 1) Backend Configuration
```bash
cd backend
cp .env.example .env
```

### 2) Update Environment Variables (.env)
Using Nano
```bash
cd backend
nano .env
```
Update values:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```
Save & Exit Nano:
* `CTRL + O` → save
* `Enter` → confirm
* `CTRL + X` → exit

Verify .env:
```bash
cat .env
```

### 3) Install Dependencies

**Backend**
```bash
cd backend
npm install
```

**Frontend**
```bash
cd ../frontend
npm install
```

### 4) Run the Project
Open 2 terminals:

**Terminal 1 (Backend)**
```bash
cd backend
npm start
```

**Terminal 2 (Frontend)**
```bash
cd frontend
npm run dev -- --host
```

### 5) Access Frontend
Use your EC2 public IP:
```
http://your-ec2-public-ip:5173
```

### Important: Security Group Configuration
Make sure to allow frontend port:
1. Go to EC2 → Security Groups
2. Add Inbound Rule:
   * **Type:** Custom TCP
   * **Port:** 5173
   * **Source:** `0.0.0.0/0` (or restrict to your IP)
*(Note: Also ensure port 5000 is open if the frontend calls the backend via the EC2 public IP.)*

### Optional: Seed Demo Data
> **Note:** The `seed:demo` script is currently missing from your project. I have included it here in the documentation for when you implement it!

```bash
cd backend
npm run seed:demo
```
Remove demo data:
```bash
npm run seed:demo:destroy
```

### Restart Backend After .env Changes
```bash
cd backend
npm start
```

### Notes
* Ensure backend runs on port 5000
* Never commit `.env` to GitHub
* Keep secrets secure
* No spaces around `=` in `.env`
