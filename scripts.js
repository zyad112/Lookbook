document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setActiveSection('home');
});

function setupNavigation() {
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('onclick').split("'")[1];
            setActiveSection(sectionId);
        });
    });
}

function setActiveSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('inactive');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.classList.remove('inactive');
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "user" && password === "pass") {
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('app').classList.add('active');
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
}

function submitPost() {
    const postContent = document.getElementById('newPost').value.trim();
    if (postContent) {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postContent;
        document.getElementById('posts').appendChild(post);
        document.getElementById('newPost').value = '';
    } else {
        alert('يرجى كتابة محتوى للمنشور.');
    }
}

function changeTheme() {
    const theme = document.getElementById('theme').value;
    document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#f0f8ff';
    document.body.style.color = theme === 'dark' ? '#fff' : '#333';
}

function searchAI() {
    const input = document.getElementById('aiInput').value.trim();
    if (input) {
        const result = document.createElement('div');
        result.className = 'aiResult';
        result.textContent = `نتائج البحث عن "${input}" ستكون هنا.`;
        document.getElementById('aiResults').appendChild(result);
    } else {
        alert('يرجى كتابة شيء للبحث عنه.');
    }
}

function sendMessage() {
    const messageContent = document.getElementById('newMessage').value.trim();
    if (messageContent) {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = messageContent;
        document.getElementById('messageList').appendChild(message);
        document.getElementById('newMessage').value = '';
    } else {
        alert('يرجى كتابة محتوى لإرسال الرسالة.');
    }
}
