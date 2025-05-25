const contractAddress = "0xE3Bb748688ef32dD48cC7Aab37F1eBB234F982A8"; // HARU トークンのコントラクトアドレス
const haruWallet = "0xe8319F34F481c1AdDb95Bbd6Ff0237590EbF7CBf"; // ここにHARUが入るウォレットアドレスを指定

const abi = [
    {
        "inputs": [
            { "internalType": "address", "name": "_winner", "type": "address" },
            { "internalType": "uint256", "name": "_correctAnswers", "type": "uint256" }
        ],
        "name": "rewardWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


async function rewardUser(correctAnswers) {
    if (!window.ethereum) {
        alert("MetaMaskをインストールしてください！");
        return;
    }

    console.log("✅ rewardUser() が実行されました！送信するスコア:", correctAnswers);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();

}

