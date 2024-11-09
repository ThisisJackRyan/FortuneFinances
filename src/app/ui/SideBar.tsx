import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface SideBarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
  user: any;
}

const SideBar: React.FC<SideBarProps> = ({ isVisible, toggleSidebar, user }) => {
  return (
    <div className={`sidebar p-4 ${isVisible ? 'visible' : ''}`}>
        <FontAwesomeIcon icon={faX} onClick={toggleSidebar} className='p-4' />
        {
          user ? 
          (
            <ul className="sidebar-menu">
              <li className="sidebar-item">Home</li>
              <li className="sidebar-item">About</li>
              <li className="sidebar-item">Services</li>
              <li className="sidebar-item">Contact</li>
            </ul>

          ): <div className="flex justify-center items-center h-1/2 text-center sidebar-item">Please login to view history</div>
        }
        
    </div>
  );
};

export default SideBar;