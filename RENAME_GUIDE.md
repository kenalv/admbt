# Directory Renaming Guide: ADT → ADMBT

## ✅ Changes Already Made:

1. **Package.json updated** - Name changed to `astro-docker-multi-backend-template`
2. **Docker references updated** - All image names now use `astro-multi-backend-template`
3. **GitHub Actions updated** - CI/CD pipeline uses new naming
4. **README.md updated** - Repository URLs updated
5. **Scripts updated** - All npm scripts use new naming

## 📝 To Complete the Rename:

### Option 1: Manual Directory Rename (Recommended)
1. **Close VS Code completely**
2. **Close all terminals in the adt directory**
3. **Rename the directory:**
   ```powershell
   cd E:\example
   Rename-Item -Path "adt" -NewName "admbt"
   ```
4. **Open the new directory in VS Code:**
   ```powershell
   cd E:\example\admbt
   code .
   ```

### Option 2: Fresh Copy (Alternative)
1. **Copy files to new directory:**
   ```powershell
   cd E:\example
   Copy-Item -Path "adt\*" -Destination "admbt\" -Recurse -Force -Exclude "node_modules"
   cd admbt
   npm install
   ```
2. **Remove old directory when ready:**
   ```powershell
   Remove-Item -Path "E:\example\adt" -Recurse -Force
   ```

## 🚀 GitHub Repository Setup

After renaming, your repository should be named:
- **Repository Name:** `astro-docker-multi-backend-template`
- **Directory Name:** `admbt` (Astro Docker Multi-Backend Template)
- **Package Name:** `astro-docker-multi-backend-template`

## ✅ Verification Checklist

After renaming, verify:
- [ ] `npm run build` works
- [ ] `npm run dev` works  
- [ ] `docker build -t astro-multi-backend-template .` works
- [ ] All file references are correct

## 📋 Updated Repository Information

**Suggested GitHub Repository:**
- **Name:** `astro-docker-multi-backend-template`
- **Description:** "Production-ready Astro template with Docker support for multiple backend containers"
- **Topics:** `astro`, `docker`, `template`, `multi-backend`, `wordpress`, `api-integration`

The template is now properly named and ready for GitHub upload! 🎉
