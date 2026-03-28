import React from "react";
import {
    IonButton,
    IonGrid,
    IonRow,
    IonList,
    IonLabel,
    isPlatform,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonMenuToggle,
    IonSelect,
    IonSelectOption,
    IonContent,
    IonTitle,
    IonBadge,
    IonItem,
    IonRange,
    IonCheckbox, IonTextarea, IonPage, IonMenuButton, IonSearchbar
} from '@ionic/react';
import './DesignSystemContainer.css';
import { useHistory } from "react-router-dom";

const DesignSystemContainer = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>UI Test</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar></IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonBadge className="badge-label">IonRange</IonBadge>
            <IonToolbar>
                <IonItem className="ion-justify-content-evenly ion-padding-horizontal">
                    <IonRange></IonRange>
                </IonItem>
            </IonToolbar>
            <IonBadge className="badge-label">Input Range</IonBadge>
            <IonToolbar>
                <IonItem className="ion-justify-content-evenly ion-padding-horizontal">
                    <input type="range"/>
                </IonItem>
            </IonToolbar>
            <IonBadge className="badge-label">Text Area</IonBadge>
            <IonToolbar>
                <IonTextarea autoGrow={true} rows={"1"} placeholder="Type something here"></IonTextarea>
            </IonToolbar>
            <IonBadge className="badge-label">ngx-slider</IonBadge>
            <IonToolbar>
                <IonItem className="ion-justify-content-evenly ion-padding-horizontal">
                   {/* <ngx-slider
                    [(value)]="value" [options]="options"></ngx-slider>*/}
                </IonItem>
            </IonToolbar>
            <IonBadge className="badge-label">Select</IonBadge>
            <IonItem className="ion-justify-content-evenly ion-padding-horizontal">
                <IonLabel>Program</IonLabel>
                <IonSelect placeholder="Action Sheet" hidden id={"addSelect"} interface="action-sheet" interfaceOptions="{header: 'Program'}">
                    <IonSelectOption>Option 1</IonSelectOption>
                    <IonSelectOption>Option 2</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem className="ion-justify-content-evenly ion-padding-horizontal">
                <IonLabel>Program</IonLabel>
                <IonSelect placeholder="Alert" hidden id={"addSelect"} interface="alert" interfaceOptions="{header: 'Program'}">
                    <IonSelectOption>Option 1</IonSelectOption>
                    <IonSelectOption>Option 2</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem className="ion-justify-content-evenly ion-padding-horizontal">
                <IonLabel>Program</IonLabel>
                <IonSelect placeholder="Popover" hidden id={"addSelect"} interface="popover" interfaceOptions="{header: 'Program'}">
                    <IonSelectOption>Option 1</IonSelectOption>
                    <IonSelectOption>Option 2</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonBadge>Checkbox</IonBadge>
            <IonItem lines={"none"}>
                <IonLabel>Name</IonLabel>
                <IonCheckbox></IonCheckbox>
            </IonItem>
</IonPage>

)
    ;
};

export default DesignSystemContainer;
