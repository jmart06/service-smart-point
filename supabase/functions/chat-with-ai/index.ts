
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const geminiApiKey = Deno.env.get('GEMINI_API_KEY');

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

    if (!geminiApiKey) {
      throw new Error('Gemini API key not configured');
    }

    // Prepare the conversation for Gemini
    const messages = [
      { role: 'user', parts: [{ text: SMARTSEVA_CONTEXT }] },
      { role: 'model', parts: [{ text: 'I understand. I am SmartSeva AI, ready to help with both SmartSeva-related questions and general inquiries. How can I assist you today?' }] },
      ...conversationHistory.map((msg: any) => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;

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
