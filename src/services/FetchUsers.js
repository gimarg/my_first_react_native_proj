// const URI = 'http://localhost:8000';

// export default {
//     async fetchUsers() {
//         try {   
//                 let response = await fetch('http://localhost:8000/users');
//                 let responseJsonData = await response.json();
//                 console.log('ok');
//                 return responseJsonData;
//                 // return '123';

//             }
//         catch(e) {
//           console.log('error:');
//             console.log(e)
//         }
//     }
// }

const URI = 'http://10.1.1.185/my_first_laraadmin_proj/public';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI + '/users');
                let responseJsonData = await response.json();
                return responseJsonData;
                // return({"id":1,"name":"gimarg","context_id":1,"email":"gimarg21@gmail.com","type":"Employee","deleted_at":null,"created_at":"2018-05-15 07:40:32","updated_at":"2018-05-18 07:27:24"});
            }
        catch(e) {
          console.log("error");
            console.log(e)
        }
    }
}