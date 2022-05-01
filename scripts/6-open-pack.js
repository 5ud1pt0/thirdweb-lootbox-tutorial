import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = '0xCa85f0ec26737D6f64101235CC62Dc20047d1eDa';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack...');
    const opened = await packModule.open('0');
    console.log('Opened the pack!');
    console.log(opened);
}

try {
    await main();
} catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}