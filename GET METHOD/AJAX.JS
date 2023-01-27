// we are feching data from fakeapi 
// alert(23)
var productload=()=>{
  var  a=new XMLHttpRequest();
    a.open("GET","https://fakestoreapi.com/products",true);
    a.send(); 

    a.onreadystatechange=function(){
        if(this.status==200 && this .readyState==4){
          document.getElementById('img1').style.display="none";
            // console.log(typeof(this.responseText));
            var data=JSON.parse(this.responseText);
            // console.log(data); 

            for(var i=0; i<data.length; i++){
                // console.log(data);
                var div_Tag=document.createElement('div');
                div_Tag.className="product_div";
                // console.log(div_Tag);
             
                  for(var j in data[i]){
                    // console.log(data[i][j]);
                    if(j=="image"){
                      var img_tag=document.createElement('img');
                      img_tag.className="img_tag_Style";
                      img_tag.src=data[i][j]; 
                      // console.log(img_tag);
                      div_Tag.appendChild(img_tag);
                    }
                    else if(j=="rating"){
                      for(var z in data[i][j]){
                        div_Tag.innerHTML+= "<br>"+z+data[i][j][z]+"<br>";
                      }
                    }
                    else{
                      div_Tag.innerHTML+="<br>"+ j+data[i][j]+"<br>";
                    } 


                  } 
                  document.getElementById('main_div').appendChild(div_Tag);
              
            
            } 
          
       
        }
        else{
          document.getElementById('img1').style.display="none";
        }
    }
} 
productload()