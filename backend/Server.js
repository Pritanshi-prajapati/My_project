const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const balanceData = {
  balance: 7500,
  transactions: [
    {
      id: 1,
      date: "2024-02-15",
      description: "Grocery",
      amount: -50,
      balance: 7450,
    },
    {
      id: 2,
      date: "2024-02-14",
      description: "Salary",
      amount: 2000,
      balance: 7500,
    },
    {
      id: 3,
      date: "2024-02-13",
      description: "Electricity Bill",
      amount: -100,
      balance: 5500,
    },
    {
      id: 4,
      date: "2024-02-12",
      description: "Freelance Payment",
      amount: 1500,
      balance: 5600,
    },
    {
      id: 5,
      date: "2024-02-10",
      description: "Netflix Subscription",
      amount: -15,
      balance: 4100,
    },
  ],
};

const tasksData = [
  { id: 1, task: "Verify your email", completed: false },
  { id: 2, task: "Set up 2FA", completed: false },
  { id: 3, task: "Add a payment method", completed: true },
  { id: 4, task: "Enable notifications", completed: false },
  { id: 5, task: "Update your profile information", completed: true },
  { id: 6, task: "Read the getting started guide", completed: false },
];

app.get("/api/balance", (req, res) => {
  res.json(balanceData);
});

app.get("/api/tasks", (req, res) => {
  res.json(tasksData);
});

app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});
