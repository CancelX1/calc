
function delf(){
    var j=document.getElementById("songTextInput").value;
    var o=j.split("");
    o.pop();
    document.getElementById("songTextInput").value=o.join("");
    
    
    
    }
    
    
    function cls(num){
    
    document.getElementById("songTextInput").value="";
    
    }
    
    function display(num){
    if(num==17){
    
    num="*0";
    
    }
    
    
    if(num==11){
    num="+";
    
    }
    if(num==12){
    num="-";
    }
    if(num==13){
    num="*"
    }
    if(num==14){
    num="π";
    }
    if(num===15){
    num="*(";
    }
    if(num===16){
    num=")"}
    var k=num;
    var l=num;
    document.getElementById("songTextInput").value=document.getElementById("songTextInput").value+num;
    
    }

    function square(){
        var k=document.getElementById("songTextInput").value;
        var result=k*k;
        document.getElementById("songTextInput").value=result;
    }
    
    function eva(){
    
    var k=document.getElementById("songTextInput").value;
     var t= k.replace('π','3.14159')
    var l=eval(t);
    document.getElementById("songTextInput").value=l
    
    }
    