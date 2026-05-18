require('dotenv').config();
const { writeFileSync } = require('fs');
const { resolve } = require('path');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const outputPath = resolve(__dirname, '..', 'config.js');

const fileContent = `// This file is generated at build time.
window.SUPABASE_URL = ${JSON.stringify(SUPABASE_URL)};
window.SUPABASE_ANON_KEY = ${JSON.stringify(SUPABASE_ANON_KEY)};
`;

writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Generated config.js at ${outputPath}`);
