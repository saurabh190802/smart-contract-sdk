/** @type import('hardhat/config').HardhatUserConfig */

const { alchemyApiKey, mnemonic } = require('./secrets.json');
require ('@nomiclabs/hardhat-ethers');
module.exports = {
  networks: {
       rinkeby: {
           url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
           accounts: { mnemonic: mnemonic },
         },
       },    
  solidity: "0.8.9",
};
