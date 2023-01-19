const url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(location.search);
console.log(params);
const id = params.get("id");
console.log("id", id);

window.onload = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzQxMzIxNzMsImV4cCI6MTY3NTM0MTc3M30.vjPibS6yB__lTB5HAM7yR3ALxYdJ6QLP7mRB8LB8VDU",
      },
    };
    const response = await fetch(`${url}/${id}`, options);
    const { name, description, brand, imageUrl, price, _id } =
      await response.json();
    const detailsRow = document.getElementById("details-row");
    detailsRow.innerHTML += `
        <div class="col-12">
        <div class="card mb-3" style="max-width: 900px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${imageUrl}" alt="${name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text"><b class="mr-2">Description:</b>${description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b class="mr-2">Brand:</b>${brand}</li>
                <li class="list-group-item"><b class="mr-2">Price:</b>${price}</li>
            </ul>
            
          </div>
        </div>
      </div>
        </div>`;
  } catch (error) {
    console.error(error);
  }
};
