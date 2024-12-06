const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const homePageRoutes = require('./routes/homePageRoute');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', homePageRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/wishlist', wishlistRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/html/Homepage.html");
// });
 
// app.post('/', (req, res) => {
  
//     const config = {
//         method: "post",
       
//     };
 
//     axios(config)
//         .then(response => {
//             if (response.status === 200 && response.data.error_count === 0) {
//                 console.log(`user :`, req.body.email);
//                 res.sendFile(__dirname + '/html/login.html');
//             } else {
//                 console.log(`something went wrong`);
//                 res.sendFile(__dirname + '/html/register.html');
//             }
//         }
//         )
//         .catch(error => {
//             console.error(error);
//           });
// });
 
// app.post('/failure', (req, res) => {
//     res.redirect('/');
// });