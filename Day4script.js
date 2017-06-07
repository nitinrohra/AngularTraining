var a=5;
var b=1.6;
var s="YouStart";
console.log(a,b);
console.log(s)
cities=[]
console.log("This is an array",cities);
Person={}

    Person.Name="Abish";
    Person.Profession="Comedian"
    Person.Show="Son of Abish"
    Person.Address={}
    Person.Address.Street="Karol Kunj"
    Person.Address.City="Delhi"

console.log("Person",Person);
console.log("Abish's Profession :",Person.Profession);
console.log("Lives in ",Person.Address.City)
console.log("Array Function")
cities.push("Jaipur","Delhi","Goa");
console.log("Array after push is",cities);
console.log("Splice function(2,1)",cities.splice(2,1),cities);
console.log("Splice as Replace",cities.splice(1,1,"Pune"),cities) //Replace
console.log("metro:",metro=["Chennai","Mumbai","Kolkata"])
console.log("Kolkata Popped:",metro.pop(),metro)
console.log("Concat Metro & Cities",cities.concat(metro))
console.log("Element at index 2 of concatinated Array:",cities.concat(metro)[2]);
console.log("Join by _:",cities.join("_"))
console.log("Reversed Array:",cities.reverse())
console.log("String Functions")
console.log("String :",Name="Youstart")
console.log("Letter at index 4",Name[4])
console.log("index of s & z:",Name.indexOf("s")," & ",Name.indexOf("z"))
console.log("s replaced with z;",Name.replace("s","z"))
console.log("Split Function",Name.split(""))
console.log("Split at t:",Name.split("t"))
console.log("Chain of functions",Name.split("").reverse().join(""))