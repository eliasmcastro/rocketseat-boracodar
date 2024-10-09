import ytdl from '@distube/ytdl-core';
import fs from 'fs';

export const downloader = (videoId) => {
  return new Promise((resolve, reject) => {
    const videoURL = `https://youtube.com/watch?v=${videoId}`;
    const outputFilename = 'audio.mp4';
    console.log('[SUCESSO] Iniciando Downloado do vídeo', videoURL);

    const stream = ytdl(videoURL, {
      quality: 'lowestaudio',
      filter: 'audioonly',
    });

    const writeStream = fs.createWriteStream(outputFilename);

    stream
      .on('end', () => {
        console.log('[SUCESSO] Download finalizado com sucesso', outputFilename);
        resolve(outputFilename);
      })
      .on('error', (err) => {
        console.error('[ERRO] Erro ao realizar o download', err);
        reject('[ERROR_DOWNLOADING_VIDEO]');
      })
      .pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('[SUCESSO] Arquivo gravado com sucesso');
    });

    writeStream.on('error', (err) => {
      console.error('[ERRO] Erro ao gravar arquivo', err);
      reject('[ERROR_WRITING_FILE]');
    });
  });
};