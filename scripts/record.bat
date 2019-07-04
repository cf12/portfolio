ffmpeg -i temp\input.mp4 -c:v libvpx-vp9 -crf 31 -b:v 0 temp\output.webm
ffmpeg -i temp\output.webm -c copy -an output_stripped.webm