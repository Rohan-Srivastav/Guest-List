name_array=[];

function submit(){
   var guestname=document.getElementById("inp1").value;
   name_array.push(guestname);
   document.getElementById("lbl_name").innerHTML=name_array;  
}
console.log(name_array);
   
    function show(){
        document.getElementById("showednames").innerHTML=name_array;
    }
    console.log(name_array);

    function sorting(){
        name_array.sort();
        document.getElementById("sorted_names").innerHTML=name_array;
    }
    console.log(name_array);




    function searching(){

        var s=document.getElementById("inp2").value;
        var found=0;
        var j;
        for(var j=0; j<name_array.length; j++)
        {
            
            if(s==name_array[j]){
            found=found+1;
            }
        }

        document.getElementById("searched_ans").innerHTML="Name Found "+found+" Time/s";
        console.log("Found Name "+found+" Time/s");
    }

