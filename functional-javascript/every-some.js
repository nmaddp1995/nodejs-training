function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(function(user){
            return goodUsers.some(function(user2){
                return (user == user2);
            });
        });
    }
}
module.exports = checkUsersValid; 