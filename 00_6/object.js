// Chapter six: Object in javascript

var obj = {};
obj.x = 10;
console.log(obj)

var point = {
    i : 10,
    y : 20,
}
//insert velue in object
point.z = 30;
console.log(point)

// 
var obj2 = Object();
obj2.a = 20;
obj2.b = 30;

console.log(obj2)


var poi = {
    f: 39,
    g: "Today is Eid-ul Fitor",
}

console.log(poi.f)
console.log(poi["g"])
console.log(obj2.b)
delete obj2.b
