function greetUser(){

    var responseName = prompt('What is your name?');
    var order = prompt('Do you prefer cranberry sauce or gravy?');
    var item, quantity;
    var items = '';

    while(order !== 'cranberry sauce' && order !== 'gravy'){
        order = prompt('Please enter cranberry sauce or gravy')
    }

    quantity = prompt('How many Turkeys are you going to eat?');
    // quantity = Number(quantity);

    while( isNaN(quantity) ){
        quantity = prompt('Please enter a numeric value...');
    }

    if(quantity){
        item = '<img src="https://www.goodfreephotos.com/albums/vector-images/turkey-with-pilgrim-hat-vector-file.png"  width="30px" height="30px">';
        for(var i = 0; i < quantity; i++ ){
            // 
            document.write(item);
    }
    }

    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon';
    } else if (hourNow > 0) {
        greeting = 'Good morning';
    } else {
        greeting = 'Happy November';
    }

    document.write('<h3>' + greeting + ',' + ' ' + responseName + '!' + '</h3>');
}
