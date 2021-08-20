window.onload=function(event)
{

   let enter=document.getElementById("add");
  
 let desc=document.getElementById("description");
  let submit=document.getElementById("submit");
 
  submit.addEventListener("click",additem);
  var call=document.getElementById("clll");
  call.addEventListener("click",clearStorage);


const toggle = document.getElementById('toggle');
//const body = document.body;

toggle.addEventListener("click",hero);
};

function toggleButton(ref, btnID) {
  document.getElementById(btnID).disabled = false;
}

function hero()
{
//e.preventDefault();
const isChecked = document.body.classList.toggle("dark-theme");
	//const isChecked = e.target.checked;
	
	if(isChecked) {
		document.body.classList.add('dark-theme');
	} else {
		document.body.classList.remove('dark-theme');
	}
}

let itemsJsonArray=[][0];
function generic()
{

   itemsJsonArray=[][0];
  if(localStorage.getItem('itemsJson')==null)
  {
      itemsJsonArray=[];
      //itemsJsonArray.unshift([enter,desc,n]);
      //can use unshift or push
      localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
  }
  else
  {
      itemsJsonArraystr=localStorage.getItem('itemsJson');
      itemsJsonArray=JSON.parse(itemsJsonArraystr);  //for string to objects client side
  
  //    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));  //for converting objects to array
  }
  let str="";
  itemsJsonArray.forEach((element,index)=> {
      
    str+=`
          <tr>
       <th scope="row">${index+1}</th>
       <td>${element.name}</td>
       <td>${element.description} </td>
       <td>${element.newdate}</td>
       <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})" >DELETE<i class="bi bi-trash"></i></button></td>
       <td><button class="btn  btn-sm btn-success" onclick="edited(${index})">EDIT<i class="bi bi-pencil-square"></i></button></td>
    
    
    
     </tr>`;
    
    
      });
    

  

  



  table.innerHTML=str; 

  
}

  generic();
   function additem()
   {
      
       console.log("hello");
       
       let date=new Date();
       let n=date.toLocaleDateString();
       let d=date.toLocaleTimeString();
       let s= n+" "+"at"+" "+d;
       //let n=JSON.stringify(time);
       var c="true";
       console.log(n);
       console.log(c);
       enter=document.getElementById('add').value;
       desc=document.getElementById("description").value;
       if(localStorage.getItem('itemsJson')==null)
       {
           itemsJsonArray=[];
           itemsJsonArray.unshift([enter,desc,n]);
           //can use unshift or push
           localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
       }
       else
       {
         let currentitem ="";
          currentitem=document.querySelector("#citem").value; 
       if(currentitem==="")
       {
       //itemsJsonArraystr=localStorage.getItem('itemsJson');
       const itemobj={
           name:enter,
           description:desc,
           newdate:s,
           id:new Date().getTime(),
       };
     
     
       //itemsJsonArray=JSON.parse(itemsJsonArraystr);  //for string to objects client side
       itemsJsonArray.push(itemobj);
       localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));  //for converting objects to array
   }
else
{
    
            updateItem(currentitem,enter);
         updateItem1(currentitem, desc);

        updateItem2(currentitem);
         document.querySelector("#citem").value="";
         document.getElementById("lblsuccess").innerHTML="text edited succesfully!";
         document.getElementById("lblsuccess")
         .style.display = "block";
         setTimeout(function() {
           document.getElementById("lblsuccess")
                           .style.display = "none";
       }, 3000);
       document.getElementById("add").value="";
    document.getElementById("description").value="";
  
  
   
    //enter=document.getElementById('add').value;
    //desc=document.getElementById("description").value;
    
        }

       
       }
   
      
    generic();
      
      }
    
 
  
    


      
    
  
  generic();

 
  function deleted(itemIndex){

   
    console.log("Delete", itemIndex);
    itemsJsonArrayStr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    // Delete itemIndex element from the array
    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    generic();
    document.getElementById("lblsuccess").innerHTML="text deleted succesfully!";
    document.getElementById("lblsuccess")
    .style.display = "block";
    setTimeout(function() {
      document.getElementById("lblsuccess")
                      .style.display = "none";
  }, 3000);
  
} 





  function clearStorage()
  {
    if(confirm)
    {
      alert("do you really want to delete,this will delete all your task permamently");
      localStorage.clear();
      //additem();
      generic();
    }
  }




   

  function edited(item)    
  {
  
     let x;x=0;
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemsJsonArray = JSON.parse(itemJsonArrayStr);
      let enter=document.getElementById("add").value; 
   let description=document.getElementById("description").value;
   
      document.getElementById("add").value=itemsJsonArray[item].name;
      document.getElementById("description").value=itemsJsonArray[item].description;
      document.querySelector("#citem").value=item;
      generic();
     return itemsJsonArray;

    
  }
  generic();
   



const updateItem = function (itemIndex, newValue1) {
    console.log(itemIndex);
    const newItem = itemsJsonArray[itemIndex];
    
   newItem.name = newValue1;
 
   // newItem.description=newValue;

    itemsJsonArray.splice(itemIndex, 1, newItem);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    generic();
}
const updateItem1 = function (itemIndex, newValue) {
    console.log(itemIndex);
    const newItem = itemsJsonArray[itemIndex];
   newItem.description = newValue;
   
    
 
   // newItem.description=newValue;
    itemsJsonArray.splice(itemIndex, 1, newItem);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    generic();
}
const updateItem2 = function (itemIndex) {
  console.log(itemIndex);
  const newItem = itemsJsonArray[itemIndex];
  

  let date=new Date();
  let n=date.toLocaleDateString();
  let d=date.toLocaleTimeString();
  let s= n+" "+"at"+" "+d;
  newValue2=s;
newItem.newdate=newValue2;
 

 

 // newItem.description=newValue;

  itemsJsonArray.splice(itemIndex, 1, newItem);
  localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
  generic();
}






 

    
