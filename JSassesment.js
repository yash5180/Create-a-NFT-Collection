let nfts = [];

function mintNFT(name, artist, year, description) {
    const nft = {
        name: name,
        artist: artist,
        year: year,
        description: description
    };
    nfts.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Artist: ${nfts[i].artist}`);
        console.log(`Year: ${nfts[i].year}`);
        console.log(`Description: ${nfts[i].description}`);
        console.log('--------------------------');
    }
}

function getTotalSupply() {
    console.log(`Total Supply: ${nfts.length}`);
}

mintNFT('Dear Stranger,I Know How You Feel', 'Ashish Bagrecha', 2019, 'About Pain of Love.');
mintNFT('The Art of Letting Go', 'Sanhita Baruah', 2016, 'It helps you understand why, how, and when you should let someone go.');
mintNFT('The Art of Saying No', 'Damon Zahariades', 2017, 'You will learn how to say no in every situation,at home and in the workplace, according to your convictions.');

listNFTs();
getTotalSupply();
