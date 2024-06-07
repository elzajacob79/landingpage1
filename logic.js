class Landingpage{
    //property
    database={
        'milan':{username:'Milan',password:'milan123'},
        'manu':{username:'Manu',password:'manu123'},
        'mini':{username:'Mini',password:'mini123'},
        'madhu':{username:'Madhu',password:'madhu123'}
    }
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    getData(){
        this.database=JSON.parse(localStorage.getItem("database"))
        console.log(this.database);
    }

//methods to regiater an user
register(){
    this.getData()
    let user=regusername.value 
    let pswd=regpswd.value 
    console.log(user);
    console.log(pswd);
if(user=="" || pswd==""){
    alert('please fill the form completely')
}
else{
    if(user in this.database){
        alert('account already exist ...please login')
    }
    else{
       this.database[user]={username:user,password:pswd}
       console.log(this.database);
        this.saveData()
        //navigate to login page
        window.location='home.html' 
    }
}
}

//method to login
login(){
    let user=loginUsername.value
    let pswd=loginPswd.value 
    console.log(user,pswd);

    if(user=="" || pswd==""){
        alert('please fill the form completly')
    }
    else{
        if(user in this.database){
            if(this.database[user].password==pswd){
                localStorage.setItem("username",user)
                alert('login successfull')
                window.location='index.html'
            }
            else{
                alert('incorrect username or password')
            }
        }
        else{
            alert('account doesnot exist')
        }
    }
}
}
const obj=new Landingpage()
//obj.saveData()
obj.getData()