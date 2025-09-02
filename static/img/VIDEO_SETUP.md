# Video Setup Instructions

## GoChapaa Tutorial Video

To complete the video overlay setup, you need to:

1. **Replace the placeholder file**: Replace `gochapaatutorial.mp4` with your actual video file
2. **File location**: Place your video file at `static/img/gochapaatutorial.mp4`
3. **File format**: The video should be in MP4 format for best browser compatibility
4. **File size**: Consider optimizing the video for web (compressed but good quality)

## Video Specifications

- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 or 1280x720 recommended
- **Duration**: 5 minutes (as indicated in the button)
- **File size**: Try to keep under 50MB for good loading performance

## How it works

The video overlay will:
- Open when users click the "GoChapaa Tutorial - 5min ⏱️" button
- Display as a modal overlay with semi-transparent background
- Include video controls (play, pause, volume, etc.)
- Auto-play when opened
- Allow users to close with the X button or by clicking outside
- Support keyboard navigation (Escape key to close)

## Testing

After adding your video file:
1. Run `npm run start` to test locally
2. Click the tutorial button to verify the overlay works
3. Test on different screen sizes (mobile, tablet, desktop)
4. Verify video plays correctly in different browsers
