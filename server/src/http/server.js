const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/music', async (req, res) => {
    const musics = await prisma.music.findMany({
        include: { comments: true }
    });
    res.json(musics);
});

app.post('/music', async (req, res) => {
    const { artist, title } = req.body;
    const newMusic = await prisma.music.create({
        data: { artist, title }
    });
    res.json(newMusic);
});

app.post('/comment', async (req, res) => {
    const { content, musicId, userId } = req.body;
    const newComment = await prisma.comment.create({
        data: { content, musicId, userId }
    });
    res.json(newComment);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
