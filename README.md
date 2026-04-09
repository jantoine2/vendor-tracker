# 🚀 Vendor Tracker

A full-stack serverless web application built with **Next.js**, **AWS CDK**, and **Amazon Cognito**.
This project demonstrates how to design, build, and deploy a modern cloud-native application using AWS services.

---

## 🌍 Live Demo

👉 https://d3qpvq1bmz34n3.cloudfront.net/

---

## 🧠 Project Overview

Vendor Tracker is a simple CRUD application that allows authenticated users to:

* ➕ Add new vendors
* 📋 View all vendors
* ❌ Delete vendors

All data is securely stored in DynamoDB and protected with authentication using Amazon Cognito.

---

## 🏗️ Architecture

This project follows a **serverless architecture**:

* **Frontend**: Next.js (React)
* **Authentication**: Amazon Cognito (JWT-based auth)
* **API Layer**: API Gateway
* **Backend Logic**: AWS Lambda (Node.js)
* **Database**: DynamoDB
* **Storage**: Amazon S3 (static files)
* **CDN**: CloudFront (global distribution)
* **Infrastructure**: AWS CDK (TypeScript)

---

## ⚙️ How It Works

1. The user accesses the app via a CloudFront URL
2. The frontend (hosted on S3) loads in the browser
3. The user signs in via Cognito (Amplify handles auth)
4. The frontend sends requests to API Gateway
5. API Gateway validates the JWT token
6. Lambda functions process the request
7. Data is stored/retrieved from DynamoDB

---

## 📁 Project Structure

```
vendor-tracker/
├── backend/
│   ├── lambda/
│   │   ├── createVendor.ts
│   │   ├── getVendors.ts
│   │   └── deleteVendor.ts
│   ├── lib/
│   │   └── backend-stack.ts
│   └── package.json
│
└── frontend/
    ├── app/
    ├── lib/
    ├── types/
    ├── .env.local
    └── next.config.js
```

---

## 🔐 Environment Variables

Create a file:

```
frontend/.env.local
```

Add:

```
NEXT_PUBLIC_API_URL=your-api-gateway-url
NEXT_PUBLIC_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_USER_POOL_CLIENT_ID=your-client-id
```

⚠️ Do NOT commit this file to GitHub.

---

## 💻 Run Locally

### 1. Clone the repository

```
git clone https://github.com/your-username/vendor-tracker.git
cd vendor-tracker
```

---

### 2. Setup Frontend

```
cd frontend
npm install
npm run dev
```

App will run on:

```
http://localhost:3000
```

---

### 3. Setup Backend

Make sure AWS CLI is configured:

```
aws configure
```

Then:

```
cd backend
npm install
cdk bootstrap
cdk deploy
```

---

## 🚀 Deployment

### Step 1: Build frontend

```
cd frontend
npm run build
```

---

### Step 2: Deploy infrastructure

```
cd ../backend
cdk deploy
```

---

After deployment, AWS will output:

```
CloudFrontURL = https://xxxxx.cloudfront.net
```

👉 Open this URL to access your live app.

---

## 🔒 Authentication

* Users sign up and log in via Amazon Cognito
* Cognito issues a JWT token
* API Gateway validates the token on every request
* Unauthorized users cannot access the API

---

## 🧪 Troubleshooting

### ❌ 401 Unauthorized

* Check if Authorization header is present
* Verify Amplify configuration
* Ensure user is logged in

---

### ❌ 502 Bad Gateway

* Check CloudWatch logs
* Verify Lambda environment variables

---

### ❌ Frontend not updating

* CloudFront cache issue → redeploy with invalidation

---

## 🧠 What I Learned

* Building serverless APIs with AWS Lambda
* Managing infrastructure with AWS CDK
* Implementing authentication with Cognito
* Deploying frontend apps with S3 and CloudFront
* Connecting frontend and backend securely

---

## 📌 Future Improvements

* ✏️ Update vendor functionality
* 🔍 Search & filtering
* 📊 Dashboard analytics
* 🌍 Custom domain (Route 53)
* ⚡ CI/CD pipeline (GitHub Actions)

---

## 🧑‍💻 Author

**Jovany Antoine**

---

## 📄 License

This project is open-source and available under the MIT License.
