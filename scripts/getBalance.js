const { ethers } = require("ethers");
require("dotenv").config();

async function getBalance(address) {
    const network = "homestead";
    const provider = ethers.getDefaultProvider(network, {
        alchemy: process.env.ALCHEMY_API_KEY
    });
    
    return provider.getBalance(address)
}

module.exports = { getBalance }