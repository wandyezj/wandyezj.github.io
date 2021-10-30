
function getControls() {

    const buttonConnect = document.getElementById("button_connect");
    const buttonSend = document.getElementById("button_send");
    const textareaSend = document.getElementById("textarea_send");

    return {
        buttonConnect,
        buttonSend,
        textareaSend,
    }
}

function start() {
    const {buttonConnect, buttonSend} = getControls();
    buttonConnect.addEventListener('click', connect);
    buttonSend.addEventListener('click', send);
}


let connection;

// one offers and one accepts

async function connect() {


    connection = new RTCPeerConnection();

    // ice candidate discovered
    connection.addEventListener('icecandidate', async (event) => {
        const {target, candidate} = event;

        if (candidate) {
            const ice = new RTCIceCandidate(candidate);
 
        }

    });

    // how does this happen?
    connection.addEventListener('iceconnectionstatechange', (event) => {

    });

    const offer = await connection.createOffer();
    console.log(offer.sdp);

    connection.setLocalDescription(offer);

}

/*

offer from A
    - create descriptor
    - set local descriptor - `setLocalDescription`
    - send offer descriptor to other B

answer from B
    - receive descriptor from other A
    - set remote descriptor - `setRemoteDescription`
    - create answer descriptor `createAnswer`
    - send answer descriptor to other A
    - when other A receives answer descriptor from B use it to `setRemoteDescriptor`


Sequence to hook them together

A: create descriptor
A: set local
A -- send offer --> B
B: set remote to offer
B: create answer
A <-- send answer -- B
A: set remote to answer

make sure to catch any errors that occur

note: entire offer and answer sequence must happen over some signaling channel separate from Web RTC
this means peers need an id to know who to connect to.

Technically any chat can be used to send descriptors to each other.


*/

function offer() {

}

function answer() {

}

function send() {

}

