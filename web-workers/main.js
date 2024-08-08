// This line creates a new Web Worker by referencing the workers.js file, which contains the worker’s code. The worker runs in a separate thread.
const worker = new Worker('workers.js');

// sumButton and bgButton refer to two buttons in the HTML document.
const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

// When sumButton is clicked, it sends a message ('hello, worker') to the Web Worker to start the computation.
sumButton.addEventListener("click", (event)=>{
    worker.postMessage('hello, worker')
});

// When the worker finishes the computation, it sends the result back to the main thread.
worker.onmessage = function(message){
    alert(`The final sum is ${message.data}`)
};

// This code toggles the background color of the webpage between yellow and black each time the bgButton is clicked.
bgButton.addEventListener("click", event => {
    if(document.body.style.background !== "yellow"){
        document.body.style.background = "yellow";
        document.querySelector('h1').style.color = "black";
    }else{ 
        document.body.style.background = "black"; 
        document.querySelector('h1').style.color = "white";
    }
});