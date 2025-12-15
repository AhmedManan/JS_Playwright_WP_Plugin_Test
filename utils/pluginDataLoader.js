const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml'); // Import the YAML package

// Define the path to your YAML file
const yamlFilePath = path.join(
    __dirname, 
    '..', 
    'test_data', 
    'plugin.yml'
);

/**
 * Reads and parses the YAML file synchronously to get test data.
 * @returns {Array<Object>} An array of plugin objects, or an empty array on failure.
 */
function getPluginData() {
    try {
        // 1. Read the file contents synchronously
        const fileContents = fs.readFileSync(yamlFilePath, 'utf8');
        
        // 2. Parse the YAML contents into a JavaScript object
        const data = yaml.load(fileContents);
        
        // Return the array under the 'plugins' key, or an empty array if not found
        return data.plugins || []; 

    } catch (e) {
        console.error(`Error reading or parsing YAML file (${yamlFilePath}):`, e.message);
        return [];
    }
}

/**
 * Gets the name of the first plugin from the YAML data.
 * @returns {string} The plugin name or a default value.
 */
function getPluginName() {
    const pluginData = getPluginData(); 
    
    if (pluginData.length > 0 && pluginData[0].name) {
        // Return the 'name' column value from the first item
        return pluginData[0].name;
    }
    
    return 'Default Plugin Name'; 
}
function getPluginDashboardURL() {
    const pluginData = getPluginData(); 
    
    if (pluginData.length > 0 && pluginData[0].DashboardURL) {
        // Return the 'name' column value from the first item
        return pluginData[0].DashboardURL;
    }
    
    return 'Default Plugin Dashboard URL'; 
}

module.exports = { getPluginName, getPluginDashboardURL };