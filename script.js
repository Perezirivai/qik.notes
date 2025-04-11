document.getElementById('add-note').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value;

    if (noteText.trim() === '') {
        alert('Please enter a note!');
        return;
    }

    const notesList = document.getElementById('notes-list');
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';

    noteDiv.innerHTML = `
        <span>${noteText}</span>
        <button class="delete-note">Delete</button>
    `;

    notesList.appendChild(noteDiv);
    noteInput.value = '';

    noteDiv.querySelector('.delete-note').addEventListener('click', function() {
        notesList.removeChild(noteDiv);
    });
});
