# Deployment Guide

## GitHub Pages Deployment

### Method 1: Using GitHub Web Interface

1. **Fork or Upload Repository**
   - Fork this repository or create a new one
   - Upload all files maintaining the directory structure

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Click "Save"

3. **Wait for Deployment**
   - GitHub will build and deploy your site
   - Check the Pages section for the live URL
   - Usually takes 1-2 minutes

4. **Access Your Site**
   - Visit `https://yourusername.github.io/quizcraft`
   - Share the link with students!

### Method 2: Using Git Command Line

```bash
# Clone the repository
git clone https://github.com/yourusername/quizcraft.git
cd quizcraft

# Make your changes
git add .
git commit -m "Update quiz application"
git push origin main

# GitHub Actions will automatically deploy
```

### Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Settings → Pages
   - Enter your domain in "Custom domain"
   - Click "Save"

2. **Configure DNS**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records for GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Enable HTTPS**
   - Check "Enforce HTTPS" in Pages settings
   - Wait for certificate provisioning (up to 24 hours)

## Other Deployment Options

### Netlify

1. Connect your GitHub repository to Netlify
2. No build command needed
3. Publish directory: `/` (root)
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Framework Preset: "Other"
3. No build settings needed
4. Deploy!

### Self-Hosting

Simply upload all files to your web server:

```bash
# Using SCP
scp -r * user@yourserver.com:/var/www/html/quizcraft/

# Using FTP
# Upload all files maintaining directory structure
```

Requirements:
- Any web server (Apache, Nginx, etc.)
- No server-side processing needed
- Just serve static files

## Troubleshooting

### Issue: 404 Not Found
- **Solution**: Ensure index.html is in the root directory
- Check GitHub Pages source settings

### Issue: Files Not Loading
- **Solution**: Check browser console for errors
- Ensure all paths are relative (no leading `/`)
- Verify CDN links are accessible

### Issue: DOCX/PDF Not Parsing
- **Solution**: Check that CDN scripts are loading:
  - Mammoth.js for DOCX
  - PDF.js for PDF
- Check browser console for errors

## Performance Optimization

### Enable Caching
Add to your hosting provider:

```
# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### Enable Compression

```
# Enable GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

## Security Headers

Add these headers for better security:

```
Content-Security-Policy: default-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Monitoring

### Google Analytics (Optional)

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support

For deployment issues:
- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an issue on GitHub
- Contact the maintainers

Happy deploying! 🚀
