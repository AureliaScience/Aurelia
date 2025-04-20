
// Example of initial data values for the functions
const activeSmartWallets = 50;  // Active smart wallets
const totalWallets = 200; // Total number of wallets
const currentVolume = 1500000; // Current volume
const avgPreviousVolume = 1000000; // Average previous volume
const tokenLiquidity = 500000; // Token liquidity
const tokenActivity = 1500; // Token activity (number of transactions)

// Function definitions

// Smart Wallet Signal
function smartWalletSignal(activeSmartWallets, totalWallets) {
  const ratio = activeSmartWallets / totalWallets;
  if (ratio > 0.25) return "Strong signal";
  if (ratio > 0.1) return "Moderate activity";
  return "No signal";
}

// Volume Spike Detection
function volumeSpikeIndex(currentVolume, avgPreviousVolume) {
  return ((currentVolume / avgPreviousVolume) * 100).toFixed(1); // % 
}

// Token Trend Analyzer
function tokenTrendAnalyzer(tokenLiquidity, tokenActivity) {
  const liquidityScore = tokenLiquidity / 1000000;
  const activityScore = tokenActivity / 1000;
  if (liquidityScore > 1.5 && activityScore > 1) {
    return "Uptrend";
  } else if (liquidityScore < 1 && activityScore < 0.5) {
    return "Downtrend";
  }
  return "Stable";
}

// Run calculations based on the example data
const smartWalletSignalREZ = smartWalletSignal(activeSmartWallets, totalWallets);
const volumeSpikeREZ = volumeSpikeIndex(currentVolume, avgPreviousVolume);
const tokenTrendREZ = tokenTrendAnalyzer(tokenLiquidity, tokenActivity);

// Display the results in the appropriate HTML elements
document.getElementById('volumeSpikeElement').innerHTML = `${volumeSpikeREZ}% Volume Spike`;
document.getElementById('smartWalletSignalElement').innerHTML = smartWalletSignalREZ;
document.getElementById('tokenTrendElement').innerHTML = tokenTrendREZ;
