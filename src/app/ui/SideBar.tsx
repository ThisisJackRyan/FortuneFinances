import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface SideBarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isVisible, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <ul className="sidebar-menu">
        <FontAwesomeIcon icon={faX} onClick={toggleSidebar} className='p-4' />
        {/* Temp side bar */}
        <li className="sidebar-item">Home</li>
        <li className="sidebar-item">About</li>
        <li className="sidebar-item">Services</li>
        <li className="sidebar-item">Contact</li>
      </ul>
    </div>
  );
};

export default SideBar;