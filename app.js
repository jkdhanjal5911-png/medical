const express = require('express');
const { exec } = require('child_process');

const app = express();

// PHP file run karan di koshish (XAMPP PHP use karke)
app.get('/', (req, res) => {
  exec('php public/index.php', (error, stdout, stderr) => {
    if (error) {
      res.send('Error: ' + error.message);
      return;
    }
    if (stderr) {
      res.send('Error: ' + stderr);
      return;
    }
    res.send(stdout); // PHP da output show karega
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});