from flask import Flask, request, jsonify
from flask_cors import CORS
from model.summarization import summarize_text
from utils.helpers import validate_text, sanitize_text
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, origins=app.config['ALLOWED_ORIGINS'])  # Allow CORS for specified origins

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    text = data['text']
    
    try:
        # Validate and sanitize the input text
        validate_text(text)
        sanitized_text = sanitize_text(text)
        
        summary = summarize_text(sanitized_text)
        return jsonify(summary=summary)
    except ValueError as ve:
        return jsonify(error=str(ve)), 400
    except Exception as e:
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)
