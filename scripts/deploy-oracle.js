const hre = require('hardhat'); require('dotenv').config();
async function main(){ const [deployer]=await hre.ethers.getSigners(); console.log('Deploying with', deployer.address); const O = await hre.ethers.getContractFactory('MockOracle'); const o = await O.deploy(1000); await o.waitForDeployment(); console.log('MockOracle:', await o.getAddress()); }
main().catch(e=>{console.error(e); process.exitCode=1;});
