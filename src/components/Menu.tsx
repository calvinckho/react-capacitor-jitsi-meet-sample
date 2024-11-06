import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  callOutline, callSharp,
  heartOutline,
  heartSharp, homeOutline, homeSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Lobby',
    url: '/Lobby',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Video Chat',
    url: '/Video',
    iosIcon: callOutline,
    mdIcon: callSharp
  }
];

const labels = ['Friends'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Capacitor-Jitsi-Meet</IonListHeader>
            <IonNote>Sample App</IonNote>
            {appPages.map((appPage, index) => {
              return (
                  <IonMenuToggle key={index} autoHide={false}>
                    <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                      <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
  );
};

export default Menu;
