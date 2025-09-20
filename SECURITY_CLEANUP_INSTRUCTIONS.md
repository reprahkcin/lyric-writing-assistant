# Git History Cleanup Instructions

## Current Status
✅ API keys moved to .env file (not tracked by git)
✅ .gitignore updated to exclude .env files
✅ Code updated to use environment variables

## Option 1: Simple Git History Cleanup (Recommended for most users)

Since only 3 people have accessed your site, the simplest approach is:

1. **Commit your current changes:**
   ```bash
   git add .
   git commit -m "Move API keys to environment variables"
   ```

2. **If you want to be extra safe, just get new API keys:**
   - Go to https://dictionaryapi.com/
   - Log into your account (or create a new one)
   - Generate new API keys
   - Update your .env file with the new keys
   - The old keys in git history become useless

## Option 2: Complete History Rewrite (Advanced - Use with caution)

⚠️ **WARNING**: This rewrites git history and can break things if others have cloned your repo.

1. **Backup your repository first:**
   ```bash
   cp -r /path/to/your/repo /path/to/backup
   ```

2. **Install git-filter-repo** (safer than filter-branch):
   ```bash
   pip install git-filter-repo
   ```

3. **Create a file with sensitive strings:**
   ```bash
   echo "6515e3ae-2580-4db2-a88b-5c52e9444299" > sensitive-strings.txt
   echo "5530f2c7-3c20-4f89-8062-56afe1814600" >> sensitive-strings.txt
   ```

4. **Remove the strings from history:**
   ```bash
   git filter-repo --replace-text sensitive-strings.txt
   ```

5. **Force push to remote:**
   ```bash
   git push --force --all
   git push --force --tags
   ```

## Recommended Approach

For your situation, I recommend **Option 1**:
1. Commit the current changes
2. Get new API keys from Merriam-Webster
3. Update your .env file

This is safer and achieves the same security goal without the complexity of rewriting history.
