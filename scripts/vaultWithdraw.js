const withdraw = async () => {
  const vaultAddress = "0xf523a8A117297ADEdE36379656910BcD248383b6"; //***Change address to your deployed vault contract address***
  
  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.attach(vaultAddress);

  const withdraw = await vault.withdraw();
  const withdrawRes = await withdraw.wait();
  console.log(withdrawRes.events[0].args[0]._hex.toString() / 10 ** 18 + "ETH Withdrawn!");
};

withdraw()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
