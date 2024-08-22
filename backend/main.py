from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.requests import Request
from starlette.routing import Route
import asyncpg
import json

DATABASE_URL = 'postgresql://user:password@localhost/dbname'

async def database_connect():
    return await asyncpg.connect(dsn=DATABASE_URL)

async def get_documents(request: Request):
    conn = await database_connect()
    rows = await conn.fetch('SELECT * FROM documents ORDER BY position')
    await conn.close()
    return JSONResponse([dict(row) for row in rows])

async def add_document(request: Request):
    data = await request.json()
    conn = await database_connect()
    await conn.execute('''
        INSERT INTO documents(type, title, position) VALUES($1, $2, $3)
    ''', data['type'], data['title'], data['position'])
    await conn.close()
    return JSONResponse({'status': 'success'})

app = Starlette(debug=True, routes=[
    Route('/documents', get_documents, methods=['GET']),
    Route('/documents', add_document, methods=['POST']),
])

