const bmiModel = require('../models/bmiModel');

class BMIController {
  calculate(req, res) {
    const { weight, height } = req.body;
    const bmi = bmiModel.calculateBMI(weight, height);
    const interpretation = bmiModel.interpretBMI(bmi);
    res.json({ bmi, interpretation });
  }
}

module.exports = new BMIController();
