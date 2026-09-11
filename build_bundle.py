import os
import re

base_dir = r"C:\Users\asus\.gemini\antigravity\scratch\nlams"

files_order = [
    r"src\data\projects.js",
    r"src\data\parcels.js",
    r"src\data\compensation.js",
    r"src\data\rr.js",
    r"src\data\possession.js",
    r"src\data\construction.js",
    r"src\data\departments.js",
    r"src\data\documents.js",
    r"src\data\notifications.js",
    r"src\data\analytics.js",
    r"src\utils\helpers.js",
    r"src\components\Icons.js",
    r"src\components\StatusBadge.js",
    r"src\components\ProgressBar.js",
    r"src\components\KPICard.js",
    r"src\components\ProjectTimeline.js",
    r"src\components\Modal.js",
    r"src\components\JudgeTourBar.js",
    r"src\components\Sidebar.js",
    r"src\components\Navbar.js",
    r"src\pages\Login.js",
    r"src\pages\Dashboard.js",
    r"src\pages\Projects.js",
    r"src\pages\Parcels.js",
    r"src\pages\GIS.js",
    r"src\pages\Revenue.js",
    r"src\pages\RnR.js",
    r"src\pages\Construction.js",
    r"src\pages\Documents.js",
    r"src\pages\Analytics.js",
    r"src\App.js"
]

bundle_parts = []
bundle_parts.append("// National Land Acquisition & Management System (NLAMS) - Unified Bundle\n")
bundle_parts.append("const { useState, useEffect, useRef, useMemo } = React;\n\n")

for rel_path in files_order:
    full_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(full_path):
        print("MISSING:", full_path)
        continue
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Strip out import statements
    content = re.sub(r'import\s+[^;]+;?\n?', '', content)
    # Convert 'export const' to 'const'
    content = re.sub(r'export\s+const\s+', 'const ', content)
    # Convert 'export function' to 'function'
    content = re.sub(r'export\s+function\s+', 'function ', content)
    # Convert 'export default' to ''
    content = re.sub(r'export\s+default\s+', '', content)

    bundle_parts.append(f"\n// ===== FILE: {rel_path} =====\n")
    bundle_parts.append(content)

# Mount root
bundle_parts.append("\n\n// ===== Mount Application Root =====\n")
bundle_parts.append("""
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
console.log('NLAMS Application initialized successfully!');
""")

output_file = os.path.join(base_dir, "bundle.jsx")
with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(bundle_parts))

print("Created bundle.jsx, size:", os.path.getsize(output_file), "bytes")
