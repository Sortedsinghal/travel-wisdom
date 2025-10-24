const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/CorporateTours.tsx',
  'src/pages/BackpackingTrips.tsx', 
  'src/pages/DomesticTrips.tsx',
  'src/pages/WeekendTrips.tsx',
  'src/pages/MeghalayaBackpacking.tsx',
  'src/pages/UpcomingGroupTrips.tsx',
  'src/pages/InternationalTrips.tsx'
];

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not present
    if (!content.includes('QueryForm')) {
      content = content.replace(
        /import.*Footer.*from.*@\/components\/Footer.*;/,
        `$&\nimport { QueryForm } from '@/components/QueryForm';`
      );
    }
    
    // Add state if not present
    if (!content.includes('showQueryForm')) {
      content = content.replace(
        /const \w+ = \(\) => \{/,
        `$&\n  const [showQueryForm, setShowQueryForm] = useState(false);`
      );
    }
    
    // Replace Send Query buttons
    content = content.replace(
      /onClick=\{\(\) => alert\([^}]+\)\}/g,
      'onClick={() => setShowQueryForm(true)}'
    );
    
    // Add QueryForm before closing div
    if (!content.includes('<QueryForm')) {
      content = content.replace(
        /(<Footer \/>[\s\n]*<\/div>[\s\n]*\);[\s\n]*};[\s\n]*export default)/,
        `$1\n       <QueryForm \n         isOpen={showQueryForm} \n         onClose={() => setShowQueryForm(false)} \n         tripName="General Query"\n       />`
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
});

console.log('All files updated with QueryForm functionality');