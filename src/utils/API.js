//const fs=require("fs");

// Export an object containing methods we'll use for accessing the random user API


export default {
  fetchEmployees: async function(data) {
    /* var data = JSON.parse(fs.readFileSync(filepath)); */
    console.log(data);
    
    return data.map(user => {
      return {
        employeeid: user.id,
        name: `${user.firstname} ${user.lastname}`,
        firstname: user.firstname,
        lastname: user.lastname,
        jobtitle:user.jobtitle,
        photo: user.photo,
        email: user.email
      };
    });
       
       
      
  }
  
};