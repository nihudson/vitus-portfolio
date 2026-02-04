# Vithu - A Next.js Web Application

This is a web application built with Next.js, featuring a public-facing website and a dashboard for managing content. The application is designed to be multilingual, with content available in both English and French.

## Features

- **Public Website**: A modern, responsive website with the following pages:
  - Home
  - About Us
  - Services
  - Contact Us
- **Dashboard**: A secure area for administrators to manage the content of the website.
- **Multilingual Support**: Content can be managed and displayed in both English and French.
- **API**: A set of API endpoints to manage the application's data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    https://github.com/sardarit-bd/vithu.git
    cd vithu
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables. You will need to provide credentials for:
    - MongoDB
    - Cloudinary
    - EmailJS

    ```
    MONGODB_URI=your_mongodb_connection_string
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    EMAILJS_SERVICE_ID=your_emailjs_service_id
    EMAILJS_TEMPLATE_ID=your_emailjs_template_id
    EMAILJS_USER_ID=your_emailjs_user_id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

To create a production-ready build, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm run start
```

## Project Structure

The project follows the standard Next.js `app` directory structure.

```
vithu/
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── (dashbaord)/ # Dashboard layout and pages
│   │   ├── (public site)/ # Public website layout and pages
│   │   ├── api/           # API routes
│   │   ├── globals.css    # Global styles
│   │   └── layout.js      # Root layout
│   ├── component/       # React components
│   ├── config/          # Configuration files (db, cloudinary)
│   ├── content/         # JSON files for multilingual content
│   ├── stores/          # Zustand state management stores
│   └── utiliy/          # Utility functions
├── .env.local           # Environment variables (create this file)
├── next.config.mjs      # Next.js configuration
└── package.json         # Project dependencies and scripts
```

## API Endpoints

The API routes are located in `src/app/api`.

-   `POST /api/auth/login`: Authenticates a user.
-   `POST /api/auth/signin`: Registers a new user.
-   `GET, POST /api/about`: Manages content for the About page.
-   `GET, POST /api/footer`: Manages footer links and content.
-   `GET, PUT, DELETE /api/footer/[id]`: Manages a specific footer item.
-   `GET, POST /api/services/offer`: Manages service offers.
-   `GET, POST /api/services/pages`: Manages content for service pages.

## Technologies Used

### Frontend

-   [Next.js](https://nextjs.org/) - React framework
-   [React](https://reactjs.org/) - UI library
-   [Tailwind CSS](https://tailwindcss.com/) - CSS framework
-   [Zustand](https://zustand-demo.pmnd.rs/) - State management
-   [Framer Motion](https://www.framer.com/motion/) - Animations
-   [Lucide React](https://lucide.dev/) - Icons
-   [React Icons](https://react-icons.github.io/react-icons/) - Icons
-   [React Hot Toast](https://react-hot-toast.com/) - Notifications
-   [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) - Notifications

### Backend

-   [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
-   [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
-   [MongoDB](https://www.mongodb.com/) - NoSQL database

### Services

-   [Cloudinary](https://cloudinary.com/) - Image and video management
-   [EmailJS](https://www.emailjs.com/) - Email service
