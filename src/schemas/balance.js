const mongoose = require('mongoose');
const balanceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: { type: String, require: true, unique: true},
    amount: { type: Number, default: 2500 },
});

module.exports = mongoose.model('Balance', balanceSchema, 'balances');