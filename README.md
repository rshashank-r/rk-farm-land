# RK FARM LAND Website

This is a Next.js project for the RK FARM LAND website, built with Firebase Studio.

The website serves as an informational and inquiry-based platform for potential customers interested in purchasing and developing farmland.

## Core Features

- **AI-Powered Imagery**: The site uses AI-generated images to showcase the vision for the farmland estates.
- **Content Display**: Informational content on the benefits, process, and promise of RK FARM LAND.
- **Concept Gallery**: A gallery of high-definition renders to visualize the potential of the properties.
- **Contact Form**: A fully functional contact form that submits inquiries to a Firestore database.
- **Location Display**: An embedded Google Map to show the project's approximate location.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Environment Variables

To run the application and connect to Firebase and Google Maps, you will need to create a `.env.local` file in the root of the project and add the following environment variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```
