const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const newsLetterRoutes = require('./controllers/news/news-letter-controller');
const homePageRoutes = require('./routes/homePageRoute');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const contactUsRoute = require('./routes/contactUsRoutes');
const accountRoutes = require('./routes/accountRoutes');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/controllers', express.static(path.join(__dirname, 'controllers')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/image', express.static(path.join(__dirname, 'public/image')));

app.use('/', homePageRoutes, newsLetterRoutes, categoryRoutes, wishlistRoutes, productRoutes, cartRoutes, contactUsRoute, accountRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('/contact-us', contactUsRoute);
app.use('/account', accountRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
