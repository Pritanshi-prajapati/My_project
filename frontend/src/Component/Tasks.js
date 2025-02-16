import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { getTasks } from "../api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Tasks
        </Typography>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemIcon>
                <Checkbox edge="start" checked={task.completed} />
              </ListItemIcon>
              <ListItemText primary={task.task} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Tasks;
