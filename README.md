# near-marketplace-contract

## Learning Points

1. There are two types of function calls, view and change. Calls that are view will only read data from the blockchain, while calls that are change will write data to the blockchain and modify its state. Calls that are __view__ are free, while we need to pay gas for __change__ calls.

2. We will create one account that we will use to __interact__ with the smart contract, and another account that we will __deploy__ the smart contract to. The second account will be a subaccount of the first account, and will look like a subdomain.

3. https://dacade.org/communities/near/courses/near-101/learning-modules/b52ba9f1-caac-4339-96ed-fad3b1ab6bbd Commands 
    ```bash
    near login

    near create-account ${SUBACCOUNT_ID}.${ACCOUNT_ID} --masterAccount ${ACCOUNT_ID} --initialBalance ${INITIAL_BALANCE}

    yarn asb  # compile

    near deploy --accountId=${ACCOUNT_ID} --wasmFile=${PATH_TO_WASM}  # ACCOUNT_ID=account for deployment, which is a subaccount.

    near call ${CONTRACT_ACCOUNT_ID} ${METHOD_NAME} ${PAYLOAD} --accountId=${ACCOUNT_ID}

    near view ${CONTRACT_ACCOUNT_ID} ${METHOD_NAME} ${PAYLOAD}

    near call mycontract.myaccount.testnet buyProduct '{"productId": "0"}' --depositYocto=1000000000000000000000000 --accountId=buyeraccount.myaccount.testnet
    ```


## Barriers

1. Unsupported platform whilst "yarn add -D near-sdk-as"
https://docs.near.org/docs/faq/developer-faq#near-sdk-as

2. ```sudo yarn add global near-cli``` will __NOT__ make "near" work.

    ```sudo npm i -g near-cli``` will make "near" work 