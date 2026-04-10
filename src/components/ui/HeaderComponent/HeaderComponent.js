import React from 'react';
import { MdSearch, MdNotificationsNone, MdOutlineElectricBolt } from "react-icons/md";
import { useTheme } from '../../../context/ThemeContext';
import useAuth from '../../../hooks/useAuth';

import "./HeaderComponent.css";

const HeaderComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const { auth } = useAuth();

  return (
    <header className="header">
      <div className="search-container">
        <MdSearch size={20} color="var(--color-text-muted)" />
        <input placeholder="Buscar..." />
      </div>

      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
        </button>

        <button className="icon-btn">
          <MdOutlineElectricBolt size={20} />
        </button>
        
        <button className="icon-btn">
          <MdNotificationsNone size={20} />
        </button>

        <div className="header-avatar">
          {auth?.username ? auth.username.substring(0, 2).toUpperCase() : 'TS'}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
