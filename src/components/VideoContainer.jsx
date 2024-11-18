import React from "react";
import { IonButton, IonGrid, IonRow, IonList, IonLabel, isPlatform } from '@ionic/react';
import {Jitsi} from "capacitor-jitsi-meet";
import { useHistory } from "react-router-dom";

const VideoContainer = () => {
    const jitsiContainerId = "jitsi-container-id";
    const [jitsi, setJitsi] = React.useState({});
    const history = useHistory();

    const loadJitsiScript = () => {
        let resolveLoadJitsiScriptPromise = null;

        const loadJitsiScriptPromise = new Promise(resolve => {
            resolveLoadJitsiScriptPromise = resolve;
        });

        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.async = true;
        script.onload = () => resolveLoadJitsiScriptPromise(true);
        document.body.appendChild(script);

        return loadJitsiScriptPromise;
    };

    const initialiseJitsi = async () => {
        if (!window.JitsiMeetExternalAPI) {
            await loadJitsiScript();
        }

        if (isPlatform('cordova')) { // native device, open jitsi capacitor plugin
            console.log("starting Jitsi")
            await Jitsi.joinConference({
                roomName: 'testing-1235524',
                url: 'https://meet.jit.si',
                token: '',
                channelLastN: '10',
                displayName: 'Tom Chen',
                email: '',
                avatarURL: '',
                startWithAudioMuted: false,
                startWithVideoMuted: false,
                chatEnabled: false,
                inviteEnabled: false,
                callIntegrationEnabled: true
            });
        } else {
            const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", {
                parentNode: document.getElementById(jitsiContainerId)
            });
            setJitsi(_jitsi);
        }
    };

    const onJitsiLoaded = async (params) => {
        console.log('Jitsi: loaded Jitsi');
    }

    const onJitsiUnloaded = async () => {
        console.log("Jitsi: unloaded Jitsi")
        if (isPlatform('cordova')) {
            window.removeEventListener('onConferenceLeft', onJitsiUnloaded);
        }
        history.push("/Lobby");
    }

    const onChatMessageReceived = async (data) => {
        console.log("message", JSON.stringify(data))
    }

    const onParticipantsInfoRetrieved = async (data) => {
        console.log("participant info", JSON.stringify(data));
    }

    React.useEffect(() => {
        initialiseJitsi();

        window.addEventListener('onConferenceJoined', onJitsiLoaded);
        window.addEventListener('onConferenceLeft', onJitsiUnloaded);
        window.addEventListener('onChatMessageReceived', onChatMessageReceived);
        window.addEventListener("onParticipantsInfoRetrieved", onParticipantsInfoRetrieved);
        return () => {
            jitsi?.dispose?.();
            window.removeEventListener('onConferenceJoined', onJitsiLoaded);
            window.removeEventListener('onConferenceLeft', onJitsiUnloaded);
            window.removeEventListener('onChatMessageReceived', onChatMessageReceived);
            window.removeEventListener("onParticipantsInfoRetrieved", onParticipantsInfoRetrieved);
        }
    }, []);

    if (isPlatform('cordova')) { // native device, open jitsi capacitor plugin
        return <div className="full-height">
            <IonGrid className="full-height">
                <IonRow className="full-height ion-justify-content-center ion-align-items-center">
                    <IonList class="ion-padding">
                        <IonRow class="ion-justify-content-center ion-margin">
                            <IonLabel>Your Have Left the Video Session</IonLabel>
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            <IonButton fill="clear" onClick={initialiseJitsi}>Rejoin Video Session</IonButton>
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            <IonButton fill="clear" routerLink="/Lobby">Go to Home</IonButton>
                        </IonRow>
                    </IonList>
                </IonRow>
            </IonGrid>
        </div>
    } else {
        return <div id={jitsiContainerId} style={{ height: 720, width: "100%" }} />;
    }
};

export default VideoContainer;
