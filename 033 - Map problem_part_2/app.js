//Sort the people
function sortPeople() {


    let names = ["Marry", "John", "Emma"]
    let height = [180, 165, 170]
    let ans = []

    let map = new Map()

    for (let i = 0; i < names.length; i++) {
        map.set(height[i], names[i])
    }

    height.sort()

    // arr.sort((a,b)=> b-a)        //-> reverse the array
    // arr.sort().reverse()         //-> reverse the array 
    for (let i = height.length - 1; i >= 0; i--) {

        ans.push(map.get(height[i]))
    }
    console.log(ans)
}

//Most frequent even number
let arr = [1, 2, 2, 4, 4, 0, 1]

let map = new Map()


for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {

        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1)
        }
    }
}

let freq = 0;
let ans=0;

map.keys().forEach((key) => {
    if(map.get(key)>freq){
        freq = map.get(key)
        ans = key
    }
    else if (freq == map.get(key)){
        ans = Math.min(ans,key)
    }    
})
console.log(ans)