 const toggole =  document.querySelector('#themeToggle');
 const mainForm = document.querySelector('#taskForm');
 const taskTittle = document.querySelector('#taskTitle');
 const taskCatagory = document.querySelector('#taskCategory');
 let hadingcolor = document.querySelector('#takflow')

 toggole.addEventListener('click',()=>{
    if(document.body.style.backgroundColor==='black'){
        document.body.style.backgroundColor='white';
        hadingcolor.style.color = 'black';
    }else{
       document.body.style.backgroundColor = 'black';
        hadingcolor.style.color = 'white';
    }
 })
const taskList = document.querySelector('#taskList')
 function updateStats(){
    const allCards= document.querySelectorAll('.task-card');
    let total = allCards.length;
    let complete = 0 ;
    allCards.forEach(element => {
        if(element.getAttribute('data-status')==='completed'){
            complete++;
        }
    }); 
   document.querySelector('#total-tasks').innerText = total;
   document.querySelector('#pending-tasks').innerText=total-complete;
   document.querySelector('#completed-tasks').innerText=complete;

 }

mainForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inp1 =  taskTittle.value;
    let inp2 = taskCatagory.value;
    let create = document.createElement('div');
    create.classList.add('task-card');

    create.setAttribute('data-id',Date.now());
    create.setAttribute('data-status','pending');
    create.setAttribute('data-Catagory',inp2);
    create.innerHTML =`<div class="task-header">
            <span class="task-title">${inp1}</span>
            <span class="category-badge">${inp2}</span>
        </div>
        <div class="actions">
            <button class="btn btn-small btn-edit">Edit</button>
            <button class="btn btn-small btn-complete">Complete</button>
            <button class="btn btn-small btn-delete">Delete</button>
        </div>`;
        taskList.appendChild(create);
        mainForm.reset();
        updateStats()

 })  
 taskList.addEventListener('click',(e)=>{
   if(e.target.classList.contains('btn-delete')){
    const card = e.target.closest('.task-card');
    card.remove();
    updateStats()
   }
  if(e.target.classList.contains('btn-complete')){
    const card = e.target.closest('.task-card');
    card.setAttribute('data-status','completed') 
    updateStats()   
 }
})



 