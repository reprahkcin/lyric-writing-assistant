#!/bin/bash
# Script to remove API keys from git history
# WARNING: This rewrites git history and should be used carefully

echo "This script will remove API keys from your git history."
echo "Make sure you have a backup of your repository before proceeding."
echo ""
read -p "Do you want to continue? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Operation cancelled."
    exit 1
fi

echo "Step 1: Creating a temporary file with the sensitive data patterns..."

# Create a file with the sensitive strings to remove
cat > sensitive-data.txt << EOF
6515e3ae-2580-4db2-a88b-5c52e9444299
5530f2c7-3c20-4f89-8062-56afe1814600
EOF

echo "Step 2: Using git filter-branch to remove sensitive data..."

# Use git filter-branch to remove the sensitive data
git filter-branch --force --index-filter \
    'git rm --cached --ignore-unmatch sensitive-data.txt || true' \
    --prune-empty --tag-name-filter cat -- --all

# Remove the sensitive strings from all files in history
git filter-branch --force --tree-filter \
    'if [ -f "src/components/RhymeThesaurusPanel.vue" ]; then
        sed -i "s/6515e3ae-2580-4db2-a88b-5c52e9444299/\${process.env.VUE_APP_DICTIONARY_API_KEY}/g" src/components/RhymeThesaurusPanel.vue
        sed -i "s/5530f2c7-3c20-4f89-8062-56afe1814600/\${process.env.VUE_APP_THESAURUS_API_KEY}/g" src/components/RhymeThesaurusPanel.vue
    fi' \
    --prune-empty --tag-name-filter cat -- --all

echo "Step 3: Cleaning up..."
rm -f sensitive-data.txt

echo "Step 4: Force pushing changes (if you want to update remote)..."
echo "WARNING: This will rewrite history on your remote repository!"
echo "Run: git push --force --all"
echo "And: git push --force --tags"

echo ""
echo "Done! Your git history has been cleaned."
echo "Make sure to:"
echo "1. Verify the changes look correct"
echo "2. Get new API keys from Merriam-Webster"
echo "3. Update your .env file with the new keys"
