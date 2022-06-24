const { ethers } = require("ethers");

require("dotenv").config();

async function getBalance(address) {
    const network = "homestead";
    const provider = ethers.getDefaultProvider(network, {
        alchemy: process.env.ALCHEMY_API_KEY
    });

    const balance = await provider.getBalance(address)
    
    return balance
}

module.exports = { getBalance }