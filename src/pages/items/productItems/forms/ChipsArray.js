import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    maxWidth: 200
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" }
  ]);
  const [newChip, setNewChip] = React.useState("");

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setChipData((chips) => [
      ...chips,
      { key: chips.length + 1, label: newChip }
    ]);
    setNewChip("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <TextField
          label="Angular"
          variant="filled"
          value={newChip}
          onChange={(e) => setNewChip(e.target.value)}
          name="newChip"
        />
      </form>

      <Paper component="ul" className={classes.root}>
        {chipData.map((data) => {
          return (
            <li key={data.key}>
              <Chip
                label={data.label}
                onDelete={handleDelete(data)}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
    </div>
  );
}
