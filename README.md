# NoteSpace — Full Stack Web App

A scalable web application with authentication and a dashboard, built using **Next.js**, **TypeScript**, **PostgreSQL**, and **Prisma**.

This project demonstrates frontend engineering skills along with backend API integration, authentication, and database handling.

---

## 🚀 Features

### Authentication
- User registration & login
- JWT-based authentication
- Password hashing using bcrypt
- Protected dashboard routes

### Dashboard
- View all personal notes
- Create new notes
- Delete notes
- Logout functionality

### Backend APIs
- `/api/auth` — register & login
- `/api/posts` — CRUD operations on notes (protected)

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

**Backend**
- Next.js API Routes
- JWT Authentication
- Prisma ORM

**Database**
- PostgreSQL

---

## 🧠 Project Structure

```txt
app/
 ├─ api/
 │   ├─ auth/route.ts
 │   ├─ posts/route.ts
 ├─ login/page.tsx
 ├─ register/page.tsx
 ├─ dashboard/page.tsx
prisma/
 ├─ schema.prisma
