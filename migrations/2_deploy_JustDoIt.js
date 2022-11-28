var myContract = artifacts.require("JustDoIt");

module.exports = function(deployer){
  deployer.deploy(myContract);
}