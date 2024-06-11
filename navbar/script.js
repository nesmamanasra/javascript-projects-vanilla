// classList - shows/gets all classes 
// contains -  checks classList for spescific class 
// add - add class
// remove -  remove class
// toggle - toggles class


// contains - is used to check whether or not a collection contains a specific item. If the item is present, it returns true; otherwise, it returns false
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click',function(){
   // console.log(links.classList)
   //console.log(links.classList.contains('random'))
   //console.log(links.classList.contains('links'))

//    if(links.classList.contains('show-links')){
//     links.classList.remove('show-links')
//    }else{
//     links.classList.add('show-links')
//    }

    links.classList.toggle('show-links')
})