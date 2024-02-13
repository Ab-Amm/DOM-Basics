//this first line ensure that nothing is executed until an event happens, which is the content of the page being loaded
document.addEventListener('DOMContentLoaded', ()=>{



    //--------------------------------------------------------------------------------------------------------
    //navigation behavior (the goal here is to scroll to the selected option and highlight it with a black border)
    //first we grab to our js the drop down menu and put in in a variable called task
    const task = document.getElementById('task-dropdown');
    //we need to know which option is selected that's why we added a change event listener to the dropdown menu
    task.addEventListener('change', () => {
        //now we will put the selected option inside a variable called selected task
        const selectedTask = task.value;
        //then we will grab all of the elements with the specified classes below (queryselectorall()), so that we can iterate over all of them (foreach()) and apply changes(initially reove borders if they already exist)
        const allTasks = document.querySelectorAll('.container, .contdim, .contdark, .contmidnight');
        allTasks.forEach(task => {
            task.style.border = 'none';
        });
        //now we put a condition to ensure no null value is selected
        if (selectedTask) {
            //we put the container that has the value of the option as it's id in a variable
            const element = document.getElementById(selectedTask);
            //we set an offset so that we canavoid the nav bar
            const offset = element.offsetTop - 120; 
            //now we scroll
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            //let's apply a black border to the selected item
            element.style.border = '5px solid black';
        }
    
    });



    //--------------------------------------------------------------------------------------------------------
    //Welcoming the user
    //what we need to do is take a value entered in an input field and put it next to a welcoming message after hiding the = previous fields
    const b = document.getElementById('ok_btn');
    const w = document.getElementById('welcome-message');
    //after selecting the button and the area in which the text will be displayed, we add a click event listener to the buttton so that once we click we exectue the function
    b.addEventListener('click', ()=>{
        const n = document.getElementById('welcome-message1').value;
        w.textContent = n;
        //we took the value inside that input field which has that specified id, and replace that whole system (button and span) which was inside the text content of the <p> with it
    });



    //--------------------------------------------------------------------------------------------------------
    //Show Input
    //same logic as the previous one
    const textbox = document.getElementById('tbox');
    const btn = document.getElementById('btn');
    //this one funtions when we click enter
    textbox.addEventListener('keydown', (event)=>{
            let textvalue = textbox.value;
            let show = document.getElementById('show');
            if(event.key === 'Enter'){
            show.textContent = textvalue;
        }
    });
    //this one funtions when we click on the button
    btn.addEventListener('click', ()=>{
        let textvalue = textbox.value;
        let show = document.getElementById('show');
        show.textContent = textvalue;
    });


    //--------------------------------------------------------------------------------------------------------
    //Add/Remove Elements
    const textbox2 = document.getElementById('tbox2');
    const btn2 = document.getElementById('btn2');
    const textbox3 = document.getElementById('tbox3');
    const btnn = document.getElementById('btnn');
    
    const todo = document.getElementById('todo');

    btn2.addEventListener('click', ()=>{
        let task = textbox2.value;
        let li = document.createElement('li'); 
        li.textContent = task;
        todo.appendChild(li); //adds the created li element to the "todo" element, which identifies the <ul> element in our html
    });
    btnn.addEventListener('click', ()=>{
        let task_to_remove = textbox3.value;
        let mylist = document.querySelectorAll('li');
        mylist.forEach( item =>{
            if(item.textContent == task_to_remove){
                item.remove(); //this one deletes the element from our html
            }
        });
    });


    //--------------------------------------------------------------------------------------------------------
    //Choose Theme
    //first we grab all of the things we want changed, so container divs and navbar an footer and buttons
    const select = document.getElementById('theme');
    const select_container = document.querySelectorAll('.container');
    const buttons = document.querySelectorAll('button');
    const navbar = document.getElementById('nav');
    const footer = document.getElementById('footer');
    select.addEventListener('change', () => {
    //this can be achieved using a button using the click eventLlistener (classlist.toggle() is useful here), or a radio (different logic tho) or whatever really, try a different one yourself  
        buttons.forEach(button => {
            select_container.forEach(container => { //foreach is explained indetail in the next task
                let theme = select.value;
                if (theme === '1') {
                    document.body.className = ''; //clears the class list, so like default
                    container.className = 'container'; // so .classname sets the class="" field in html to this given one
                    button.className = 'button';
                    navbar.className = '';
                    footer.className = '';
                } else if (theme === '2') {
                    document.body.className='midnight'; 
                    container.className='container contmidnight';
                    button.className = 'button_midnight';
                    navbar.className = 'navmidnight';
                    footer.className = 'footermidnight';
                } else if (theme === '3') {
                    document.body.className = 'dark'; 
                    container.className='container contdark'; 
                    button.className = 'button_dark';
                    navbar.className = 'navdark';
                    footer.className = 'footerdark';
                }
                else if (theme === '4') {
                    document.body.className= 'dim'; 
                    container.className= 'container contdim';
                    button.className = 'button_dim';
                    navbar.className = 'navdim';
                    footer.className = 'footerdim';
                    //don't forget that all of thesec lasses should be already made up in  our css file
                }
            });
        });
    });


    //--------------------------------------------------------------------------------------------------------
    //Checkboxes
    //the idea is to check all of the checkboxes or uncheck them all at once,weused sports as an example and we displayed the checked ones in an alert message
    const checkboxes = document.querySelectorAll('.sport');
    const checkAll = document.getElementById('check_all');
    const uncheckAll = document.getElementById('uncheck_all');
    const submit = document.getElementById('submit');

    checkAll.addEventListener('click', ()=>{
        checkboxes.forEach(check =>( // so basically when we select using querySelectorAll, it returns all the elements with that class or id or whatever selector you chose, so we use foreach toiterate over all of them and apply changes to each one individually, you'll notice that if we use queryselector it returns only the first element that matches the selctor
            check.checked =true // .checked is used here to manipulate it directly and make it true
        ))
    })

    uncheckAll.addEventListener('click', ()=>{
        checkboxes.forEach(check =>( 
            check.checked =false
        ))
    })

    let sports_array = []; //array where we'll push the checked sports
    submit.addEventListener('click',()=>{ 
        sports_array = []; // emptying the array to refill it
        checkboxes.forEach(check =>{
            if(check.checked==true){
                sports_array.push(check.value);
            }
        })
        if(sports_array.length != 0){
            //printing the results in an alert message
        alert("Cool! You practice: " + sports_array.join(', ')); // the .join converts the array elements to a string, this method allows you to customize the separator, here i am choosing a comma and a space, you can also use the .tostring method, but all it does is add a comma between the elements
        } else {
            alert("So... No Sports?")
        }
    })



    //--------------------------------------------------------------------------------------------------------
    //Dice Throwing until a 6
    //we will keep throwinf=g dice until we get a 6, then we can no longer do so
    const img = document.getElementById('dice_image');
    const btn3 = document.getElementById('throw');

    btn3.addEventListener('click', func= ()=>{//normally we were to use the anonymous function as we did in all of the previous examples, but now we will need to remove the eventListener once we get a 6 on our ra9m variable, hence the usage of the varianble assignment to func
        let ra9m = Math.ceil(Math.random()*6); // we will store in the ra9m variable a random value between 1 and 6, this is done with the halp of math.random which generates a random 0<number<1, we multiply it by 6 to get 0<number<6, the we use the math.ceil to round it up and get an int instead of a float
        
        img.src = `pictures/dice${ra9m}.png`;
        //you can also use something like img.src = 'pictures/dice' + ra9m + '.png';
        //note that this works purely because we named our pictures accordingly, if you ever had a file with different pictures and each has a unique name structure, then that's a hassle we'll discuss in some other time

        if(ra9m == 6){
            btn3.removeEventListener('click', func); //now when we'll get a 6 on our dice, it'l get stuck there, because we removed the func function from the click event
        }
    });



    //--------------------------------------------------------------------------------------------------------
    //managing layers
    //hide and diplay elements at will
    const btn4 = document.getElementById('submit1');
    btn4.addEventListener('click', ()=>{
        let comment = document.getElementById('comment').value; //we just stored what the user gave us in a variable to diplay it later
        document.querySelector('.layer1').style.display = 'none'; //first time accessing css element properties, we used (our element).style.(what we want to change)
        document.querySelector('.layer2').style.display = 'flex'; 
        document.getElementById('show_comment').innerText = comment;
    })
    const btn6 = document.getElementById('back');//this button takes us back to the previous layer
    btn6.addEventListener('click',()=>{
        document.querySelector('.welcome').style.display = 'none';
        document.querySelector('.login_container').style.display = 'flex';
    })


    //--------------------------------------------------------------------------------------------------------
    //Control html Default behavior
    //before writing this code, once we click submit, it takes us to the other page by default, we don't want that, we'll make it so that the user is sent to the other page only if they enter the correct information
    const submit_button = document.getElementById('btn_submit');
    //we set some predefined values to make it easier to showcase
    const user = 'Abderrahmane';
    const pass = 'abc123';

    submit_button.addEventListener('click', (default_event)=>{
        default_event.preventDefault(); //we prevented the submit button default behavior
        let u1 = document.getElementById('username').value;
        let p1 = document.getElementById('password').value;
        if(user == u1 && pass == p1){
            document.getElementsByTagName('form')[0].submit(); // so here, getelementbytagname return a node list (which is an array like object) containing all of the elements with the tag ('form'), so we use an index specifer [0]tplet it know that we are intrested in the first one, then we apply the submit() method.
        } else {
            //if the informationsare incorrect, we need to create a red paragraph with a corresponding message
            let para = document.createElement('p');
            para.textContent = 'Username or Password incorrect';
            para.style.color = 'red';
            //you might already know it but, here's the syntaxe (html elementinside of which we want to add the created element).appendchild.(createdelement)
            document.getElementsByTagName('form')[0].appendChild(para);
        }
    });

    //--------------------------------------------------------------------------------------------------------
    //Show\hide password
    const password = document.getElementById('pass');
    const ch =document.getElementById('check1');

    ch.addEventListener('click', ()=>{
        if (ch.checked){
            password.setAttribute('type', 'text'); // .setattribute can set any html element's attribute (first argument) to what we input (second one)
        } else {
            password.setAttribute('type', 'password');
        }
    })
    

    //--------------------------------------------------------------------------------------------------------
    // mock login system
    //it'll verify if the username and passeword match the ones inside our object array, if so it'll display a welcoming message withe the object's given name
    let users = [
        {username:'first', password:'first123', name:'john Doe'},
        {username:'second', password:'second123', name:'Dale Carnegie'},
        {username:'third', password:'third123', name:'Robert Pistachio'},
    ]

    const btn5 = document.getElementById('login_button');
    btn5.addEventListener('click', ()=>{
        let u = document.getElementById('usern').value;
        let p = document.getElementById('passw').value;
        let logged = false;
        let user_index = -1;
        for (let i = 0; i < users.length; i++ ){
            if(u == users[i]['username'] && p == users[i]['password']){
                logged = true;
                user_index = i;
                break;
            }
        }
        if(logged){
            document.querySelector('.welcome').style.display = 'flex';
            document.getElementById('wlcm_msg').textContent = `Welcome ${users[user_index]['name']}`; // if you want to use ${}, make sure to use " ` " instead of " ' "
            document.querySelector('.login_container').style.display = 'none';
        }

    })
    

});






