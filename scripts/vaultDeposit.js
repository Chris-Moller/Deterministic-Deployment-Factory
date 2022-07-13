const deposit = async () => {
  const depositAmount = ethers.utils.parseEther("0.001");
  console.log("Depositing", depositAmount / 10 ** 18 + "ETH...");
  
  const Vault = await ethers.getContractFactory("Vault");
  const vaultContract = await Vault.attach(create2Addr);

  const sendEther = await vaultContract.deposit({ value: depositAmount });
  const depositTxReciept = await sendEther.wait();
  console.log(depositTxReciept.events[0].args[0]._hex.toString() / 10 ** 18 + "ETH deposited!");
};

deposit()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
