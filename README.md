# Firebase Setup for Next.js BookConnect Project

## Prerequisites

Before proceeding, ensure that you have the following:

- A Google account to access Firebase services.
- Node.js installed on your machine.
- A text editor (e.g., VSCode) to edit environment variables and project files.

## Step 1: Sign Up for Firebase

1. Go to [Firebase](https://firebase.google.com/) and sign in with your Google account.
2. Click on **Get Started** to create your first Firebase project.
3. Click on **Add Project** and enter `book-connect` as the project name.
4. Click **Continue**, disable Google Analytics.
5. Click **Create Project**.
6. Wait for the project to be created, then click **Continue**.

## Step 2: Set Up Firestore in Firebase

1. In your Firebase dashboard, select your newly created `book-connect` project.
2. In the left-hand menu, click **Build** and then select **Firestore Database**.
3. Click **Create Database**, choose **Start in test mode**, and click **Create**.

## Step 3: Create a Firebase Web App

1. In the Firebase console, go to the **Project Overview** (the gear icon in the top-left corner).
2. Click on the **</> Web** icon to create a new Firebase Web App.
3. Enter an app nickname (e.g., `book-connect-app`), and click **Register app**.
4. Firebase will display the Firebase configuration. Copy this configuration as you will need it later.
5. Click **Continue to Console**.

## Step 4: Clone repo & install dependencies

1. Clone this repo and run `npm install` to install dependencies

2. Create a .env file in the root of your project and add the following to the file:
   ```bash
    FIREBASE_API_KEY=your_api_key
    FIREBASE_AUTH_DOMAIN=your_auth_domain
    FIREBASE_PROJECT_ID=your_project_id
    FIREBASE_STORAGE_BUCKET=your_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    FIREBASE_APP_ID=your_app_id
   ```

## Step 5: Get Your Firebase API Keys and Configuration

1. After registering your web app in Firebase, you will see the Firebase SDK configuration displayed on the Firebase Console. Click on **Project Overview**, just below your project name (on the main screen) you will 1 app which is the web app registered in step 3.

2. Click on 1 app icon, then click the settings gear next to the registered app name, scrol down and you will see your SDK config - make sure to select npm

3. Copy your key values **without quotation marks** and replace the values in your .env file with the actual keys

```bash
  FIREBASE_API_KEY=XYZDFOEKEONINPN
  FIREBASE_AUTH_DOMAIN=book-connect-lkjoip9.dfeofke
  FIREBASE_PROJECT_ID=book-connect-lkjoip9
  FIREBASE_STORAGE_BUCKET=book-connect-lkjoip9.kojnpn
  FIREBASE_MESSAGING_SENDER_ID=26661115351514145
  FIREBASE_APP_ID=1:5444:eekohrgjrgoirngu
```

## Step 6: Upload Data to Firestore

To upload the provided products and categories data to Firestore:

1.  Ensure that your Firebase environment variables are set correctly in your .env file.
2.  Run the following command in your terminal:

```bash
node uploadData.js
```

This script will upload your product and category data to Firestore, using padded IDs for products and storing all categories under a single document.

## Step 7: Verify Your Data in Firestore

In the Firebase console, go to Firestore Database and navigate to the books, genres and authors collections.
Check that your products and categories have been uploaded successfully (refresh your browser if it was already opened to Firestore Database).
