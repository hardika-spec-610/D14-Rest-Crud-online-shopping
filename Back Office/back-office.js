const url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(location.search);
const id = params.get("id"); //this can either an id or null
console.log(id);
//if null => POST
//if not null => PUT
window.onload = async () => {
  try {
    if (id !== null) {
      const submitBtn = document.querySelector(".btn-primary");
      submitBtn.remove();
      let response = await fetch(url + "/" + id);
      if (response.ok) {
        let { name, description, brand, imageUrl, price } =
          await response.json();
        document.getElementById("product-name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("product-brand").value = brand;
        document.getElementById("imageUrl").value = imageUrl;
        document.getElementById("price").value = price;
      } else {
        console.log(response);
        throw response.status + " " + response.statusText;
      }
    } else {
      //we are trying to post
      const putButton = document.querySelector(".btn-secondary");
      putButton.remove();
    }
  } catch (error) {
    console.error(error);
  }
};

const handleSubmitProduct = async (event) => {
  try {
    event.preventDefault();
    const name = document.getElementById("product-name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("product-brand").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = document.getElementById("price").value;

    const newProduct = {
      name,
      description,
      brand,
      imageUrl,
      price,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzQxMzIxNzMsImV4cCI6MTY3NTM0MTc3M30.vjPibS6yB__lTB5HAM7yR3ALxYdJ6QLP7mRB8LB8VDU",
      },
    };

    let response = await fetch(url, options);

    if (response.ok) {
      successAlert();
    } else {
      throw response.status + " " + response.statusText;
    }
  } catch (error) {
    console.error(error);
  }
};

const successAlert = () => {
  const alert = document.querySelector(".alert-success");
  alert.classList.add("show");
  alert.classList.remove("d-none");
};
