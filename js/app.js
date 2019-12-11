//..load apis....
//cominicate between localserver to github server
const api ="https://api.github.com/users";
 
window
.fetch(api)
.then(data => {       //then is use to get data
    //console.log(data);
    //json object
    data.json().then(gituser => {
        //console.log(gituser);
        //print object
      var output =[];
        for (let user of gituser){
            
           // console.log(user.login);
           output +=`
           <div class="container">
               <table class ="table table-bordered mt-4">
                   <tr>
                       <th>id</th>
                       <th>Name</th>
                       <th>photo</th>
                       <th>Repo</th>
                       <th>URL</th>
                   </tr>
                   <tr>
                       <td>${user.id}</td>
                       <td>${user.login}</td>
                       <td><img style="width:100px;height:100px;
                       border-radius:100%" src="${user.avatar_url}" /></td>
                       <td>${user.repos_url}</td>
                       <td>${user.url}</td>
                   </tr>,
               </table>
           </div>
         `;
         document.getElementById("template").innerHTML=output;
        }
    })
.catch(err => console.log(err));
})
.catch(err => console.log(err));

