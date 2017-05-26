function init() {
    
    // Hide Order
    document.querySelector('.btn-start').classList.toggle('btn-gone');
    
    // Burger Bun Top Appear
    var bunTop = document.createElement('div');
    bunTop.innerHTML = '<img src="/Assets/bun-top.png" />';
    bunTop.className = "bun";
    document.getElementById('top').appendChild(bunTop);
    
    // Burger Bun Bottom Appear
    var bunBottom = document.createElement('div');
    bunBottom.innerHTML = '<img src="/Assets/bun-bottom.png" />';
    bunBottom.className = "bun";
    document.getElementById('end').appendChild(bunBottom);
    
    // Start Choice Bar
    document.getElementById('action-bar').classList.remove('choice-bar-inactive');
    document.getElementById('action-bar').classList.add('choice-bar');
    
}

function tomatoAdd() {
    // New Div
    var tomato = document.createElement('div');
    tomato.innerHTML = '<img src="/Assets/topping-tomato.png" />';
    document.getElementById('top').appendChild(tomato);
}

function lettuceAdd() {
    // New Div
    var lettuce = document.createElement('div');
    lettuce.innerHTML = '<img src="/Assets/topping-lettuce.png" />';
    document.getElementById('top').appendChild(lettuce);
}

function cheeseAdd() {
    // New Div
    var cheese = document.createElement('div');
    cheese.innerHTML = '<img src="/Assets/topping-cheese.png" />';
    document.getElementById('top').appendChild(cheese);
}

function beefAdd() {
    // New Div
    var beef = document.createElement('div');
    beef.innerHTML = '<img src="/Assets/topping-beef.png" />';
    document.getElementById('top').appendChild(beef);
}

function picklesAdd() {
    // New Div
    var pickles = document.createElement('div');
    pickles.innerHTML = '<img src="/Assets/topping-pickles.png" />';
    document.getElementById('top').appendChild(pickles);
}

/*
// Topping Cost
var toppingCost = .6;
var toppingCost = .3;
var toppingCost-cheese = .5;
var toppingCost-beef = 2;
var toppingCost-pickles = .2;



/*
function takeOrder(){
var orderOffer = prompt('Welcome to Good Burger. Home of the Good Burger. Can I take your order? \"y\" or \"n\"');

if (orderOffer === 'y') {
    var foodOrder = prompt('What would you like to eat? A \"burger\" or \"nuggets\"?');
} else if (orderOffer === 'n') {
    alert ('Then why did you come to Good Burger?');
    alert('You leave Good Burger');
} else {
    alert('Uhhhh... did you want food or not?');
}


if (foodOrder === 'burger') {
        var burgerToppings = prompt('What all do you want on your burger?');
        var friesYN = prompt('Do you want fries with that? \"y\" or \"n\"');
        var shakeYN = prompt('What about a delicious milkshare? \"y\" or \"n\"')
            if (friesYN === 'y' && shakeYN === 'y') {
                alert('So a burger with ' + burgerToppings + ', fries, and a shake.')
                alert('Your total is ' + '$' + (burgerCost + fryCost + shakeCost));
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } else if (friesYN === 'y' && shakeYN === 'n') {
                alert('So a burger with ' + burgerToppings + ' and fries.')
                alert('Your total is ' + '$' + (burgerCost + fryCost));
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } else if (friesYN === 'n' && shakeYN === 'y') {
                alert('So a burger with ' + burgerToppings + ' and a shake.')
                alert('Your total is ' + '$' + (burgerCost + shakeCost));
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } else {
                alert('So a burger with ' + burgerToppings + '.');
                alert('Your total is ' + '$' + burgerCost);
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } 
     
    
    } else if (foodOrder === 'nuggets') {
        var nugSauce = prompt('What kind of dipping sauce would you like?');
        var friesYN = prompt('Do you want fries with that? \"y\" or \"n\"');
        var shakeYN = prompt('What about a delicious milkshare? \"y\" or \"n\"')
            if (friesYN === 'y' && shakeYN === 'y') {
                alert('So nuggets with ' + nugSauce + ' for dipping, fries, and a shake.')
                alert('Your total is ' + '$' + (nuggetCost + fryCost + shakeCost));
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } else if (friesYN === 'y' && shakeYN === 'n') {
                alert('So nuggets with ' + nugSauce + ' for dipping and fries.')
                alert('Your total is ' + '$' + (nuggetCost + fryCost));
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } else if (friesYN === 'n' && shakeYN === 'y') {
                alert('So nuggets with ' + nugSauce + ' for dipping and a shake.')
                alert('Your total is ' + '$' + (nuggetCost + shakeCost));
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } else {
                alert('So nuggets with ' + nugSauce + ' for dipping.');
                alert('Your total is ' + '$' + nuggetCost);
                alert('Please send your payments to Austin\'s Venmo: @Austin-Peachey');
                alert('Thanks for coming to Good Burger!');
            } 
    }
        else {
                foodOrder = prompt('Dude... that is not on the menu. Can you please just order a \"burger\" or \"nuggets\"? ')
            }
    }

*/

