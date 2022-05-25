// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deployRinkeby() {
  // Deploy Vyper Channel
  const vchannelArgs = ["0xde29d060D45901Fb19ED6C6e959EB22d8626708e"];
  const vCHANNEL = await hre.ethers.getContractFactory("VyperChannel");
  const vchannel = await vCHANNEL.deploy(...vchannelArgs);
  await vchannel.deployed();
  console.log("Vyper channel deployed at:", vchannel.address);

  const schannelArgs = ["0xde29d060D45901Fb19ED6C6e959EB22d8626708e"];
  const sCHANNEL = await hre.ethers.getContractFactory("SolidityChannel");
  const schannel = await sCHANNEL.deploy(...schannelArgs);
  await schannel.deployed();
  console.log("Solidity channel deployed at:", schannel.address);
}

async function main() {
  await deployRinkeby();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
