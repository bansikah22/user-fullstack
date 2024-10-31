# helpers.py

def validate_text(text):
    """Validates that the input text is a non-empty string."""
    if not isinstance(text, str) or len(text.strip()) == 0:
        raise ValueError("Text must be a non-empty string.")
    return True

def sanitize_text(text):
    """Sanitizes the input text by stripping whitespace."""
    return text.strip()
