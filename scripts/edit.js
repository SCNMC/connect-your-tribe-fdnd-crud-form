import {updateData} from './index.js'

const header = document.getElementById("editHeader")
const type = document.getElementById("type"); 
const nickname = document.getElementById("nickname"); 
const name = document.getElementById("name"); 
const prefix = document.getElementById("prefix"); 
const surname = document.getElementById("surname"); 
const avatar = document.getElementById("avatar"); 
const githubHandle = document.getElementById("githubHandle"); 
const bio = document.getElementById("bio"); 
const url = document.getElementById("url");
const submit = document.getElementById("submitBtn");
const submitMsg = document.querySelector(".submit-msg")



submit.addEventListener("click", getInputData);

function getInputData(e) {
    e.preventDefault();
    const inputValues = {
      
        memberId: parseInt(new URLSearchParams(window.location.search).get("memberId")),
        squadId: 1,
        type: type.value,
        nickname: nickname.value,
        name: name.value,
        prefix: prefix.value,
        surname: surname.value,
        avatar: avatar.value,
        githubHandle: githubHandle.value,
        bio: bio.value,
        url: url.value,
    }
    updateData(inputValues);
    updateData(inputValues);
    submitMsg.style.display = "block";
}