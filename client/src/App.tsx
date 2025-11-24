import { useState, useEffect } from 'react'
import './App.css'

interface HealthStatus {
  status: string;
  timestamp: string;
}

function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div className="app">
      <header>
        <h1>PDF Comparison System</h1>
      </header>

      <main>
        <section className="status">
          <h2>Server Status</h2>
          {error ? (
            <p className="error">Error: {error}</p>
          ) : health ? (
            <div className="success">
              <p>Status: {health.status}</p>
              <p>Timestamp: {new Date(health.timestamp).toLocaleString()}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>

        <section className="placeholder">
          <h2>PDF Comparison</h2>
          <p>Side-by-side PDF comparison will be implemented here</p>
        </section>
      </main>
    </div>
  )
}

export default App
