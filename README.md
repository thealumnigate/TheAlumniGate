# Alumni Gate

A comprehensive campus placement management portal that streamlines the recruitment process between students, administrators, and recruiting companies.

## Project Overview

Alumni Gate addresses the challenges faced by educational institutions in managing campus placements. It provides a centralized platform where students can discover job opportunities, track their applications, and manage their profiles, while administrators can efficiently handle company registrations, student eligibility, and placement results.

### Target Users

- **Students**: Browse companies, check eligibility, apply for positions, and track application status
- **Administrators**: Manage student data, add companies, evaluate applications, and oversee the placement process
- **Placement Cells**: Monitor overall placement statistics and manage recruitment workflows

## Key Features

### Student Portal
- JWT-based secure authentication with password reset functionality
- Profile management with resume upload (Cloudinary integration)
- Company browsing with eligibility-based filtering
- Job application submission with unique application tracking
- Real-time application status monitoring
- Preference management for job notifications

### Admin Dashboard
- Separate admin authentication with role-based access
- Student profile management and verification
- Company CRUD operations with eligibility criteria configuration
- Application evaluation and result management
- Bulk status updates for placement results

### Security
- Protected routes with JWT verification
- Password hashing using bcrypt
- Role-based authorization (Student vs Admin)
- Token expiration and refresh handling

## Tech Stack

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **HTTP Client**: Axios with interceptors
- **Routing**: React Router v6
- **Animations**: Framer Motion

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Architecture**: MVC with Controllers
- **Authentication**: JWT with bcrypt

### Database
- **Database**: MongoDB
- **ODM**: Mongoose

### Cloud Services
- **File Storage**: Cloudinary (resume uploads)
- **Email**: Nodemailer (password reset)

## System Architecture

```
┌─────────────────┐     HTTP/REST      ┌─────────────────┐
│                 │ ←───────────────→  │                 │
│  React Frontend │                    │  Express API    │
│  (Vite + Axios) │                    │  (Controllers)  │
│                 │                    │                 │
└─────────────────┘                    └────────┬────────┘
                                                │
                                                ▼
                                       ┌─────────────────┐
                                       │    MongoDB      │
                                       │   (Mongoose)    │
                                       └─────────────────┘
```

### Authentication Flow
1. User submits credentials
2. Backend validates and issues JWT token (7-day expiry)
3. Token stored in localStorage
4. Subsequent requests include token in Authorization header
5. Protected routes verify token via middleware

### Role Separation
- `/api/*` - Student routes (require student JWT)
- `/api/admin/*` - Admin routes (require admin JWT with role verification)

## Folder Structure

```
TheAlumniGate/
├── Backend/
│   ├── app.js                    # Express server entry point
│   ├── src/
│   │   ├── controllers/          # Route handlers (MVC)
│   │   │   ├── admin/            # Admin-specific controllers
│   │   │   └── *.controller.js   # Student controllers
│   │   ├── models/               # Mongoose schemas
│   │   ├── routes/               # API route definitions
│   │   │   └── admin/            # Admin routes
│   │   ├── middlewares/          # Auth & error handling
│   │   └── utils/                # Helper functions
│   └── middlewares/              # Token verification
│
└── Frontend/
    └── src/
        ├── components/           # Reusable UI components
        ├── pages/                # Page components
        ├── AdminPages/           # Admin dashboard pages
        ├── AdminComponents/      # Admin-specific components
        ├── context/              # React Context providers
        ├── hooks/                # Custom React hooks
        └── services/             # API client configuration
```

## Environment Setup

### Prerequisites
- Node.js v18 or higher
- MongoDB instance (local or Atlas)
- Cloudinary account (for file uploads)

### Environment Variables

**Backend (.env)**
```
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email_for_notifications
EMAIL_PASS=your_email_app_password
```

**Frontend (.env)**
```
VITE_API_BASE_URL=http://localhost:8080
```

### Running Locally

**Backend**
```bash
cd Backend
npm install
nodemon app.js
```

**Frontend**
```bash
cd Frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and connects to the backend at `http://localhost:8080`.

## Security Practices

| Practice | Implementation |
|----------|----------------|
| Password Storage | bcrypt hashing with salt rounds |
| Authentication | JWT tokens with 7-day expiration |
| Authorization | Role-based middleware verification |
| API Protection | Token validation on all protected routes |
| Error Handling | Centralized error middleware with sanitized responses |
| Input Validation | Request body validation before processing |

## Future Enhancements

- **Recruiter Portal**: Dedicated interface for company HR representatives
- **Notification System**: Email and in-app notifications for application updates
- **Analytics Dashboard**: Placement statistics and trend analysis
- **Interview Scheduling**: Integrated calendar for interview management
- **Mobile Application**: React Native companion app
- **Bulk Operations**: CSV import/export for student and company data

## License

This project is developed for educational and institutional use.
