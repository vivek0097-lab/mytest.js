/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Arr=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Name,ColorOfEye,TypeOfShirt,Accessory) {
        const NFTs={
           "Name":Name,
           "ColorOfEye":ColorOfEye,
           "TypeOfShirt":TypeOfShirt,
           "Accessory":Accessory
        }
        Arr.push(NFTs);  //We Can Also Use Unshift Function But Its Give You Output In Reverse Order
       }


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < Arr.length; i++) {
        const element = Arr[i];
        console.log("ID: "+ (i+1));
        console.log("Name: "+ element.Name);
        console.log("EyeColor: "+ element.ColorOfEye);
        console.log("ShirtType: " + element.TypeOfShirt);
        console.log("Accessory: "+ element.Accessory + "\n")
      }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total No. Of Minted NFTs Are : "+ Arr.length)
}

// call your functions below this line
mintNFT("Ishan","Black","Hoodie","Watch")
mintNFT("Mayank","Blue","T-Shirt","Gold Ring")
mintNFT("Kritesh","Brown","Shirt","Chain")
listNFTs()
getTotalSupply()
