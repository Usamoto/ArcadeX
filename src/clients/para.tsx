import Para, { Environment } from "@getpara/react-sdk";

const apiKey = process.env.VITE_PARA_API_KEY || ""; // Falls kein Key vorhanden, bleibt er leer
const para = new Para(Environment.BETA, apiKey); // Vermeidung von undefined oder null

export default para;
