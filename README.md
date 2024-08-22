# Zaniatest
Test Code
# React Application with Card Grid

## Getting Started

1. **Install Dependencies:**

   ```bash
   npm install
   npm start
   pip install -r requirements.txt
   cd backend
### Part 2: Backend and Database

**1. Create the Database Table**

Use PostgreSQL or SQLite to create a table. For PostgreSQL:

```sql
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  position INT NOT NULL
);
pip install starlette uvicorn psycopg2

# Full Stack Application

## Overview

This application consists of a React frontend, a Python backend using Starlette, and a PostgreSQL database. The frontend displays a grid of cards, which can be reordered and clicked to view larger images. The backend provides RESTful endpoints to interact with the data.

## Folder Structure

- `frontend/`: React frontend application.
- `backend/`: Python backend API.
- `docker-compose.yml`: Docker Compose file to orchestrate services.

## Setup

### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
Start the server
uvicorn main:app --reload

Build and start services
docker-compose up --build


API endpoints
GET /documents: Fetch all documents.
POST /documents: Add a new document.
