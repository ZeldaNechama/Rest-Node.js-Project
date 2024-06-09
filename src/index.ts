import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let items: { id: number, name: string }[] = [];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript!');
});

app.get('/items', (req: Request, res: Response) => {
  res.json(items);
});

app.post('/items', (req: Request, res: Response) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

app.get('/items/:id', (req: Request, res: Response) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

app.put('/items/:id', (req: Request, res: Response) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items[index] = req.body;
    res.json(items[index]);
  } else {
    res.status(404).send('Item not found');
  }
});

app.delete('/items/:id', (req: Request, res: Response) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
