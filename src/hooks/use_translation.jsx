import OpenAI from "openai";
import { useState, useCallback } from "react";
const chatGptApiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: chatGptApiKey,
    dangerouslyAllowBrowser: true
}); 

export default function use_translation() {
    
    const [translation, setTranslation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const translateText = useCallback(async (userText, language) => {
        console.log(`Text: ${userText}, language: ${language}`)
        if (!userText || !language) {
            console.warn("Skipping translation: Missing userText or language");
            return;
        }
    
        setLoading(true);
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: `Translate this text into ${language}:` },
                    { role: "user", content: userText }
                ]
            });
    
            console.log("OpenAI Response:", response);
    
            if (!response || !response.choices || !response.choices[0]?.message?.content) {
                throw new Error("Invalid API response");
            }
    
            setTranslation(response.choices[0].message.content);
        } catch (err) {
            console.error("Translation API error:", err);
            setError(`Failed to fetch translation: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { translation, translateText, loading, error };
}
