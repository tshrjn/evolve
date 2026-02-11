import { Evolve } from "@evolvingmachines/sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

console.log("Testing Evolve environment setup...");

// Initialize Evolve with Qwen agent configuration (using OPENROUTER_API_KEY from .env)
const evolve = new Evolve()
  .withAgent({ 
    type: "qwen", 
    providerApiKey: process.env.OPENROUTER_API_KEY,
    providerBaseUrl: "https://openrouter.ai/api/v1"
  });

console.log("Running Evolve with E2B sandbox...");
// Create a file in the output directory to verify the sandbox is working
await evolve.run({ prompt: "Create a file in the output directory named test_result.txt with the content 'Environment test successful!'" });

const output = await evolve.getOutputFiles();
console.log("Output files:", JSON.stringify(output.files, null, 2));

await evolve.kill();
console.log("Environment test completed successfully!");
