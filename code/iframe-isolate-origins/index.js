async function start() {
    console.log("start");
    const iframeSource = `
<html>
<body>
<script>
    // Uniquely identify iframes
    const id = Math.floor(Math.random() * 1000000);
    console.log("iframe " + id);

    // Disabled inside of data url
    // localStorage.setItem("id", id);
    // sessionStorage.setItem("id", id);
    // const request = window.indexedDB.open('MyDatabase', 1);

    function handleMessage(event) {
        const data = event.data;
        console.log("iframe "+ id + " got message")
        //const [key, value] = data.split(",");
        //localStorage.setItem(key, value);
        window.parent.postMessage("iframe " + id + " replies " + data, '*');
    }

    window.addEventListener("message", handleMessage, false);
    window.parent.postMessage("loaded " + id, '*');
</script>
</body>
</html>
`

const iframe = document.createElement("iframe");
iframe.src = "data:text/html;charset=utf-8," + encodeURIComponent(iframeSource);

window.addEventListener("message", (event) => {
    console.log("host got " + event.data);
    
}, false);



    const body = document.getElementsByTagName("body")[0];
    body.appendChild(iframe);

    iframe.onload = () => iframe.contentWindow.postMessage("Hello", '*');
    

}
start();
