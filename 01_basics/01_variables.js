const accountId = 14423
let accountEmail = "malick@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2 not allowed

accountEmail = "ab@ab.com"
accountPassword = "1212121"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])

