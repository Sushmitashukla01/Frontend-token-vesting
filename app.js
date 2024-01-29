// Replace with your deployed contract address
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138" //enter address;
/*NOTE: the contract address can be obtained on Remix:
1. go to "Deploy & run transactions"
2. make sure the smart contract is deployed
3. scroll down to "deployed contracts"
4. there'll be a copy option in the same line as "<contract_name> AT <address>", which will copy the address

Also note that the address needs to be enclosed within DOUBLE QUOTES in this code!!!
*/

// Replace with your contract ABI (use the ABI generated during contract compilation)
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensReleased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "VestingRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cliffDuration",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "vestingDuration",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "slicePeriod",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "revocable",
				"type": "bool"
			}
		],
		"name": "VestingScheduleCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "calculateReleasableTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cliffDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "vestingDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "slicePeriod",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "revocable",
				"type": "bool"
			}
		],
		"name": "createVestingSchedule",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "releaseTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "revokeVestingSchedule",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "vestingSchedules",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cliffDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "vestingDuration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "slicePeriod",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "revocable",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "vestedTokens",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "revoked",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];// Your contract ABI goes here

// Connect to the Ethereum network using Web3
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Get the contract instance
const vestingContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to create a vesting schedule
async function createVestingSchedule() {
    const beneficiary = document.getElementById('beneficiaryAddress').value;
    const startTime = document.getElementById('startTime').value;
    const cliffDuration = document.getElementById('cliffDuration').value;
    const vestingDuration = document.getElementById('vestingDuration').value;
    const slicePeriod = document.getElementById('slicePeriod').value;
    const totalAmount = document.getElementById('totalAmount').value;
    const revocable = document.getElementById('revocable').value === 'true';

    // Perform the contract interaction
    try {
        const result = await vestingContract.methods
            .createVestingSchedule(
                beneficiary,
                startTime,
                cliffDuration,
                vestingDuration,
                slicePeriod,
                revocable,
                totalAmount
            )
            .send({ from: web3.currentProvider.selectedAddress });

        // Handle success
        console.log('Vesting schedule created:', result);
        updateStatus('Vesting schedule created successfully!');
    } catch (error) {
        // Handle error
        console.error('Error creating vesting schedule:', error);
        updateStatus('Error creating vesting schedule. Check the console for details.');
    }
}

// Function to release tokens
async function releaseTokens() {
    const vestingScheduleId = prompt('Enter vesting schedule ID:');
    const amount = prompt('Enter the amount to release:');

    // Perform the contract interaction
    try {
        const result = await vestingContract.methods
            .releaseTokens(vestingScheduleId, amount)
            .send({ from: web3.currentProvider.selectedAddress });

        // Handle success
        console.log('Tokens released:', result);
        updateStatus('Tokens released successfully!');
    } catch (error) {
        // Handle error
        console.error('Error releasing tokens:', error);
        updateStatus('Error releasing tokens. Check the console for details.');
    }
}

// Function to revoke vesting schedule
async function revokeVestingSchedule() {
    const vestingScheduleId = prompt('Enter vesting schedule ID:');

    // Perform the contract interaction
    try {
        const result = await vestingContract.methods
            .revokeVestingSchedule(vestingScheduleId)
            .send({ from: web3.currentProvider.selectedAddress });

        // Handle success
        console.log('Vesting schedule revoked:', result);
        updateStatus('Vesting schedule revoked successfully!');
    } catch (error) {
        // Handle error
        console.error('Error revoking vesting schedule:', error);
        updateStatus('Error revoking vesting schedule. Check the console for details.');
    }
}

async function getTime() {
	try{
		updateStatus(vestingContract.methods.getTime());
	}
	catch (error){
		console.error('Error while fetching current time:', error);
        updateStatus('Error while fetching current time. Check the console for details.');
	}
	
}

// Function to update the status message
function updateStatus(message) {
    const statusElement = document.getElementById('status');
    statusElement.textContent = message;
}