// let title = document.querySelector('#main-header');
// title.style.borderBottom = "solid 8px grey";


// let input=document.querySelector('input');
// input.value='suiiii....'

// let input2=document.querySelector('input[type=submit]');
// input2.value="press";

// let last=document.querySelector('.list-group-item:last-child');
// last.textContent='hmm...';

// let nth=document.querySelector('.list-group-item:nth-child(2)');
// nth.style.color='blue';


// let items =document.querySelector('.list-group');
// items.firstElementChild.innerHTML="<h1>lets go...</h1>"

// items.lastElementChild.style.fontWeight='bold';

// items.children[2].style.backgroundColor='grey';

// let item=document.querySelectorAll('.title');
// item[0].innerHTML='<h3>ghello</h3>';


// let li=document.querySelectorAll('.list-group-item:nth-child(even)')
// let li1=document.querySelectorAll('.list-group-item:nth-child(odd)')

// for(let i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='red';
//     li[i].style.color='white';
//     li1[i].style.backgroundColor='blue';
//     li1[i].style.color='white';

// }

// let itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// //console.log(itemList.parentNode.parentNode)
// itemList.parentNode.style.backgroundColor="yellow"


// itemList.children[0].style.backgroundColor='green'
// itemList.firstElementChild.textContent='eminem'
// itemList.lastElementChild.innerHTML='<h1>hello</h1>'


// let div =document.createElement('div');
// div.appendChild(document.createTextNode('whatup'));
// let h1=document.querySelector('#header-title');
// h1.parentElement.insertBefore(div,h1)

// let button =document.querySelector('#button');
// button.addEventListener('mousedown',runEvent);

// //
// let box =document.querySelector('#box');

// let li1=document.getElementById('li1');

// let li2=document.getElementById('li2');

// let output = document.querySelector('#output');
// output.innerHTML ='<h1>what</h1>'


// box.addEventListener('mousemove',runEvent);



// function runEvent(e){
//     e.preventDefault();
//     output.innerHTML='<h3>mouse X:'+e.clientX+',</h3><h3>mouse Y'+e.clientY+'</h3>';
//     box.style.backgroundColor="rgb("+e.clientX+","+e.clientY+",40)";
// }
// function runEvent(e)
// {
//    // e.preventDefault();
//     // Create a new text node with the X coordinate and append it to li1
//     let textNode1 = document.createTextNode(`X Coordinate: ${e.clientX}`);
//     li1.innerHTML = ''; // Clear any existing content
//     li1.appendChild(textNode1);

//     let textNode2 = document.createTextNode(`Y Coordinate: ${e.clientY}`);
//     li2.innerHTML = ''; // Clear any existing content
//     li2.appendChild(textNode2);
// }
// // let output = document.querySelector('#output');
// // output.innerHTML ='<h1>what</h2>'

// let inputItem=document.querySelector('input[type="text"]')


// inputItem.addEventListener('cut',runEvent);
// inputItem.addEventListener('change',runEvent);

// function runEvent(e)
// {
//     console.log(e.type);

//     document.getElementById('output').innerHTML='<h2>'+e.target.value+'</h2>';
// }





// let ul= document.getElementById('items');
// let form=document.getElementById('addForm');
// let filter=document.getElementById('filter');

// filter.addEventListener('keyup',filterItem)
// form.addEventListener('submit',addItem);

// ul.addEventListener('dblclick',removeItem)
// function addItem(e)
// {
//     e.preventDefault();
// let itemtxt=document.getElementById('item').value;
// let li=document.createElement('li');
// li.className='list-group-item';
// let txt=document.createTextNode(itemtxt);
// li.appendChild(txt);

// let deleteBtn=document.createElement('button');
// deleteBtn.className='btn btn-danger btn-sm float-right delete';
// let de=document.createTextNode('X');



// deleteBtn.appendChild(de);
// li.appendChild(deleteBtn);




// ul.appendChild(li);
// }

// function removeItem(e)
// {
//     if(e.target.classList.contains('delete'))
//     {
//         if(confirm("are you sure ?"))
//         {
//             let li1=e.target.parentElement;
//             ul.removeChild(li1);
//         }
//     }
// }


// function filterItem(e) {
//     let text = e.target.value.toLowerCase();
//     let items = document.querySelectorAll('li');
//     let itemsArray = Array.from(items);
  
//     for (let i = 0; i < itemsArray.length; i++) {
//       let item = itemsArray[i];
//       let itemName = item.firstElementChild.textContent;
      
//       if (itemName.toLowerCase().indexOf(text) !== -1) {
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     }
//   }
  


// Get the elements by their IDs
let ul = document.getElementById('items');
let form = document.getElementById('addForm');
let filter = document.getElementById('filter');

// Add event listeners
filter.addEventListener('keyup', filterItem);

// function filterItem(e)
// {
//   let text=e.target.value.toLowerCase();
//   let items=document.getElementsByTagName('li');
//   Array.from(items).forEach(function(item)
//   { 
//     let itemname=item.firstElementChild.textContent;

//     if(itemname.toLowerCase().indexOf(text)!==-1)
//     {
//       item.style.display='block';
//     }
//     else
//     {
//       item.style.display='none';
//     }
    
//   });
// }







form.addEventListener('submit', addItem);

// Double click event listener to remove items
ul.addEventListener('dblclick', removeItem);

// Function to add an item
function addItem(e) {
  e.preventDefault();
  let itemText = document.getElementById('item').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  let text = document.createTextNode(itemText);
  li.appendChild(text);

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  let deleteText = document.createTextNode('X');
  deleteBtn.appendChild(deleteText);
  li.appendChild(deleteBtn);

  ul.appendChild(li);
}

// Function to remove an item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      ul.removeChild(li);
    }
  }
}

// Function to filter items based on the input
function filterItem(e) {
  let text = e.target.value.toLowerCase();
 // let ul = document.getElementById('items'); // Get the ul element by ID
  let items = ul.querySelectorAll('li'); // Select all <li> elements inside the ul

  items.forEach(function(item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

