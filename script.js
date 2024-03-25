let curr = 0;

const userData = [
    {
        img: "asset/user1.jpg",
        name: "idris",
        sex: "male",
        age: "20",
        
    },

    {
        img: "asset/user1.jpg",
        name : "mary",
        sex: "female",
        age: "33",
        
    },
    {
        img: "asset/user1.jpg",
        name: "Doe",
        sex: "prefer not to say",
        age: "60",
        
    }
 ];

document.getElementById("demo").innerHTML = `<span style ="color:green">USER ${curr + 1} of ${userData.length}<span/>`;

document.getElementById("img").src = userData[curr].img;
document.getElementById("a_text").innerHTML = userData[curr].name;
document.getElementById("b_text").innerHTML = userData[curr].sex;
document.getElementById("c_text").innerHTML = userData[curr].age;
document.getElementById("abutton").innerHTML = `previous`;
document.getElementById("bbutton").innerHTML = "next";

function next() {
    if (curr < userData.length - 1) {
        curr++;
    }
    document.getElementById("demo").innerHTML = `<span style ="color:green">USER ${curr + 1} of ${userData.length}<span/>`;
    document.getElementById("img").src = userData[curr].img;
    document.getElementById("a_text").innerHTML = userData[curr].name;
    document.getElementById("b_text").innerHTML = userData[curr].sex;
    document.getElementById("c_text").innerHTML = userData[curr].age;
}

function previous() {
    if (curr > 0) {
        curr--;
    }

    document.getElementById("img").src = userData[curr].img;
    document.getElementById("a_text").innerHTML = userData[curr].name;
    document.getElementById("b_text").innerHTML = userData[curr].sex;
    document.getElementById("c_text").innerHTML = userData[curr].age;
}
