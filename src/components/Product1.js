import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="app-container">
      <button className="open-btn" onClick={openDrawer}>
        Open Drawer
      </button>

      {/* Overlay */}
      {drawerOpen && <div className="overlay" onClick={closeDrawer}></div>}

      {/* Drawer */}
      {drawerOpen && (
        <div className="drawer">
          <h2>Drawer Content</h2>
          <p>Click outside to close the drawer.</p>
          <button onClick={closeDrawer}>Close Drawer</button>
        </div>
      )}
    </div>
  );
}
