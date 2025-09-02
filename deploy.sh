#!/bin/bash

# GoChapaa Documentation Deployment Script
# This script builds and deploys the documentation to gochapaa.io/docs

echo "🚀 Starting GoChapaa Documentation Deployment..."

# Build the documentation
echo "📦 Building documentation..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # The build output is in the 'build' directory
    echo "📁 Build files are ready in the 'build' directory"
    echo "🌐 You can now deploy the contents of the 'build' directory to your web server"
    echo ""
    echo "For deployment to gochapaa.io/docs:"
    echo "1. Upload the contents of the 'build' directory to your web server"
    echo "2. Ensure the server is configured to serve files from the root of the docs subdirectory"
    echo "3. The site will be available at https://gochapaa.io/docs/"
    echo ""
    echo "Alternative deployment options:"
    echo "- GitHub Pages: Use 'npm run deploy' (requires GitHub Pages setup)"
    echo "- Netlify: Connect your repository to Netlify"
    echo "- Vercel: Connect your repository to Vercel"
    echo "- AWS S3: Upload build directory to S3 bucket with static website hosting"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

