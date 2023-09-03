async function newFormHandler(event) {
  event.preventDefault();
  const petName = document.querySelector("#petName").value;
  const species = document.querySelector("#species").value;
  const breed = document.querySelector("#breed").value;
  const age = document.querySelector("#age").value;

  // Use FormData to capture the form data, including the image file
  const formData = new FormData();
  formData.append("petName", petName);
  formData.append("species", species);
  formData.append("breed", breed);
  formData.append("age", age);
  formData.append("image", document.querySelector("#image").files[0]);

  const response = await fetch(`/api/petRoutes/post-pet`, {
    method: "POST",
    body: formData, // Send FormData instead of JSON
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add new Pet");
  }
}

document
  .querySelector("#post-adoption-form")
  .addEventListener("submit", newFormHandler);

// async function newFormHandler(event) {
//     event.preventDefault();
//     const petName = document.querySelector('#petName').value;
//     const species = document.querySelector('#species').value;
//     const breed = document.querySelector('#breed').value;
//     const age = document.querySelector('#age').value;

//     const response = await fetch(`/api/petRoutes/post-pet`, {
//         method: 'POST',
//         body: JSON.stringify({
//             petName,
//             species,
//             breed,
//             age,
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//       alert('Failed to add new Pet');
//     }
// }

// document.querySelector('#post-adoption-form').addEventListener('submit', newFormHandler);
