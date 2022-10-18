function addMore() {
  let item = document.getElementById("item").value;
  if (item == "") {
    document.getElementById("errorMsg").innerHTML = "Please enter some item";
  } else {
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = item;
    let a = document.createElement("a");
    // a.innerHTML='<i class="fas fa-trash"></i>';
    a.textContent = "Delete";
    a.href = "javascript:void(0)";
    a.className = "remove";
    li.appendChild(a);
    document.getElementById("clr").innerHTML = "clear item"
    document.getElementById("errorMsg").innerHTML = "";
    let pos = list.firstElementChild;

    if (pos == null) {
      list.appendChild(li);
    } else {
      list.insertBefore(li, pos);
    }
  }
  document.getElementById("item").value = "";

  let btn = document.querySelector("ul");
  btn.addEventListener("click", function (e) {
    let list = document.getElementById("list");
    let li = e.target.parentNode;
    list.removeChild(li);
  });
 
}
function removeAll(){
    document.getElementById("list").innerHTML = "";
    document.getElementById("clr").innerHTML = ""
}
