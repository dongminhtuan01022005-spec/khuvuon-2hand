const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Product Routes
const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);

// Customer Routes
const customerRoutes = require('./routes/customer');
app.use('/api/customers', customerRoutes);

// Plant Routes
const plantRoutes = require('./routes/plant');
app.use('/api/plants', plantRoutes);

// Contact Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Order Routes
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('Chào Lucius! Server đã sẵn sàng.');
});

app.listen(5000, () => {
    console.log('Server đang chạy tại http://localhost:5000');
});