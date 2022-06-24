const balanceFetcher = require("./scripts/getBalance");

const express = require("express");
const app = express();

const { ethers } = require("ethers");

require("dotenv").config()

app.get("/", (req, res) => {
    const walletAddress = req.query.walletAddress;

    const test = `hey balance boy: ${walletAddress}`
    balanceFetcher.getBalance(walletAddress)
    .then((balance) => {
        const balanceInEth = ethers.utils.formatEther(balance)

        console.log(`Balance ${balanceInEth}`);
        
        res.json({balance: balanceInEth});
        })
        .catch((err) => {
            console.log(`error: ${err}`)
        })
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});