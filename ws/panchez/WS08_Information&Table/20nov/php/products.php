<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MADECOR - Wooden Cars Collection</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
    <?php include 'generateMenu.php'; ?>
    <header class="main-header">
        <div class="header-content">
            <div class="logo-container">
                <a href="../index.php"><img src="../img/Imagen de WhatsApp 2024-11-08 a las 08.30.38_cb68a820.jpg" alt="MADECOR Team" class="team-photo"></a>
                <div class="company-info">
                    <h1>MADECOR</h1>
                    <p class="slogan">Wooden Toys and Custom Furniture</p>
                </div>
            </div>
        </div>
    </header>

    <div class="top-menu">
        <?php generateMenu('../txt/menu.txt'); ?>
    </div>

    <div class="container">
        <div class="side-menu">
            <h3>Navigation</h3>
            <a href="#products">Products</a>
        </div>

        <main class="content">
            <section id="products">
                <h2>Wooden Cars Collection</h2>
                <hr>
                <table class="product-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../img/products/8aca6c0f3d50bc001fb668e526297a84.jpg" alt="Classic Wooden Car" class="product-image"></td>
                            <td>Classic Wooden Car</td>
                            <td>Handmade car with smooth finishes and non-toxic paint.</td>
                            <td>$15.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/images.jpg" alt="Vintage Wooden Truck" class="product-image"></td>
                            <td>Vintage Wooden Truck</td>
                            <td>Durable design, perfect for imaginative play.</td>
                            <td>$18.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/images (1).jpg" alt="Racing Wooden Car" class="product-image"></td>
                            <td>Racing Wooden Car</td>
                            <td>Streamlined shape for racing fun.</td>
                            <td>$14.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/546.jpg" alt="Mini Wooden Police Car" class="product-image"></td>
                            <td>Mini Wooden Police Car</td>
                            <td>Includes a painted siren and wheels for smooth rolling.</td>
                            <td>$12.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/images (2).jpg" alt="Eco-Friendly Wooden Bus" class="product-image"></td>
                            <td>Eco-Friendly Wooden Bus</td>
                            <td>Made from sustainable wood with vibrant colors.</td>
                            <td>$19.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/images (3).jpg" alt="Wooden Fire Truck" class="product-image"></td>
                            <td>Wooden Fire Truck</td>
                            <td>Functional ladder and non-toxic red paint.</td>
                            <td>$22.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/s-l1200.png" alt="Luxury Wooden Sedan" class="product-image"></td>
                            <td>Luxury Wooden Sedan</td>
                            <td>Sleek design with polished wooden finishes.</td>
                            <td>$16.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/20160923_212615.jpg" alt="Wooden Dump Truck" class="product-image"></td>
                            <td>Wooden Dump Truck</td>
                            <td>Movable parts for interactive play.</td>
                            <td>$20.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/images (4).jpg" alt="Retro Wooden Van" class="product-image"></td>
                            <td>Retro Wooden Van</td>
                            <td>Inspired by classic vans of the 60s.</td>
                            <td>$18.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/61qpwtNTW6S._AC_UF894,1000_QL80_.jpg" alt="Safari Wooden Jeep" class="product-image"></td>
                            <td>Safari Wooden Jeep</td>
                            <td>Perfect for adventure-themed playtime.</td>
                            <td>$17.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/images (5).jpg" alt="Wooden Ambulance" class="product-image"></td>
                            <td>Wooden Ambulance</td>
                            <td>Includes painted medical symbols for realistic play.</td>
                            <td>$14.99</td>
                        </tr>
                        <tr>
                            <td><img src="../img/products/81bwF7l0YrL.jpg" alt="Sports Wooden Car" class="product-image"></td>
                            <td>Sports Wooden Car</td>
                            <td>High-speed design with a smooth finish.</td>
                            <td>$15.99</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    </div>

    <footer class="footer">
        <div class="footer-content">
            <p>© 2025 MADECOR | All rights reserved</p>
            <p><a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
            <div class="social-links-footer">
                <a href="https://www.facebook.com/darwin.panchez/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/epciclon/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://x.com/NexxuzHD" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </footer>
</body>

</html>
