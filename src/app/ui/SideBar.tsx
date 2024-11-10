import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '@auth0/nextjs-auth0/client';
import { DocData } from "../../config/DocData";


interface SideBarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
  history: DocData[];
}

const SideBar: React.FC<SideBarProps> = ({ isVisible, toggleSidebar, history }) => {
  
  const { user, error, isLoading } = useUser();

  return (
    <div className={`sidebar p-4 ${isVisible ? 'visible' : ''}`}>
        <FontAwesomeIcon icon={faX} onClick={toggleSidebar} className='pb-4' />
        <div className=''>Past Financial Advice</div>
        {
          user ? 
          (
            history.length > 0 ? (
              history.map((item) => (
                <div key={item.id} className="sidebar-item text-sm my-4">
                  {item.fortune}
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-1/2 text-center sidebar-item">
                No history available
              </div>
            )

          ): <div className="flex justify-center items-center h-1/2 text-center sidebar-item">Please login to view history</div>
        }
        
    </div>
  );
};

export default SideBar;