# 🚀 Vendor Tracker

A full-stack **serverless application** built with AWS and Next.js to manage vendors in a simple and scalable way.

---

## 🎯 Purpose

This project was built to learn and practice:

* AWS CDK (Infrastructure as Code)
* Serverless architecture (AWS Lambda, API Gateway)
* DynamoDB integration
* Full-stack development with Next.js
* Building and deploying real-world cloud applications

It simulates a real-world vendor management system where users can create, view, and delete vendors.

---

## 🧱 Tech Stack

### Frontend

* Next.js (React)
* TypeScript
* Tailwind CSS

### Backend

* AWS CDK (TypeScript)
* AWS Lambda
* AWS API Gateway
* Amazon DynamoDB

---

## 🌐 Platform

* Backend hosted on AWS (Lambda, API Gateway, DynamoDB)
* Frontend runs locally (or can be deployed on Vercel)

---

## 📌 Features

* ✅ Add a new vendor
* ✅ View all vendors
* ✅ Delete a vendor
* ⚡ Serverless architecture (no traditional server)

---

## 📂 Project Structure

```bash
vendor-tracker/
├── backend/        # AWS CDK + Lambda functions
│   ├── lambda/
│   ├── lib/
│   └── package.json
│
├── frontend/       # Next.js application
│   ├── app/
│   ├── lib/
│   ├── types/
│   └── .env.local
│
└── README.md
```

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/vendor-tracker.git
cd vendor-tracker
```

---

### 2. Backend Setup (AWS)

```bash
cd backend
npm install
cdk bootstrap
cdk deploy
```

After deployment, you will get an API endpoint like:

```bash
https://xxxxx.execute-api.us-east-1.amazonaws.com/prod/
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open your browser at:

```bash
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a file:

```bash
frontend/.env.local
```

Add your API Gateway URL:

```bash
NEXT_PUBLIC_API_URL=YOUR_API_GATEWAY_URL
```

---

## 📁 Environment Example (safe to share)

```bash
# frontend/.env.example
NEXT_PUBLIC_API_URL=YOUR_API_URL_HERE
```

---

## 🚀 Deployment

### Backend

* Deploy using AWS CDK:

```bash
cdk deploy
```

### Frontend

* Recommended: Deploy on Vercel

---

## ⚠️ Security Notes

* ❌ Do NOT commit `.env.local`
* ❌ Never expose AWS credentials
* ✅ Use IAM roles and environment variables

---

## 🧠 What I Learned

* How to build a serverless backend with AWS
* How API Gateway connects to Lambda
* How to use DynamoDB with AWS SDK v3
* How to structure a full-stack monorepo
* How to handle async API calls in React

---

## 🔮 Future Improvements

* 🔐 Add authentication (AWS Cognito)
* ✏️ Edit/update vendors
* 📄 Pagination (replace full table scan)
* 🎨 Improve UI/UX
* 🌍 Deploy frontend publicly

---

## 👨‍💻 Author

**Jovany Antoine**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and follow for more!

---
