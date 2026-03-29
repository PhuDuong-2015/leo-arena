// Chuyển đổi giữa Login và Register
function swap() {
    const login = document.getElementById('login-form');
    const register = document.getElementById('register-form');
    
    login.classList.toggle('hidden');
    register.classList.toggle('hidden');
}

// Xử lý thanh năng lượng mật khẩu (Password Strength)
const passInput = document.getElementById('reg-pass');
const loader = document.getElementById('pass-loader');

passInput.addEventListener('input', () => {
    let val = passInput.value;
    let power = 0;

    if (val.length > 4) power = 30;
    if (val.length > 8 && /[A-Z]/.test(val)) power = 65;
    if (val.length > 10 && /[0-9]/.test(val)) power = 100;

    loader.style.width = power + '%';
    // Hiệu ứng nhấp nháy khi đạt 100%
    if(power === 100) {
        loader.style.boxShadow = "0 0 20px #00f3ff";
    } else {
        loader.style.boxShadow = "0 0 8px #00f3ff";
    }
});