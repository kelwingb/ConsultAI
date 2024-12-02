import axios from 'axios';
 
const API_URL = 'https://api-inference.huggingface.co/models/gpt2'; // Substitua pela URL da sua API
const API_KEY = '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'; // Substitua pela sua chave da API

export async function enviarMensagemParaChatGPT(mensagem: string) {
  const response = await axios.post(
    API_URL,
    {
      prompt: mensagem,
      max_tokens: 150,
      n: 1,
      stop: ["\n"],
    },
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    }
  );
  return response.data.choices[0].text.trim();
}
