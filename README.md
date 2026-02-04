# Vithu - A Next.js Web Application

This is a web application built with Next.js, featuring a public-facing website and a dashboard for managing content. The application is designed to be multilingual, with content available in both English and French.

## Features

- **Public Website**: A modern, responsive website with the following pages:
  - Home
  - About Us
  - Services
  - Contact Us

- **Multilingual Support**: Content can be managed and displayed in both English and French.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    https://github.com/nihudson/vitus-portfolio.git
    cd vitus-portfolio

    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables. You will need to provide credentials for:

    - EmailJS

    ```
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



### Services

-   [Cloudinary](https://cloudinary.com/) - Image and video management
-   [EmailJS](https://www.emailjs.com/) - Email service



### Thank you So much