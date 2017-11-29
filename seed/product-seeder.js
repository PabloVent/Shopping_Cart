var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcHeSExjUYaYOh_l5mo7-5ALLTusK6QoNaVgmsmuuF1Tz64K8',
    title: 'Freiburg',
    description: 'awesome town!!!!!',
    price: 120
}),
new Product({
    imagePath: 'https://a.thumbs.redditmedia.com/41Jhg1UypfSljaq0JYfpITlAqlQNe1BwLn6SMwHCzX0.png',
    title: 'Overwatch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
    price: 160
}),

new Product({
    imagePath: 'http://i1-news.softpedia-static.com/images/news2/life-is-strange-review-pc-499548-2.jpg',
    title: 'Life is Strange',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
    price: 109
}),

new Product({
    imagePath: 'http://ih0.redbubble.net/image.198189443.1386/pp,220x200-pad,220x200,ffffff.jpg',
    title: 'Fire Emblem Fates: Revelation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
    price: 119
}),

new Product({
    imagePath: 'http://fontmeme.com/images/undertale-font.jpg',
    title: 'Undertale',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
    price: 310
}),

new Product({
    imagePath: 'http://static3.gamespot.com/uploads/scale_tiny/mig/4/6/3/2/2214632-box_ff12.png',
    title: 'Final Fantasy XII',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
    price: 1000
})
]

for (let i = 0; i < products.length; i++) {
    products[i].save();
    
}