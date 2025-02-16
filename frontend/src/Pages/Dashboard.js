import React from "react";
import BalanceOverview from "../../src/Component/BalanceOverview";
import RecentTransactions from "../../src/Component/RecentTransaction";
import Tasks from "../../src/Component/Tasks";
import Sidebar from "../../src/Component/SideBar";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <BalanceOverview />
          </Grid>
          <Grid item xs={12} md={8}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12}>
            <Tasks />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
