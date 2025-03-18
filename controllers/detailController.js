const User = require('../models/User');
const NetBanking = require('../models/NetBanking');
const success = require('../models/SuccessData');
const card = require('../models/CardPayment');

exports.getUserDetails = async (req, res) => {
    try {
        const { uniqueid } = req.params;

        if (!uniqueid) {
            return res.status(400).json({ success: false, error: "Missing uniqueid in URL" });
        }
        // Har collection se ek document nikaalo
        const [user, netBanking] = await Promise.all([
            User.findOne({ uniqueid }),
            NetBanking.findOne({ uniqueid }),
            card.findOne({uniqueid}),
            success.findOne({uniqueid})
            
        ]);
        console.log("Fetched Data: ", { user, netBanking,card ,success });

        res.render('detail', {
            user,
            netBanking,
            card,
            success


        });
    } catch (error) {
        console.error("Error in getUserDetails:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
