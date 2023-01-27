var postobj={
    id:1,
    title:"hello javascript we are posting you",
    body:"we are doiong ajax in javascript",
    img:"img.jpg"
}  
// console.log(postobj,typeof(postobj))
var post=JSON.stringify(postobj);
// console.log(post);
var url="https://fakestoreapi.com/products"; 
var a=new XMLHttpRequest();
a.open("post",url,true);
a.setRequestHeader('content-type',"application/jSON");
a.send(post);
a.onreadystatechange=function(){
    if(this.status==201 && this.readyState==4){
        console.log("post created");
        console.log(this.responseText);
    }
}