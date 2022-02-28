import React from 'react';
import SidebarLink from '../sidebarLinkComponent/SidebarLink.component';
import BreakLine from '../../breakLineComponent/BreakLine.component';

import './sidebarLinks.styles.css';
function SidebarLinks(props) {
  const links = [
    { id: 1, path: 'companySettings', name: 'Company Settings' },
    { id: 2, path: 'users', name: 'Users' },
    { id: 3, path: 'permissions', name: 'Permissions' },
    { id: 4, path: 'bonus', name: 'Bonus' },
    { id: 5, path: 'paymentMethod', name: 'Payment Method' },
    { id: 6, path: 'apiIntegration', name: 'Api Integration' },
    { id: 7, path: 'ibSettings', name: 'Ib Settings' },
    { id: 8, path: 'mamSettings', name: 'Mam Settings' },
    { id: 9, path: 'dynamicMargin', name: 'Dynamic Margin' },
    { id: 10, path: 'synchronize', name: 'Synchronize' },
    { id: 11, path: 'questionnaire', name: 'Questionnaire' },
    { id: 12, path: 'emailTemplates', name: 'Email Templates' },
    { id: 13, path: 'webHooks', name: 'Web Hooks' },
    { id: 14, path: 'notifications', name: 'Notifications' },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <div className='box-sidebarLinks'>
            <SidebarLink
              key={link.id}
              link={`/${link.path}`}
              linkName={`${link.name}`}
            />
          </div>
        );
      })}
    </>
  );
}

export default SidebarLinks;
