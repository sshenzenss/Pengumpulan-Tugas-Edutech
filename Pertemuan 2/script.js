function filterProject(category) {

    let projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {

        if(category === 'all') {
            project.style.display = 'block';
        }
        else if(project.classList.contains(category)) {
            project.style.display = 'block';
        }
        else {
            project.style.display = 'none';
        }

    });
}


function validateForm() {

    let input = document.getElementById('messageInput');
    let warning = document.getElementById('warningMessage');

    if(input.value.trim() === '') {

        warning.textContent =
            'Pesan tidak boleh kosong!';

        warning.style.color = 'red';

        return false;
    }

    warning.textContent =
        'Pesan berhasil dikirim!';

    warning.style.color = 'green';

    input.value = '';
}
