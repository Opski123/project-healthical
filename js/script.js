// const btn = document.getElementById('menu-btn')
// const nav = document.getElementById('menu')

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// })


// country code package
let input = document.querySelector("#phone");
window.intlTelInput(input, {});

// handle show or hide password
const handleToggle = (e) => {
  const id = e.target.id.split("-")[1] * 1; // check for the id of the element invoking this function and and split the id at the hyphen (-), then select the first index of the split text and convert to number by multiplying by 1

  e.target.classList.add("hidden"); // add a tailwindcss hide class to the element invoking the function

  // condition to check if it is from password or confirm password

  if (e.target.id.includes("cp")) {
    // means its from confirm password

    if (id === 2) {
      // if the id on line 7 is 1, then it is to show the password
      document.getElementById("cp-1").classList.remove("hidden"); //remove hidden to display the other eye icon
      document.getElementById("password2").setAttribute("type", "text"); // change password o text
    } else {
      // means the id is 1 and hide the password
      document.getElementById("cp-2").classList.remove("hidden");
      document.getElementById("password2").setAttribute("type", "password");
    }
  } else {
    // means it is from password
    if (id === 2) {
      document.getElementById("p-1").classList.remove("hidden");
      document.getElementById("password").setAttribute("type", "text");
    } else {
      document.getElementById("p-2").classList.remove("hidden");
      document.getElementById("password").setAttribute("type", "password");
    }
  }
};

// get elements
const form = document.getElementById("form");

// reusable error function
const createError = (element, message) => {
  // first add the error message to the div
  const errorDiv = document.querySelector(`#error-${element}`);
  errorDiv.innerText = message;

  // remove the error message after 3 seconds
  setTimeout(() => {
    const errorDiv = document.querySelector(`#error-${element}`);
    errorDiv.innerText = "";
  }, 3000);
};

// event listener to handle form submissions
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent page reload
  const formData = new FormData(form);
  const formEntries = Object.fromEntries(formData.entries());

  // validation starts
  for (const property in formEntries) {
    if (formEntries[property] === "") {
      createError(property, `${property} cannot be empty!`);
    }
    const value = formEntries[property].toString().toLowerCase().trim();

    switch (property) {
      case "telephone":
        {
          // hacky but we can do better
          if (!value.startsWith("+") || value.length < 10) {
            createError(
              property,
              `Please enter a valid phone number with +countryCode`
            );
          }
        }
        break;
      case "email":
        {
          const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!emailRegex.test(value) && value !== "") {
            createError(property, `Please enter a valid email`);
          }
        }
        break;
      case "password":
        {
        }
        break;
      case "password2":
        {
          if (
            formEntries.password !== formEntries.password2 &&
            formEntries.password !== "" &&
            formEntries.password2 !== ""
          ) {
            createError(property, `Passwords do not match!`);
          }
        }
        break;
      default:
        break;
    }
  }
});

// event listener to toggle password
