document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let popup = document.getElementById("popup");

  popup.innerText = "";
  popup.className = "";

  if (name === "" || email === "" || message === "") {
    popup.innerText = "Please fill all fields ❌";
    popup.classList.add("popup-error");
  } else {
    popup.innerText = "Message sent successfully 💜";
    popup.classList.add("popup-success");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  setTimeout(() => {
    popup.innerText = "";
    popup.className = "";
  }, 3000);
});

function addTask() {
  let task = document.getElementById("taskInput").value;
  if (task === "") return;

  let li = document.createElement("li");
  li.innerText = task;
  li.onclick = function() {
    this.remove();
  };

  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
}
