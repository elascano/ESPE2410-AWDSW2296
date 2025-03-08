# Shipping Cost Calculator

This project is a React application that calculates shipping costs based on the weight and distance of packages. It interacts with a backend service to manage shipping packages and compute costs.

## Features

- Input weight and distance of packages to calculate shipping costs.
- Display a list of shipping packages with their calculated costs.
- Add, update, and delete shipping packages.

## Project Structure

```
shipping-cost-calculator
├── public
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components          # React components
│   │   ├── ShippingForm.js # Form for inputting package details
│   │   ├── ShippingList.js # Displays list of packages
│   │   └── ShippingCost.js # Displays calculated shipping cost
│   ├── services            # Service for API interactions
│   │   └── shippingService.js # Functions to interact with backend
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   └── App.css             # Styles for the application
├── package.json            # npm configuration file
├── .env                    # Environment variables
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd shipping-cost-calculator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in the `.env` file. Make sure to include your MongoDB connection string.

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the `ShippingForm` component to input the weight and distance of a package.
- Submit the form to calculate the shipping cost.
- View the list of shipping packages and their costs in the `ShippingList` component.
- You can add, update, or delete shipping packages as needed.

## License

This project is licensed under the MIT License.