import React from "react";
import CreateUser from "../components/CreateUser";
import Login from "../components/Login";
import { useState } from "react";

function Landing() {
  const [view, setView] = useState(0);

  return (
    <main>
      <header>
        <h1>Welcome to Simple Blog ✏️</h1>
      </header>
      <section>
        {view === 0 ? (
          <>
            <Login />
            <button onClick={() => setView(1)}>Create New Account</button>
          </>
        ) : (
          <>
            <CreateUser />
            <button onClick={() => setView(0)}>Login to Existing Account</button>
          </>
        )}
      </section>
    </main>
  );
}

export default Landing;
