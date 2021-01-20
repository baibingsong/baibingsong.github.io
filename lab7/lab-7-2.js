"use strict";

let accountInfoList = [];

function createAccount() {
    return `Account name: ${document.getElementById("accountName").value} Balance: ${document.getElementById("deposit").value} \n`;
}

function addAccountHandler() {
    let ac = createAccount();
    accountInfoList.push(ac);
    let allAccountInfo = "";
    for(let i = 0; i < accountInfoList.length; i++) {
        allAccountInfo += accountInfoList[i];        
    }
    document.getElementById("accountInfo").value = allAccountInfo;
}