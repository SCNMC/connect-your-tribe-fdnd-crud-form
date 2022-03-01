const baseUrl = "https://tribe.api.fdnd.nl/v1"

//Functions

getMembers()
async function getMembers() {
   const req = await fetch(`${baseUrl}/member`)
   await req.json()
   .then(function(json){
       console.log(json);
        json.data.forEach(item => {
            if(item.memberId == 9) {
               
                
                
            }

        });
    })
}