import ffmpegStatic from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';

export const createMP3 = (inputFile = 'audio.mp4', outputFile = 'audio.mp3', bitrate = '20k') => {
  return new Promise((resolve, reject) => {
    ffmpeg.setFfmpegPath(ffmpegStatic);

    ffmpeg(inputFile)
      .outputOptions('-ab', bitrate)
      .saveToFile(outputFile)
      .on('end', () => {
        console.log('[SUCESSO] Audio convertido com sucesso para', outputFile);
        resolve();
      })
      .on('error', error => {
        console.error('[ERRO] Erro ao converter áudio:', error.message);
        reject(new Error(`Erro ao converter áudio: ${error.message}`));
      });
  });
};
