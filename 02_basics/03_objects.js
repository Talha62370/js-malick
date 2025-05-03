const mySym = Symbol("key")

const JsUser = {
    name: "malick",
    "full name": "talha malick",
    [mySym]: "mykey1",
    age: 20,
    location: "jaipur",
    email: "malick@gmail.com",
    isLoggedIn: false,
    lastLogonDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "malick@gmail.com"
Object.freeze(JsUser)
JsUser.email = "malick@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);