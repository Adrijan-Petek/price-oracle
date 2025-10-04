# Price Oracle (Mock) Starter (Base)

Simple mock oracle with admin-settable price. Useful for local testing and integrating into other contracts.

## Steps
1. `npm ci`
2. Deploy: `npx hardhat run scripts/deploy-oracle.js --network baseSepolia`
3. Use `setPrice()` from owner to update value and read with `getPrice()`.
