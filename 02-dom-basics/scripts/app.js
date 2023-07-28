window.onload = function () {
  var btnAdd = document.querySelector("#btnAdd");
  var input = document.querySelector("#txtInput");

  const listContainer = document.querySelector(".list-container");

  btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value.trim() === "") {
      return;
    }
    var liElement = document.createElement("li");
    liElement.innerHTML = input.value;
    liElement.classList.add("list-group-item", "m-3");
    listContainer.append(liElement);
    input.value = "";
  });

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      users.forEach((user) => {
        const liElement = document.createElement("li");
        liElement.classList.add("list-group-item", "mb-2");
        liElement.innerHTML = user.name;
        listContainer.append(liElement);
      });
    } catch (err) {
      console.error(err);
    }
  };

  fetchUsers();
};

// function e() {
//     function a() {
//         var x = 100
//         return function b() {
//             console.log(++x);
//         }
//     }

//     function c() {
//         var d = a();
//         d();
//     }
//     c();
//     return a;
// }
// var f = e();

// f();
