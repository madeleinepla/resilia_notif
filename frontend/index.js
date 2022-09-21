document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded")
  
  let url = "http://localhost:3000/notifs"

  $.ajax({
    url: url,
    method: 'GET'
  })
    .then(data => {
      data.forEach(notif => {
        displayNotif(notif)
      })
    });
})

function displayNotif(notif) {
  const list = document.querySelector("#notif-list")
  
  // create notif
  const node = document.createElement("ul");
  list.appendChild(node);
  node.classList.add(`notif-item`);
  node.setAttribute('id',`${notif.id}`);

  // add title
  const titleNode = document.createElement("h3");
  const titleText = document.createTextNode(`${notif.title}`);
  titleNode.appendChild(titleText)
  node.appendChild(titleNode);

  // add body
  const bodyNode = document.createElement("li");
  const bodyText = document.createTextNode(`${notif.body}`);
  bodyNode.appendChild(bodyText)
  node.appendChild(bodyNode);

  node.addEventListener('click', clickHandler, false);
}

const clickHandler = (e) => {
  const target = e.currentTarget
  $.ajax({
    url: `http://localhost:3000/notifs/${target.id}`,
    method: 'DELETE',
  })
    .then(res => window.location.reload())

};