const mongoose = require('mongoose');
const xlsx = require('xlsx');
const Lender = require('./models/Lender');

mongoose.connect('mongodb://localhost:27017/COHORT');

const workbook = xlsx.readFile('Lenders List Email Domain.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = xlsx.utils.sheet_to_json(sheet);

async function saveLenders() {
  for (let item of jsonData) {
    await Lender.create({
      lenderName: item['Lenders List'],
      domain: item['Email Domain'].replace('@', '').toLowerCase(),
    });
  }
  console.log('Lenders saved!');
  mongoose.disconnect();
}

saveLenders();