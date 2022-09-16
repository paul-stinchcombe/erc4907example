var ERC4907Example = artifacts.require('ERC4907Example')
module.exports = function (deployer) {
  deployer.deploy(ERC4907Example, 'Pauls 4907', 'PAUL')
  // Additional contracts can be deployed here
}
