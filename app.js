
const copyContract = () => {
    let contractAddress = document.getElementById("contractAddress").innerText.trim()
    navigator.clipboard.writeText(contractAddress).then(()=>{
        alert("Contract Address Copied!")
    }).catch(err => {
        alert("Failed to copy contract address!: ", err)
    })
}