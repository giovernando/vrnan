const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function runReplace(filePath) {
  if (!filePath.match(/\.(js|jsx|json)$/)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replacements
  content = content.replace(/Evangelos \(Giats\) Giatsidis/g, 'Gio (vrnan) Vernando');
  content = content.replace(/Evangelos Giatsidis/g, 'Gio Vernando');
  content = content.replace(/GIATS/g, 'VRNAN');
  content = content.replace(/Giats/g, 'Vrnan');
  // keep 'giats' for URLs or folder paths if possible, but let's carefully replace only literal instances
  content = content.replace(/Call me Giats/g, 'Call me vrnan');
  content = content.replace(/Call me Vrnan/g, 'Call me vrnan'); // fixing case issue from above
  
  // Locations
  content = content.replace(/from Greece/g, 'from Palembang, Sumatera Selatan');
  content = content.replace(/Thessaloniki, Greece/g, 'Palembang, Sumatera Selatan');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(path.join(__dirname, 'src'), runReplace);
// Also update sitemap or others if needed
