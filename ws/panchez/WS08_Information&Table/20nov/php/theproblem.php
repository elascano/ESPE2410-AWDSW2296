<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MADECOR - Problem</title>
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
                    <p class="slogan">Educational Materials, Children's Furniture, and Toys</p>
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
            <a href="#problem">Problem</a>
        </div>

        <main class="content">
            <section id="problem">
                <h2>The Problem</h2>
				<hr>
                <h3>Implementation of a Web-based Inventory and Sales Management System for Educational Materials at “MADECOR”</h3>
						<h1>Problem</h1>

						<p>MADECOR needs a system that allows it to manage its wooden educational materials inventory in an automated and digital way, to improve stock control and facilitate the sale of these products to its customers online. Currently, MADECOR uses a traditional paper-based method to record its stock, which is inefficient and increases the risk of errors in inventory management.</p>
						<br>
						<p>To understand what the system must do, it is important to consider the key aspects of the wooden educational materials inventory, the stock update process, and direct sales to the end customer. This system must also offer a web interface accessible from any device, where customers can view a digital catalog, select products, and complete their orders through a shopping cart. We will focus on developing basic inventory, product catalog, and online sales management functionalities, simplifying purchasing operations for customers and management for administrators.</p>
						<br>
						<h1>Overview</h1>

						<p>In the field of education and learning, wooden educational materials offer distributors and educators essential resources to support children's cognitive and motor development.
						MADECOR, a company specializing in the manufacture of these materials, has traditionally operated without a digital system, limiting itself to the use of paper records to keep track of inventory. However, in recent years, MADECOR has recognized the importance of modernizing its processes to make it easier for its customers to acquire products and improve internal efficiency.</p>
						<br>
						<p>To achieve these goals, it seeks to implement a digital system that automates inventory management and allows its customers to access an online catalog with purchasing functions. This system will not only optimize stock control and reduce errors, but will also increase the company's visibility in the market, facilitating direct purchasing through a web platform accessible from any device.</p>
						<br>
						<h1>Background</h1>

						<p>MADECOR is a company that manufactures and distributes wooden educational materials, stories such as building blocks, puzzles and educational figures. For years, MADECOR has operated with traditional methods for managing its inventory, using only paper records. Each manufactured product is recorded in notebooks, noting the quantity available and outputs to fulfill orders from distributors and retailers. However, this manual system is prone to errors and makes decision-making difficult, such as stock control and sales tracking.</p>
						<br>

						<p>In today's market, distributors and educators need quick access to information about educational products. The lack of a digitalized system and an online platform limits MADECOR's reach, making it difficult to both internal inventory control and customer access to an updated product catalog. To solve this, it is proposed to implement a web-based inventory and sales management system that facilitates inventory consultation and the purchasing process.
						This digital system includes an online catalog where customers will be able to view products, select the necessary quantities, and place orders through a shopping cart. In addition, the system will allow MADECOR managers to automatically update inventory when sales are made and receive alerts when stock levels are low. Products will be identified by specific codes, and each sales transaction will include details about the product, quantity, transaction date, and sales price.</p>
						
						<p>Key data that the system handles:</p>

						<li>Product code: A short string that identifies each educational material. For example, building blocks are code "BLK01", while puzzles are code "PZL02".</li>
						<li>Quantity (Q): An integer representing the quantity of each product available in inventory.</li>
						<li>Date entered (FI): The date and time of each batch of products entering inventory, in minutes since January 1, 2024.</li>
						<li>Purchase price (PC): An integer representing the purchase price of the product in cents. For example, 2500 indicates a price of $25.00.</li>
						<li>Date of sale (FV): The date and time of each sale in minutes since January 1, 2020.</li>

						<li>Sales price (PV): An integer representing the sales price in cents. For example, 3200 indicates a price of $32.00.</li>
						<li>Shipping Cost (SC): An integer representing the shipping cost of each transaction in cents, if applicable.</li>
				</div>

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
                <a href="https://x.com/NexxuzHD?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </footer>
</body>

</html>
