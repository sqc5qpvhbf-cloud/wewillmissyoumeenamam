window.onload = () => {
    setTimeout(() => {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('profile-screen').classList.remove('hidden');
    }, 3200);
};

function showSection(id) {
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    if(id === 'teacher') {
        let text = "We will miss you, Meena Mam...";
        let i = 0;
        document.getElementById('typing-msg').innerText = "";
        let timer = setInterval(() => {
            document.getElementById('typing-msg').innerText += text[i];
            i++; if(i >= text.length) clearInterval(timer);
        }, 100);
    }
}

function goBack() {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('profile-screen').classList.remove('hidden');
}
