body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  color: white;
  background: radial-gradient(circle at top, #1a1a2e, #000);
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
}

.navbar ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  opacity: 0.7;
}

.navbar a:hover {
  opacity: 1;
}

/* Hero */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
}

.hero h1 {
  font-size: 60px;
}

.hero button {
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
}

/* About */
.about {
  padding: 80px;
}

.glass-card {
  margin-top: 20px;
  padding: 25px;
  border-radius: 20px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.1);
}

/* Skills */
.skills-section {
  padding: 80px;
}

.skills {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.card {
  padding: 30px;
  border-radius: 15px;
  background: rgba(255,255,255,0.05);
  text-align: center;
  transition: 0.3s;
}

/* Glow Effects */
.java:hover {
  box-shadow: 0 0 20px orange;
}
.js:hover {
  box-shadow: 0 0 20px yellow;
}
.html:hover {
  box-shadow: 0 0 20px red;
}
.web:hover {
  box-shadow: 0 0 20px cyan;
}
