// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

const Index = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    fs.readFile(
      "assets/allmatech.xml", 
      "utf8", 
      (err, data) => {
          if(err) {
            res.end(JSON.stringify({ error: err }));
          }

          res.end(JSON.stringify({ data }));
      }
    );     
}

export default Index;