import express from "express";

const app = express();

/* in frontend : npm run build -> then move the 'dist' folder to the backend folder; & thus both runs on the same port
  it's never the optimised way because every time updating the frontend will change the dist of it so again we need to build the new dist & replace with previous one in the backend
  therefore using PROXY is more efficient */

app.use(express.static("dist")); // runs on the route: "/" 

/*
app.get("/", (req, res) => {
  res.send("Serevr is ready");
});
*/

// get a list of 5 motivational lines

app.get("/api/motivations", (req, res) => {
  const lines = [
    {
      id: 1,
      title: "A motivational line",
      content: "Don't fear failure",
    },
    {
      id: 2,
      title: "Another motivational line",
      content: "Believe in your potential",
    },
    {
      id: 3,
      title: "Third motivational line",
      content: "Every small effort counts",
    },
    {
      id: 4,
      title: "Fourth motivational line",
      content: "Never stop learning",
    },
    {
      id: 5,
      title: "Fifth motivational line",
      content: "Learn from mistakes",
    },
  ];
  res.send(lines);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
