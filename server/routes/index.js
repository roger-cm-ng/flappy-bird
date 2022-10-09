import express from 'express';
import cors from 'cors';
import path from 'path';

const Index = express.Router();

Index.all('*', cors());
Index.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

export default Index;
