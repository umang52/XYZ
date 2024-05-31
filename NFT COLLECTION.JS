// Step 1:Declare a variable to store your NFTcollection.
let nftCollection = [];

// Step 2: This function takes parameters
//creates an NFT object with the given data
//stores it in the NFTcollection variable.
function mintNFT(name, artist, image, owner) {
    const nft = {
        name: name,
        artist: artist,
        image: image,
        owner: owner
    };
    nftCollection.push(nft);
}

// Step 3: Create a loop to iterate through the NFT array
//print each NFTcollection data using console.log().
function listNFTs() {
    let index = 0;
    while (index < nftCollection.length) {
        console.log("NFT " + (index + 1) + ":");
        console.log("  Name: " + nftCollection[index].name);
        console.log("  artist " + nftCollection[index].artist);
        console.log("  Image: " + nftCollection[index].image);
        console.log("  Owner: " + nftCollection[index].owner);
        index++;
    }
}

// Step 4: Print the total number of NFTs minted to the console.
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line
mintNFT("CryptoKitty", "A cute cryptographic kitty", "kitty.png", "User1");
mintNFT("CryptoPunk", "A rare cryptopunk", "punk.png", "User2");
mintNFT("DigiDragon", "A fierce digital dragon", "dragon.png", "User3");


listNFTs();
console.log("Total nfts minted: " + getTotalSupply());
