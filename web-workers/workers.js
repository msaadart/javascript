// The worker listens for messages from the main thread using the onmessage event handler.
self.onmessage = function(message){
    // Performing the Heavy Computation
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    // Sending the Result Back to the Main Thread
    self.postMessage(sum)
}