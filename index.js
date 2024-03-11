const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/your_infura_project_id');

// 1. 生成随机的以太坊地址
function getRandomAddress() {
  const account = web3.eth.accounts.create();
  return account.address;
}

// 2. 检查地址是否为有效的以太坊地址
function isValidAddress(address) {
  return web3.utils.isAddress(address);
}

// 3. 获取当前区块链网络ID
async function getNetworkId() {
  try {
    const networkId = await web3.eth.net.getId();
    return networkId;
  } catch (error) {
    console.error('Error getting network ID:', error);
    return null;
  }
}

// 4. 获取指定地址的以太币余额
async function getEthBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
  } catch (error) {
    console.error('Error getting ETH balance:', error);
    return null;
  }
}

// 5. 发送以太币交易
async function sendEth(sender, recipient, amount) {
  try {
    const tx = await web3.eth.sendTransaction({
      from: sender,
      to: recipient,
      value: web3.utils.toWei(amount, 'ether'),
    });
    return tx.transactionHash;
  } catch (error) {
    console.error('Error sending ETH:', error);
    return null;
  }
}

// 6. 获取最新的区块号
async function getLatestBlockNumber() {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    return blockNumber;
  } catch (error) {
    console.error('Error getting latest block number:', error);
    return null;
  }
}

// 7. 获取指定区块的信息
async function getBlock(blockNumber) {
  try {
    const block = await web3.eth.getBlock(blockNumber);
    return block;
  } catch (error) {
    console.error('Error getting block:', error);
    return null;
  }
}

// 8. 获取指定交易的信息
async function getTransaction(txHash) {
  try {
    const tx = await web3.eth.getTransaction(txHash);
    return tx;
  } catch (error) {
    console.error('Error getting transaction:', error);
    return null;
  }
}

// 9. 获取指定区块的所有交易
async function getBlockTransactions(blockNumber) {
  try {
    const block = await web3.eth.getBlock(blockNumber, true);
    return block.transactions;
  } catch (error) {
    console.error('Error getting block transactions:', error);
    return null;
  }
}

// 10. 获取当前 gas 价格
async function getCurrentGasPrice() {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    return web3.utils.fromWei(gasPrice, 'gwei');
  } catch (error) {
    console.error('Error getting current gas price:', error);
    return null;
  }
}
