import {
    IonPage,
    IonContent,
    IonButton,
    IonButtons,
    IonGrid,
    IonHeader,
    IonLabel,
    IonList,
    IonMenuButton,
    IonRow, IonTitle,
    IonToolbar
} from "@ionic/react";
import React from "react";

import './LobbyContainer.css';

const LobbyContainer: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Lobby</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div className="full-height">
                    <IonGrid className="full-height">
                        <IonRow className="full-height ion-justify-content-center ion-align-items-center">
                            <IonList class="ion-padding">
                                <IonRow class="ion-justify-content-center ion-margin">
                                    <IonLabel>Welcome to the Jitsi-Meet Sample App</IonLabel>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonButton fill="clear" routerLink="/Video">Join Video Session</IonButton>
                                </IonRow>
                                {/*<IonRow class="ion-justify-content-center">
                                    <IonButton fill="clear">Go to Home</IonButton>
                                </IonRow>*/}
                            </IonList>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LobbyContainer;
