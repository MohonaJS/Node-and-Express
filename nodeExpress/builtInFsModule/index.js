const fs = require('fs');


//om det inte finns nån file, då ska den skapa en fil, om det finns då ska den göra override
/* fs.writeFile('home.html', 'This is my home page', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("successful");
    }
} )
 */

 // na thakle file create korbe, r thakle ager data er sate add korbe

/* fs.appendFile('about.html', 'some data added', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("successful");
    }
} ) */
/* fs.readFile('about.html', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log("welcome back");
    }
} ) */
/* fs.rename('about.html', 'style.html', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log("style page renamed successfully");
    }
} ) */
fs.unlink('about.html', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log("about page deleted successfully");
    }
} )

