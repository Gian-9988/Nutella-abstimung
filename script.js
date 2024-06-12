document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const vote = formData.get('vote');
    
    if (vote) {
        // Hier könnte der Vote an einen Server gesendet werden
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = `Du hast für ${vote} gestimmt!`;
    } else {
        alert('Bitte wähle eine Option aus!');
    }
});
