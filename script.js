 const toggole =  document.querySelector('#themeToggle');
 const mainForm = document.querySelector('#taskForm');
 const taskTittle = document.querySelector('#taskTitle');
 const taskCatagory = document.querySelector('#taskCategory');
 let hadingcolor = document.querySelector('#takflow')

 toggole.addEventListener('click',()=>{
    const currentTheme = document.body.getAttribute('data-theme');
    if(currentTheme==='light'){
       document.body.setAttribute('data-theme', 'dark');
        toggole.innerText = '☀️';
    }else{
       document.body.setAttribute('data-theme', 'light');
        toggole.innerText = '🌙';
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
            <button  class="btn btn-small btn-edit">Edit</button>
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
 if(e.target.classList.contains('btn-edit')){
    const card = e.target.closest('.task-card');
    const  titleSpan = card.querySelector('.task-title');
    const input = document.createElement('input');
    input.type ='text';
    input.value = titleSpan.innerText;
    input.className='edit-input';
    titleSpan.replaceWith(input);
    input.focus();
    input.addEventListener('keydown',(e)=>{
        if(e.key==='Enter'){
        titleSpan.innerText = input.value;
        input.replaceWith(titleSpan)
        }
    })
 }
})
const gp = document.querySelector('#grandparent');
const p = document.querySelector('#parent');
const c = document.querySelector('#child');
function showPropagation(p){
    const box = document.createElement('div');
    box.innerText = p;
    box.style.color='red';
    box.style.fontWeight='bold';
    document.querySelector('#event-demo').appendChild(box);
    setTimeout(()=>
        box.remove(),2000)
}
gp.addEventListener('click',()=>{
console.log('gradpatent:Bubbling');
showPropagation('gradpatent:Bubbling')
},false)
p.addEventListener('click',()=>{
console.log('patent:Bubbling');
showPropagation('patent:Bubbling')

},false)
c.addEventListener('click',()=>{
console.log('child:Bubbling');
showPropagation('child:Bubbling')
},false)
gp.addEventListener('click',()=>{
console.log('gradpatent:capcharing');
showPropagation('gradpatent:capcharing')
},true)
p.addEventListener('click',()=>{
console.log('patent:capcharing');
showPropagation('patent:capcharing')
},true)
c.addEventListener('click',()=>{
console.log('child:capcharing');
showPropagation('child:capcharing')
},true)




 