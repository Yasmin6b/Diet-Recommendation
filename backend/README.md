# Flask Backend for React Vite Application

This is the backend service for the React Vite application using Flask and MySQL.

## Setup Instructions

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Unix/MacOS: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Copy `.env.example` to `.env` and update the database credentials:
   ```
   cp .env.example .env
   ```

5. Run the application:
   ```
   python app.py
   ```

The server will start at http://localhost:5000

## API Endpoints

- GET `/api/test` - Test endpoint to verify backend is working
