function submitForm() {
    // Perform form submission using Fetch API
    fetch(this.action, {
      method: 'POST',
      body: new FormData(this)
    })
    .then(response => {
      if (response.ok) {
        displayCongratulationsMessage();
      } else {
        displayErrorMessage('Form submission failed. Please try again later.');
      }
    })
    .catch(error => {
      
      console.error('Error:', error);
      // Handle error if needed
      displayErrorMessage('An unexpected error occurred. Please try again later.');
    });
  }
  
 
  function displayCongratulationsMessage() {
   
    document.getElementById("container").classList.add('blurred');
    /*document.body.classList.add('blurred');*/ 

    const congratulationsDiv = document.createElement('div');
    congratulationsDiv.textContent = 'Congratulations! Your form has been successfully submitted.';
    
   
    congratulationsDiv.classList.add('congratulations-message');

    document.body.appendChild(congratulationsDiv);
  }
  
  function displayErrorMessage(message) {

    document.body.classList.add('blurred');
    
    const errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    
    errorDiv.classList.add('error-message');
    
    document.body.appendChild(errorDiv);
  }
  
  const form = document.getElementById("form-container");


form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  fetch(this.action, {
    method: 'POST',
    body: new FormData(this)
  })
  .then(response => {
    if (response.ok) {
      displayCongratulationsMessage();
    } else {
      displayErrorMessage('Form submission failed. Please try again later.');
    }
  })
  .catch(error => {
    
    console.error('Error:', error);
    // Handle error if needed
    displayErrorMessage('An unexpected error occurred. Please try again later.');
  });
}) 
