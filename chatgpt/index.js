const axios = require('axios');  

// Your OpenAI API key  
const OPENAI_API_KEY = 'YOUR_API_KEY_HERE';  

  
const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'; // Example FEN (Start position)  

// Function to request comments from ChatGPT  
const getChessComments = async (fen) => {  
    try {  
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {  
            model: 'gpt-3.5-turbo',  
            messages: [  
                {  
                    role: 'user',  
                    content: `Please provide an analysis and comments on the following chess position in FEN format: ${fen}`  
                }  
            ],  
            max_tokens: 150  
        }, {  
            headers: {  
                'Authorization': `Bearer ${OPENAI_API_KEY}`,  
                'Content-Type': 'application/json'  
            }  
        });  

        // Extract and log the response  
        const comment = response.data.choices[0].message.content;  
        console.log('Comments from ChatGPT:');  
        console.log(comment);  
    } catch (error) {  
        console.error('Error fetching comments:', error.response ? error.response.data : error.message);  
    }  
};  

// Call the function with the FEN  
getChessComments(fen);  