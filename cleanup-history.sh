#!/bin/bash

echo "=== Git History Cleanup Script ==="
echo "This will remove API keys from your git history."
echo ""

# The sensitive strings we want to remove
DICT_KEY="6515e3ae-2580-4db2-a88b-5c52e9444299"
THES_KEY="5530f2c7-3c20-4f89-8062-56afe1814600"

echo "Creating backup of current refs..."
cp -r .git/refs .git/refs-backup

echo "Removing API keys from git history..."

# Use git filter-branch to replace the sensitive strings in all commits
git filter-branch --force --tree-filter "
    if [ -f 'src/components/RhymeThesaurusPanel.vue' ]; then
        sed -i 's/$DICT_KEY/\${process.env.VUE_APP_DICTIONARY_API_KEY}/g' src/components/RhymeThesaurusPanel.vue 2>/dev/null || true
        sed -i 's/$THES_KEY/\${process.env.VUE_APP_THESAURUS_API_KEY}/g' src/components/RhymeThesaurusPanel.vue 2>/dev/null || true
    fi
" --prune-empty --tag-name-filter cat -- --all

echo ""
echo "Cleanup completed!"
echo ""
echo "Next steps:"
echo "1. Verify the changes look correct: git log --oneline"
echo "2. Check that API keys are gone: git log -p --all -S '$DICT_KEY'"
echo "3. If everything looks good, force push: git push --force --all"
echo ""
echo "Backup of original refs saved in .git/refs-backup"
