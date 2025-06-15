
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const mistralApiKey = Deno.env.get('MISTRAL_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SMARTSEVA_CONTEXT = `
You are SmartSeva AI, an intelligent assistant for the SmartSeva platform - a comprehensive digital service center.

About SmartSeva:
- SmartSeva is a one-stop digital platform offering multiple services
- Services include: Digital Supermarket (fresh groceries), Banking & LIC services, Government services (PAN, Aadhaar), Print & Xerox services
- Users can shop for groceries, access banking services, handle government paperwork, and get printing services
- The platform has user authentication, shopping cart functionality, and order management
- Mission: To provide all essential services digitally in one convenient location

When answering questions:
- For SmartSeva-related queries: Provide detailed, helpful information about our services
- For general questions: Answer helpfully while maintaining a friendly, professional tone
- Always be helpful, accurate, and maintain the brand voice of being reliable and customer-focused
- If users ask about specific services, explain how SmartSeva can help them
- Encourage users to explore our various service categories
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    if (!mistralApiKey) {
      throw new Error('Mistral API key not configured');
    }

    // Prepare the conversation for Mistral AI
    const messages = [
      { role: 'system', content: SMARTSEVA_CONTEXT },
      ...conversationHistory.map((msg: any) => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mistralApiKey}`,
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-ai function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to get AI response. Please try again.',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
