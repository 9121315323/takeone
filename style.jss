/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

header .logo {
  font-size: 1.5em;
  font-weight: bold;
}

header nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

header nav ul li {
  margin: 0 10px;
}

header nav ul li a {
  color: white;
  text-decoration: none;
}

section {
  padding: 20px;
  text-align: center;
}

#products .product-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.product {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  text-align: center;
}

.product img {
  max-width: 100%;
  border-radius: 5px;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
