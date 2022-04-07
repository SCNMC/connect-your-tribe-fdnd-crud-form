const API_URL = "https://tribe.api.fdnd.nl/v1";
const table = document.querySelector('table');

async function getAllMembers() {
    const response = await fetch(`${API_URL}/member`);
    const json = await response.json();

    return json.data;
}

async function getMembersFromFDND() {
    const members = await getAllMembers();
    const FDNDMembers = members.filter(member => member.squadId === 1);

    fillTable(FDNDMembers);
}



getMembersFromFDND()


function fillTable(members) {


    members.forEach(member => {
        // Insert image/text if none are provided
        if (member.avatar == "") {
            member.avatar = "/assets/unnamed.png ";
        }
        if(member.githubHandle == ""){
            member.githubHandle = "Not available";
        }
        // Creates table data
        table.insertAdjacentHTML('beforeend',
            `
            <tr>
            <td>
                <p>${member.memberId}</p>   
           </td>
           <td class="nameAndAvatar">
           <img class="avatarImage" src="${member.avatar}">
                <p>${member.name + " " + member.prefix + member.surname} </p>
            </td>
            <td>
                <a href="https://github.com/${member.githubHandle}">${member.githubHandle}</a>
            </td>
            <td>
            <a href=edit.html?memberId=${member.memberId}>Edit</a>
            </td>
           
            </tr>
            `
        )
    })
}



async function updateData(data) {
    const req = await fetch(`${API_URL}/member`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    const res = await req.json();
}


export{
    updateData
}


  