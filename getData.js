function getData(){
  let users = []
  let url = 'https://home.fastexpertdev.com/api/search-pros/get-top-agents?&city=Baltimore&state=MD&user_id=1&row_count=10';
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let mdatas = data.data; 
    let content = document.getElementById("data");    
     for (mdata of mdatas) {  
      users.push(
        `<li key="${mdata.user_id}" class="user">
        <span>${mdata.agent_name}</span>
        <span class="img-wrapper"><img src="${mdata.user_image}" alt="${mdata.img_name}"/></span>
        <span>${mdata.user_address}</span>
        <span>${mdata.user_city}</span>
        <span>${mdata.user_state}</span>
        <span>${mdata.user_zipcode}</span>        
        <a class="btn-primery" onClick="onpopup()">Message</a>
      </li>`);
    }
    content.innerHTML = users.join(""); 
})
  .catch(error => console.error(error))
}
getData();

const onpopup = () => {
  console.log("open");
  document.getElementById("openpopup").style.display = "flex";  
}
const onClose = () => {
  console.log("close");
  document.getElementById("openpopup").style.display = "none";
}