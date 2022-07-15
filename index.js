const express = require("express");
const app = express();
const PORT = 5001;

app.listen(PORT, console.log(`it's alive on http://localhost:${PORT}`));

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});

// to test this, go to thunder client and in the "enter URl" section at the top,
// enter "http://localhost:5001/tshirt/23"
// then click the drop down box to the left of it and click post
// the ngo to the body section below the url bit and click on json
// then enter the json content, which would look like this "{"logo": "🔥"}"
// then click send, it should appear with a status 200 and the content that is in the res.send portion of the index page
