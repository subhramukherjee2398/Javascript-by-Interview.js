const user  = {
    email : 'myemail@',
    updateEmail:(email) =>{
        this.email = email;
    }
}

user.updateEmail('newemal@.com')
console.log(user.email)

/* 
answer: myemail@

becasue update is a arrow function; it's does not have any context of this
Here does not pointing global emial instead of local email variable

*/