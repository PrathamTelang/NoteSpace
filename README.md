# NoteSpace — Full Stack Web App

A scalable web application with authentication and a dashboard, built using **Next.js**, **TypeScript**, **PostgreSQL**, and **Prisma**.

This project demonstrates frontend engineering skills along with backend API integration, authentication, and database handling.

---

##  Features

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

##  Project Structure

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


# install dependencies
npm install

# run dev server
npm run dev


If this application were to be scaled for production:

1. **Authentication**
   - Move JWT storage to HTTP-only cookies
   - Implement refresh tokens
   - Use role-based access control if needed

2. **Backend**
   - Extract APIs into a dedicated backend service
   - Introduce request validation (Zod)
   - Add rate limiting & logging

3. **Database**
   - Add indexes on frequently queried fields
   - Use connection pooling
   - Apply migrations via CI/CD

4. **Frontend**
   - Introduce global auth state (Context / Zustand)
   - Add loading skeletons & better error handling
   - Server-side rendering for critical pages

5. **Infrastructure**
   - Dockerize the application
   - Deploy using cloud providers (Vercel + managed DB)
   - Use monitoring & error tracking tools