# Shipping Cost Calculator

This project is a Node.js application that calculates shipping costs based on package weight and shipping distance. It connects to a MongoDB database to retrieve package data and perform calculations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/shipping-cost-calculator.git
   ```

2. Navigate to the project directory:
   ```
   cd shipping-cost-calculator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://JoseIP:1234@school.h9lw5.mongodb.net/Shipping?retryWrites=true&w=majority
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The application will run on `http://localhost:3000`.

## API Endpoints

- **Calculate Shipping Cost**
  - **Endpoint:** `POST /calculate`
  - **Request Body:**
    ```json
    {
      "weight": <package_weight>,
      "distance": <shipping_distance>
    }
    ```
  - **Response:**
    ```json
    {
      "totalCost": <calculated_shipping_cost>
    }
    ```

## License

This project is licensed under the MIT License.