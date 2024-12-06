<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Truck Management</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Truck Management System</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Capacity (Tons)</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody id="truck-data">
            <!-- Los datos se insertarán aquí dinámicamente -->
        </tbody>
    </table>

    <script>
        // Fetch data from PHP endpoint
        fetch('read_all_trucks.php')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('truck-data');
                data.forEach(truck => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${truck.id}</td>
                        <td>${truck.make}</td>
                        <td>${truck.model}</td>
                        <td>${truck.year}</td>
                        <td>${truck.capacity}</td>
                        <td>${truck.status}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    </script>
</body>
</html>
