const express = require('express');
const app = express();
const port = 3000;

let availableNumbers = [1, 2, 3, 4, 5, 6]; // reset

app.get('/', (req, res) => {
  if (availableNumbers.length === 0) {
    return res.send('Tất cả các số đã được chọn.');
  }

  const randomIndex = Math.floor(Math.random() * availableNumbers.length);
  const selectedNumber = availableNumbers.splice(randomIndex, 1)[0];

  res.send(`Bạn đã nhận được số: <strong>${selectedNumber}</strong>`);
});

app.listen(port, () => {
  console.log(`App đang chạy tại http://localhost:${port}`);
});
