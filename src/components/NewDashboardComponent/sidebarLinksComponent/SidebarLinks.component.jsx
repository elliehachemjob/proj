import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PaymentIcon from '@mui/icons-material/Payment';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import WebhookIcon from '@mui/icons-material/Webhook';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SidebarLink from '../sidebarLinkComponent/SidebarLink.component';
import './sidebarLinks.styles.css';
import BugReportIcon from '@mui/icons-material/BugReport';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import AlbumIcon from '@mui/icons-material/Album';
import LoginIcon from '@mui/icons-material/Login';


function SidebarLinks(props) {
  const links = [
    {
      id: 1,
      path: '/companySettings',
      name: 'Company Settings',
      icon: <ApartmentIcon />,
    },
    { id: 2, path: '/users', name: 'Users', icon: <GroupIcon /> },
    {
      id: 3,
      path: '/permissions',
      name: 'Permissions',
      icon: <SecurityIcon />,
    },
    { id: 4, path: '/bonus', name: 'Bonus', icon: <AutoFixHighIcon /> },
    {
      id: 5,
      path: '/paymentMethod',
      name: 'Payment Method',
      icon: <PaymentIcon />,
    },
    {
      id: 6,
      path: '/apiIntegration',
      name: 'Api Integration',
      icon: <IntegrationInstructionsIcon />,
    },
    {
      id: 7,
      path: '/ibSettings',
      name: 'Ib Settings',
      icon: <VolunteerActivismIcon />,
    },
    {
      id: 8,
      path: '/mamSettings',
      name: 'Mam Settings',
      icon: <AdminPanelSettingsIcon />,
    },
    {
      id: 9,
      path: '/dynamicMargin',
      name: 'Dynamic Margin',
      icon: <SavedSearchIcon />,
    },
    {
      id: 10,
      path: '/synchronize',
      name: 'Synchronize',
      icon: <CloudSyncIcon />,
    },
    {
      id: 11,
      path: '/questionnaire',
      name: 'Questionnaire',
      icon: <QuestionAnswerIcon />,
    },
    {
      id: 12,
      path: '/emailTemplates',
      name: 'Email Templates',
      icon: <MarkEmailReadIcon />,
    },
    { id: 13, path: '/webHooks', name: 'Web Hooks', icon: <WebhookIcon /> },
    {
      id: 14,
      path: '/notifications',
      name: 'Notifications',
      icon: <NotificationsActiveIcon />,
    },
    {
      id: 15,
      path: '/test',
      name: 'Test Page',
      icon: <BugReportIcon />,
    },
    {
      id: 16,
      path: '/onBoarding',
      name: 'OnBoarding',
      icon: <AirplaneTicketIcon />,
    },
    {
      id: 17,
      path: '/applicationFlowHolder',
      name: 'Application FlowHolder',
      icon: <AccountTreeIcon />,
    },
    {
      id: 18,
      path: '/flowConfigurationHolder',
      name: 'Flow ConfigurationHolder',
      icon: <DisplaySettingsIcon />,
    },
    {
      id: 19,
      path: '/newApplicationFlow',
      name: 'New Application Flow',
      icon: <AccountTreeIcon />,
    },
    {
      id: 20,
      path: '/newApplicationFlowAlone',
      name: 'New Application Flow Alone',
      icon: <AccountTreeIcon />,
    },
    {
      id: 21,
      path: '/youtube',
      name: 'Youtube',
      icon: <OndemandVideoIcon />,
    },
    {
      id: 22,
      path: '/facebook',
      name: 'Facebook',
      icon: <FacebookOutlinedIcon />,
    },
    {
      id: 23,
      path: '/applicationFlowSpecialEdition',
      name: 'Application Flow Special Edition',
      icon: <AppSettingsAltIcon />,
    },
    {
      id: 24,
      path: '/amazon',
      name: 'Amazon',
      icon: <AddBusinessOutlinedIcon />,
    },
    {
      id: 25,
      path: '/spotifyLanding',
      name: 'Spotify Landing',
      icon: <LoginIcon />,
    },
    {
      id: 26,
      path: '/artistSearch',
      name: 'Artist Search',
      icon: <AlbumIcon />,
    },
    {
      id: 27,
      path: '/browseAlbums',
      name: 'Browse Albums',
      icon: <CollectionsIcon />,
    },
 

  ];

  return (
    <>
      {links.map((link) => {
        return (
          <SidebarLink
            key={link.id}
            className='link'
            link={link.path}
            icon={link.icon}
            text={link.name}
          />
        );
      })}
    </>
  );
}

export default SidebarLinks;
