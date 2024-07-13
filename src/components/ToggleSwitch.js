import React from 'react';

function ToggleSwitch({ darkMode, setDarkMode }) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="form-check-label">
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </label>
    </div>
  );
}

export default ToggleSwitch;
