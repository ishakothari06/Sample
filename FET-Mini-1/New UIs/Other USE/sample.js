postData = {
        "id": 1,
        "title": "Keyur Khant New",
        "author": "typicode"
}
var id = 1;
$.ajax({
    url:"http://localhost:3000/posts/"+id,
    method:"PUT",
    data: postData,
    success:(x)=>{
        console.log("Success");
    },
    error:(x)=>{
        console.log("Error");
        console.log(x);
    }
})