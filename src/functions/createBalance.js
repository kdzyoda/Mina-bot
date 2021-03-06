const Balance = require('../schemas/balance');
const mongoose = require('mongoose');
const balance = require('../schemas/balance');

module.exports = (client) => {
    client.createBalance = async (member) => {
      let balanceProfile = await Balance.findOne({ memberId: member.id });
      if (balanceProfile) {
        return balanceProfile;
      } else {
        balanceProfile = await new Balance({
            _id: mongoose.Types.ObjectId(),
            memberId: member.id,
        });
        await balanceProfile.save().catch(err => console.log(err));
        return balanceProfile;
      }
    };
};