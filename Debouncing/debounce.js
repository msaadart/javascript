//1. Check if the Event Listener Is Already Attached
let isEventListenerAdded = false;

function handler(){
    // This function simply logs an API request message to the console, including the current value of the search input field. It simulates the action you would take when sending an API request.
    console.log(`API request: ${searchInput.value}` );
}

// The searchInput variable is assigned the DOM element with the ID "search-input".
const searchInput = document.getElementById("search-input");

// An event listener is added to the searchInput element, which listens for the input event. This event fires every time the user types something in the input field.
if (!isEventListenerAdded) {
    searchInput.addEventListener('input', debounce(handler, 500));
    isEventListenerAdded = true
}

// The debounce function takes two arguments: f, the function to be debounced (in this case, handler), and ms, the delay in milliseconds (500ms in this case).
function debounce(f, ms){
    // This variable keeps track of the timeout set for the delay
    let timeout;

    // The debounce function returns a new function
    return function()
    {
        // If there is already a timeout in progress, it clears it. 
        if(timeout){
            clearTimeout(timeout);
        }
        
        // It sets a new timeout that will execute the handler function after the specified delay (500ms) has passed since the last key press.
        timeout = setTimeout(() => {
            // it checks if the input field is not empty 
            searchInput.value != '' && f();
        }, ms);
    }   
}

//2. Remove Existing Event Listener Before Adding a New One
// searchInput.removeEventListener('input', debouncedHandler);
// const debouncedHandler = debounce(handleInput, 500);
// searchInput.addEventListener('input', debouncedHandler);

//3. Use Event Delegation
// document.body.addEventListener('input', function(event) {
//     if (event.target && event.target.id === 'search-input') {
//         debouncedHandler(event);
//     }
// });
// const debouncedHandler = debounce(handleInput, 500);