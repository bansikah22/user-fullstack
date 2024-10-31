# Clone the repository
git clone your-github-repo-url text-summarization-tool

# Navigate to the project directory
cd text-summarization-tool

# Set up the backend
```bash
cd backend
python3 -m venv venv   # Create a virtual environment | don't follow this so that you won't have to install all the dependencies again so just source to activate the already existing pages
source venv/bin/activate      # Activate the virtual environment (use `venv\Scripts\activate` on Windows)
pip install -r requirements.txt  # Install required packages
python app.py  or python3 app.py # This runs the Flask server and also downloads the model, or you can change the facebook/bart-large-cnn model to a smaller one like `t5-small`
```
# Set up the frontend
cd ../frontend
open the index.html on your browser or follow the optional step below

# Optional: Use a local server to serve the frontend
python -m http.server  # This serves the frontend at http://localhost:8000

Accessing the Application
Backend URL: http://127.0.0.1:5000 (for API requests)
Frontend URL: http://localhost:8000 (for the web interface)

Testing the Application
Open the frontend in your browser at http://localhost:8000.
Enter a long piece of text and click "Summarize" to test if the application works as expected.

```text
flask
flask-cors
transformers
torch
```
Explanation of the Packages
`flask:` The web framework for building the backend API.
`flask-cors:` A Flask extension for handling Cross-Origin Resource Sharing (CORS), allowing your frontend to communicate with the backend.
`transformers:` The Hugging Face library that provides the pre-trained models and pipelines, including the distilbart model.
`torch:` The PyTorch library, which is required to run the models from the transformers library.