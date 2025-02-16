import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { getBalance } from "../api";

const BalanceOverview = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getBalance().then((data) => setBalance(data.balance));
  }, []);

  return (
    <Card
      sx={{ bgcolor: "#2196f3", color: "white", textAlign: "center", p: 2 }}
    >
      <CardContent>
        <AccountBalanceWalletIcon sx={{ fontSize: 50 }} />
        <Typography variant="h6">Current Balance</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          ${balance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BalanceOverview;
