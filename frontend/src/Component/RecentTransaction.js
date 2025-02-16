import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { getBalance } from "../api";

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getBalance().then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Recent Transactions
        </Typography>
        <List>
          {transactions.map((tx, index) => (
            <React.Fragment key={tx.id}>
              <ListItem>
                <ListItemText primary={tx.description} secondary={tx.date} />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: tx.amount < 0 ? "red" : "green",
                  }}
                >
                  ${tx.amount}
                </Typography>
              </ListItem>
              {index < transactions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
