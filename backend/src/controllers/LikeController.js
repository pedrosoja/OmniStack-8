const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        console.log(`devId: ${req.params.devId}`);
        console.log(`user: ${req.headers.user}`);

        const { user } = req.headers;
        const { devId } = req.params;
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: 'Dev not exists'});
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log(`Deu MATCH entre ${targetDev.name} e ${loggedDev.name}`)
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);

    }
};