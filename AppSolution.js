```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id?" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Profile({ params }) {
  const id = params.id;
  return (
    <div>
      <h1>Profile</h1>
      {id ? <p>Profile ID: {id}</p> : <p>Default profile</p>}
    </div>
  );
}

export default App; 
```