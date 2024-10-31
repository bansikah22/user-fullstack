from transformers import pipeline

# Load the summarization model
summarizer = pipeline("summarization", model="t5-small")

def summarize_text(text):
    # Ensure the text is less than 1024 tokens for BART model
    if len(text.split()) > 1024:
        text = ' '.join(text.split()[:1024])  # Truncate to 1024 words
    summary = summarizer(text, max_length=130, min_length=30, do_sample=False)
    return summary[0]['summary_text']
