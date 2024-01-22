var books = {
    "title": "my family & my town",
    "author": "hailee",
    "age": 25,
    "year": 2024,
}
var bookJSON = JSON.stringify(books,function(key,value){
    switch(key){
        case "title":
            return value.split(" ").join(".")
        case "year":
            return 1998
        case "author":
            return value.toUpperCase()
        case "age":
            return value + 1
        default:
            return value
    }
},2)
console.log(bookJSON,'bookJSON')