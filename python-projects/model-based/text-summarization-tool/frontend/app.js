document.getElementById('summarizationForm').onsubmit = async function (e) {
    e.preventDefault();
    const inputText = document.getElementById('inputText').value;

    // Show loading indicator
    const summaryResult = document.getElementById('summaryResult');
    summaryResult.innerText = "Generating summary...";

    try {
        const response = await fetch('http://127.0.0.1:5000/summarize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: inputText })
        });

        const summaryData = await response.json();
        if (summaryData.error) {
            summaryResult.innerText = "Error: " + summaryData.error;
        } else {
            summaryResult.innerText = summaryData.summary;
        }
    } catch (error) {
        summaryResult.innerText = "Error: " + error.message;
    }
};
