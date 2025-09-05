import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch profile
    fetch("http://localhost:4000/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));

    // Fetch skills
    fetch("http://localhost:4000/skills/top")
      .then((res) => res.json())
      .then((data) => setSkills(data));

    // Fetch projects
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div style={{ padding: "20px", color: "white", background: "#1e1e1e", minHeight: "100vh" }}>
      <h1>My Profile</h1>
      {profile && (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Education:</strong> {profile.education}</p>
          <p><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></p>
          <p><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a></p>
          <p><strong>Portfolio:</strong> <a href={profile.portfolio} target="_blank" rel="noreferrer">{profile.portfolio}</a></p>
        </div>
      )}

      <h2>Top Skills</h2>
      <ul>
        {skills.map((s) => (
          <li key={s.id}>{s.skill_name} (Level {s.level})</li>
        ))}
      </ul>

      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> - {p.description} <br />
            <a href={p.link} target="_blank" rel="noreferrer">{p.link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
