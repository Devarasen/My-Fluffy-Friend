async function newFormHandler(event) {
    event.preventDefault();
    const petName = document.querySelector('#petName').value;
    const breed = document.querySelector('#breed').value;
    const age = document.querySelector('#age').value;
    
    const response = await fetch(`/api/petRoutes/post-pet`, {
        method: 'POST',
        body: JSON.stringify({
            petName,
            breed,
            age,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
      alert('Failed to add new Pet');
    }
}

document.querySelector('#post-adoption-form').addEventListener('submit', newFormHandler);
