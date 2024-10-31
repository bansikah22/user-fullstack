import os

class Config:
    """Configuration class for the application."""
    DEBUG = True
    ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*")  # CORS settings
    MAX_INPUT_LENGTH = 2000  # Maximum input length in words

    # You can add more configuration variables as needed
