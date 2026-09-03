# EliteFit Gym Management System

A production-ready gym management application built with React, TypeScript, Tailwind CSS, Express, and MongoDB.

## Project Structure

- `frontend/` — Vite React frontend
- `backend/` — Express API server
- `docker-compose.yml` — optional local stack setup
- `.gitignore` — generated project ignores

## Features

- Premium landing page with sections for pricing, trainers, classes, testimonials, BMI calculator, blog, FAQ, and contact
- Role-based auth for member, trainer, and admin
- Member dashboard, trainer workspace, and admin analytics screen
- Membership, booking, attendance, payment, workout, diet, gallery, and blog modules
- REST API architecture with MongoDB models and seed data
- Docker-ready configuration and environment samples

## Start backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Start frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Build for production

```bash
cd frontend
npm run build
```

## Seed database

```bash
cd backend
npm run seed
```

## Environment variables

See `.env.example` files in the frontend and backend for required configuration.

## Deployment guide

1. Set production environment variables.
2. Create a MongoDB Atlas cluster or self-hosted MongoDB instance.
3. Build frontend with `npm run build`.
4. Deploy backend to a Node.js host or container.
5. Configure SSL, reverse proxy, and CORS rules.

## Docker

```bash
docker-compose up --build
```

## Notes

This project is scaffolded for a full-stack gym management system and provides working production-ready structure, modular API routes, and a polished UI shell.
