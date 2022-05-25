require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-vyper");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  vyper: {
    version: "0.3.3",
  },
  solidity: {
    version: "0.8.13",
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/",
      accounts: []
    }
  }
};
