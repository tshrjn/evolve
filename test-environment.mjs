import { Evolve } from "@evolvingmachines/sdk";

console.log("Testing Evolve environment setup...");

// Initialize Evolve with environment variables
const evolve = new Evolve();

console.log("Running Evolve with E2B sandbox...");
await evolve.run({ prompt: "Create hello.txt with 'Hello World'" });

const output = await evolve.getOutputFiles();
console.log("Output files:", JSON.stringify(output.files, null, 2));

await evolve.kill();
console.log("Environment test completed successfully!");
