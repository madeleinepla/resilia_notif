document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded")
  
  let url = "http://localhost:3000/notifs"
  fetch(url)
    .then(resp => resp.json())
    .then(data => data.forEach(notif => {
      displayNotif(notif)
    }))

  // $.ajax({
  //   url: url,
  //   method: 'GET'
  // })
  //   .done(function (data) {
  //     data.forEach(notif => {
  //       displayNotif(notif)
  //     })
  //   });
})

function displayNotif(notif) {
  const list = document.querySelector("#notif-list")
  
  // create notif
  const node = document.createElement("ul");
  list.appendChild(node);
  node.classList.add(`seen-${notif.seen}`);
  node.setAttribute('id',`${notif.id}`);

  // add title
  const titleNode = document.createElement("li");
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

const clickHandler = function (e) {
  const target = e.currentTarget
  // debugger
  // $.ajax({
  //   url: `http://localhost:3000/notifs/${target.id}`,
  //   method: 'DELETE',
  // });
  fetch(`http://localhost:3000/notifs/${target.id}`, {
    method: 'DELETE',
  })
    .then(res => res.text()) // or res.json()
    .then(res => window.location.reload())

  
};