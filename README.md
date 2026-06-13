# 🎬 Netflix Clone — MERN Stack

A full-stack Netflix clone built with the MERN stack (MongoDB, Express, React, Node.js). Browse trending movies and TV shows, watch trailers, search content, and manage your watch history — all powered by the TMDB API.

🌐 **Live Demo:** [netflix-clone-using-mernstack.onrender.com](https://netflix-clone-using-mernstack.onrender.com)

---

## ✨ Features

- 🔐 **Authentication** — Sign up, log in, log out with JWT cookies
- 🎥 **Trending Content** — Browse trending movies and TV shows from TMDB
- 🎞️ **Watch Trailers** — Play YouTube trailers directly in the app
- 🔍 **Search** — Search movies, TV shows, and people
- 📜 **Search History** — View and delete your past searches
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop
- 🌙 **Netflix-style UI** — Dark theme with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| React 19 | UI Framework |
| React Router v7 | Client-side routing |
| Zustand | State management |
| Tailwind CSS v4 | Styling |
| Axios | HTTP requests |
| React Hot Toast | Notifications |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js + Express 5 | Server |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| bcryptjs | Password hashing |
| cookie-parser | Cookie handling |
| TMDB API | Movies & TV data |

---

## 📁 Project Structure

```
netflix/
├── backend/
│   ├── config/
│   │   ├── db.js           # MongoDB connection
│   │   └── envVars.js      # Environment variables
│   ├── controllers/        # Route handlers
│   ├── middlewares/        # Auth middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── services/           # TMDB API service
│   ├── utils/              # JWT token utility
│   └── server.js           # Express server entry point
├── frontend/
│   ├── public/             # Static assets
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       ├── store/          # Zustand state stores
│       └── utils/          # Helper functions
├── .env                    # Environment variables (not committed)
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free)
- TMDB API key (free at [themoviedb.org](https://www.themoviedb.org/settings/api))

### 1. Clone the repository
```bash
git clone https://github.com/krish2006-jain/Netflix-clone-using-mernstack.git
cd Netflix-clone-using-mernstack
```

### 2. Set up environment variables

Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5200
JWT_SECRET=your_secret_key
NODE_ENV=development
TMDB_API_KEY=your_tmdb_bearer_token
```

### 3. Install dependencies & run

**Backend:**
```bash
npm install
npm run dev
```

**Frontend** (in a new terminal):
```bash
cd frontend
npm install
npm run dev
```

- Backend runs on: `http://localhost:5200`
- Frontend runs on: `http://localhost:5173`

---

## 🌐 Deployment (Render)

This project is configured for single-service deployment on [Render](https://render.com) — the backend serves the built React frontend.

| Setting | Value |
|---------|-------|
| **Build Command** | `npm run build` |
| **Start Command** | `npm start` |
| **Environment** | Add all `.env` keys in Render dashboard |

> ⚠️ Make sure to allow all IPs (`0.0.0.0/0`) in MongoDB Atlas Network Access for Render to connect.

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `PORT` | Server port (default: 5200) |
| `JWT_SECRET` | Secret key for JWT signing |
| `NODE_ENV` | `development` or `production` |
| `TMDB_API_KEY` | TMDB Bearer token for API calls |

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/signup` | Register a new user |
| POST | `/api/v1/auth/login` | Log in |
| POST | `/api/v1/auth/logout` | Log out |
| GET | `/api/v1/auth/authCheck` | Check auth status |

### Movies *(protected)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/movie/trending` | Get trending movie |
| GET | `/api/v1/movie/:id/trailers` | Get movie trailers |
| GET | `/api/v1/movie/:id/details` | Get movie details |
| GET | `/api/v1/movie/:id/similar` | Get similar movies |
| GET | `/api/v1/movie/:category` | Get movies by category |

### TV Shows *(protected)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/tv/trending` | Get trending TV show |
| GET | `/api/v1/tv/:id/trailers` | Get TV trailers |
| GET | `/api/v1/tv/:id/details` | Get TV show details |
| GET | `/api/v1/tv/:id/similar` | Get similar TV shows |
| GET | `/api/v1/tv/:category` | Get TV shows by category |

### Search *(protected)*
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/search/movie/:query` | Search movies |
| GET | `/api/v1/search/tv/:query` | Search TV shows |
| GET | `/api/v1/search/person/:query` | Search people |
| GET | `/api/v1/search/history` | Get search history |
| DELETE | `/api/v1/search/history/:id` | Remove from history |

---

## 📸 Screenshots

| Landing Page | Home Screen |
|-------------|-------------|
| Sign in / Sign up | Browse trending content |

---

## 📄 License

This project is for educational purposes only. Netflix brand assets belong to Netflix, Inc. Movie data provided by [TMDB](https://www.themoviedb.org/).

---

<p align="center">Made with ❤️ by <a href="https://github.com/krish2006-jain">Krish Jain</a></p>
