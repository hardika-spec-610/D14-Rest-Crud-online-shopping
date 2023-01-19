const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  await getProduct();
};

const getProduct = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzQxMzIxNzMsImV4cCI6MTY3NTM0MTc3M30.vjPibS6yB__lTB5HAM7yR3ALxYdJ6QLP7mRB8LB8VDU",
      },
    };
    const response = await fetch(url, options);
    const product = await response.json();
    console.log(product);
    renderProduct(product);
  } catch (error) {
    //   handleError(error)
    console.error(error);
  }
};

const renderProduct = (arrayOfProducts) => {
  const productRow = document.getElementById("product-row");
  productRow.innerHTML = "";
  arrayOfProducts.forEach((singleProduct) => {
    const { name, description, brand, imageUrl, price, _id } = singleProduct;
    productRow.innerHTML += `
    <div class="d-flex col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card" style="width: 18rem;">
        <img src=${imageUrl} class="card-img-top pt-2" alt=${name} width=200px height=250px>
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${brand}</li>
          <li class="list-group-item">${price}</li>
        </ul>
        <div class="card-body">
          <a href="../Details Page/details.html?id=${_id}" class="card-link">Product Details</a>
        </div>
      </div>
  </div>`;
  });
};
