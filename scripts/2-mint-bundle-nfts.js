import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    // Paste in the address from when you created the bundle collection module
    const bundleModuleAddress = '0xcB3bbe6080D8442931F41e9D5751245fa89dF09b';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log('Creating NFT batch...');

    const created = await bundleModule.createAndMintBatch([{
            metadata: {
                name: 'XLR8',
                description: 'Enhanced speed, reflexes, and strength',
                image: readFileSync('./assets/xlr8.png'),
                properties: {
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: '4 arms',
                description: 'Enhanced strength and jumping',
                image: readFileSync('./assets/4arms.png'),
                properties: {
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Wildmutt',
                description: 'Sharp claws and teeth, has super senses, enhanced agilty',
                image: readFileSync('./assets/wildmutt.png'),
                properties: {
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Diamond Head',
                description: 'Can create crystal weapons and shoot crystals from his hands',
                image: readFileSync('./assets/diamondhead.png'),
                properties: {
                    rarity: 'super rare!',
                    fanciness: 10,
                }
            },
            supply: 10,
        }
    ]);

    console.log('NFTs created!')
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}