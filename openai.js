import OpenAI from 'openai';
import open from 'open';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const image = await openai.images.generate({
    model: 'dall-e-2',
    prompt: 'baby black cat playing with a basket ball',
  });
  open(image.data[0].url);
}
main();
