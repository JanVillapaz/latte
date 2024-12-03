# Budget Management System 🏡💰

A personal budget management system to track expenses, income, and savings goals, designed to help save for a condo. Built using **Spring Boot** for the backend and **React** for the frontend.

---

## 📂 Project Structure
```console
latte/
├── matcha/            # Spring Boot backend
├── mocha/
│   └──cappuccino/     # React frontend
├── .gitignore         # For Git version control
├── README.md          # Project documentation
├── LICENSE            # License file
```


### Backend (`matcha/`)
- **Technology**: Spring Boot, Java 23, PostgreSQL.
- **Features**:
    - RESTful APIs for managing income, expenses, and savings goals.
    - Persistent storage with a relational database.
    - Data validation and business logic encapsulated in services.

### Frontend (`cappuccino/`)
- **Technology**: React, Axios, Recharts (for data visualization).
- **Features**:
    - Dynamic UI for tracking and visualizing budget data.
    - Forms to add/edit income, expenses, and savings goals.
    - Dashboard with charts showing spending trends and savings progress.

---

## 🚀 Getting Started

### Prerequisites
- Java 23 (for Spring Boot)
- Node.js (for React)
- PostgreSQL (for the database)

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd latte
```

### 2. Run the Backend (Spring Boot)
1. Navigate to the backend folder
```bash
cd matcha
```

2. Configure the database in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/budget_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Run the applcation:

```bash
mvn spring-boot:run
```

### 3. Run the Frontend (React)

1. Navigate to the frontend folder:
```bash
cd cappuccino
```
2. Install dependencies
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

----
## 🛠️ Features
1. Income Tracking:
- Add, edit, and delete income entries.
2. Expense Tracking:
- Categorize and track spending in real-time.
3. Savings Goal:
- Define savings goals and monitor progress.
4. Budget Analysis:
- Visualize spending with charts and graphs.

---

## 🛡️ Technologies Used
### Backend:
- Spring Boot
- Java 23
- PostgreSQL
- Hibernate (JPA)
- Spring Data JPA
- Spring Web (REST APIs)

### Frontend:
- React
- Axios
- Recharts (charts and graphs)
- CSS/Tailwind (for styling)

----

## 📊 API Endpoints (Backend)

| Method |Endpoint | Description |
|---|-|-|
|GET|`/api/incomes`|Get all income entries|
|POST|`/api/incomes`|Add a new income entry|
GET|`/api/expenses`|Get all expense entries|
POST|`/api/savings-goals`|Add a new expense entry|
GET|`/api/savings-goals`|Get current savings goals|
POST|`/api/savings-goals`|Set a new savings goal|

----
## 📈 Future Improvements
- Add authentication for multiple users.
- Enable exporting reports (PDF/CSV).
- Add a mobile app version using React Native.
- Add a dashboard that will project monthly expenses

----
## 🤝 Contributing
Feel free to fork this repository and submit pull requests! Suggestions for improvements are always welcome.

----
## 📄 License
This project is licensed under the MIT License - see the [LICENSE](../latte/LICENSE) file for details.

----
## 🙋‍♀️ Author
Developed with ❤️ by Jan.

----
## 🎯 Goal
Help track my finances and save for a house!
