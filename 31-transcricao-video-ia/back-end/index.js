import express from 'express';
import cors from 'cors';
import { downloader } from './download-video.js';
import { createMP3 } from './create-mp3.js';

const app = express();
const PORT = 3333;

app.use(cors());

app.get('/audio', async (req, res) => {
  const videoId = req.query.v;

  if (!videoId) {
    return res.status(400).send('Id do vídeo é obrigatório.');
  }

  try {
    await downloader(videoId);
    await createMP3();
    return res.status(200).send('Audio criado com sucesso.');
  } catch (error) {
    console.error('Erro ao processar requisição:', error);
    return res.status(500).send('Um erro ocorreu enquanto processava sua solicitação.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado com sucesso na porta ${PORT}!`);
});
