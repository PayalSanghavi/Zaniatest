# Zaniatest
Test Code
# React Application with Card Grid

## Getting Started

1. **Install Dependencies:**

   ```bash
   npm install
   npm start
   
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


