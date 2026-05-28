const map = new Map()

map.set("ajay", 5)
map.set("amit", 4)
map.set("aman", 4)
map.set("sakshi", 5)


map.keys().forEach((key)=>{
    console.log(key+" -> "+(map.get(key)*5))
})





// map.values().forEach((val)=>{  //-> to get all values
//     console.log(val)
// })

// map.keys().forEach((key)=> { //-> to get all keys
//     console.log(key)
// })


// console.log(map.get("amit"))   // map.get()
// map.delete("ajay")              // map.delete()
// console.log(map)
// console.log(map.has("ali"))    //map.has()