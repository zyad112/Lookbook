function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // بيانات الدخول الافتراضية
    if (username === "ZYAD" && password === "10102007") {
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('app').classList.add('active');
        showSection('home'); // نقل المستخدم إلى الصفحة الرئيسية
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
}

function submitPost() {
    const postContent = document.getElementById('newPost').value;
    if (postContent.trim() !== "") {
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
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f0f8ff';
        document.body.style.color = '#333';
    }
}

function searchAI() {
    const input = document.getElementById('aiInput').value;
    if (input.trim() !== "") {
        const result = document.createElement('div');
        result.className = 'aiResult';
        result.textContent = `نتائج البحث عن "${input}" ستكون هنا.`;
        document.getElementById('aiResults').appendChild(result);
    } else {
        alert('يرجى كتابة شيء للبحث عنه.');
    }
}

function sendMessage() {
    const messageContent = document.getElementById('newMessage').value;
    if (messageContent.trim() !== "") {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = messageContent;
        document.getElementById('messageList').appendChild(message);
        document.getElementById('newMessage').value = '';
    } else {
        alert('يرجى كتابة محتوى للرسالة.');
    }
}
