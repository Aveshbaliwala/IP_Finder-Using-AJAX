console.log("First Example of AJAX");
//Creating an object of XMLHttpRequest
function Click()
{
console.log("You have Click the Search");
var text=document.getElementById("text").value;
console.log(text);
if(text=="")
{
	alert("Please Enter the Ip Address");
	return false;
}
var object= new XMLHttpRequest();

//Instantiating the request object
object.open('GET','https://ipinfo.io/'+text+'/geo',true);

object.onload=function(){
    if(this.status==200)
    {
    	console.log("Status = 200")
        var object1=this.responseText;
        if(object1)
        {	
        	console.log("Inside if")
        	object1=JSON.parse(this.responseText);
        	if(object1.bogon==true)
        	{
        		alert("The IP address is a bogon IP. No data for this IP address.");
				document.getElementById("text").value="";
        		return false;
        	}
    		else
    		{	    
				document.getElementById("text").value="";
		        console.log(this.responseText);		
		        var ip_table=document.getElementById("table1");

		        var r1=ip_table.insertRow();
		        var cell1=r1.insertCell();
		        var cell2=r1.insertCell();
		        cell1.innerHTML="IP";
		        cell2.innerHTML=object1.ip;

		        var r2=ip_table.insertRow();
		        var cell1=r2.insertCell();
		        var cell2=r2.insertCell();
		        cell1.innerHTML="City";
		        cell2.innerHTML=object1.city;

		        var r3=ip_table.insertRow();
		        var cell1=r3.insertCell();
		        var cell2=r3.insertCell();
		        cell1.innerHTML="Region";
		        cell2.innerHTML=object1.region;

		        var r4=ip_table.insertRow();
		        var cell1=r4.insertCell();
		        var cell2=r4.insertCell();
		        cell1.innerHTML="Country";
		        cell2.innerHTML=object1.country;
 		   	}
 		}
	}	

    else
    {
		alert("Please enter valid IP address");
        console.log("Error.")
		document.getElementById("text").value="";
		return false;
    }
}
document.getElementById("table1").innerHTML="";
object.send();
}