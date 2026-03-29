const i18n = {
    vi: {
        // Trang Index (Login)
        lang_btn: "EN",
        sys_label: "Hệ thống quản trị cầu thủ",
        sys_desc: "Chào mừng trở lại. Đăng nhập để truy cập hồ sơ cầu thủ và lịch thi đấu ARENA.",
        login_user_label: "Tên đăng nhập / Email",
        login_pass_label: "Mật khẩu bảo mật",
        btn_kickoff: "KHÁM PHÁ NGAY",
        no_account: "Chưa có tài khoản?",
        reg_now: "ĐĂNG KÝ NGAY",

        // Trang Register (Tân binh)
        label_name: "Tên cầu thủ nhí",
        label_phone: "SĐT Phụ huynh",
        label_time: "Chọn khung giờ tập",
        opt_morning: "Sáng (07:30 - 09:00)",
        opt_afternoon: "Chiều (16:30 - 18:00)",
        btn_confirm: "XÁC NHẬN GIA NHẬP",
        has_account: "Đã có tài khoản?",
        login_now: "ĐĂNG NHẬP NGAY",
        footer_location_title: "ĐỊA ĐIỂM SÂN TẬP",
        footer_location_desc: "Sân Thanh Niên - Gò Vấp, TPHCM",
        footer_contact_title: "LIÊN HỆ COACH OLA",

        // Trang Home (Dashboard)
        logout: "THOÁT",
        hero_h1: "NÂNG TẦM KỸ NĂNG",
        hero_p: "Chào mừng bạn đến với học viện LEO. Nơi rèn luyện những chiến binh sân cỏ thực thụ.",
        skill_h: "KỸ THUẬT THƯỢNG THỪA",
        eng_h: "TIẾNG ANH BÓNG ĐÁ",
        team_h: "THỂ LỰC & ĐỒNG ĐỘI",
        coach_h: "HLV KINH NGHIỆM OLA",
        coach_p: '"Dẫn dắt bởi Coach Ola - Huấn luyện viên chuyên nghiệp với nhiều năm kinh nghiệm đào tạo lứa trẻ."'
    },
    en: {
        // Trang Index (Login)
        lang_btn: "VI",
        sys_label: "Player Management System",
        sys_desc: "Welcome back. Log in to access player profiles and ARENA match schedules.",
        login_user_label: "Username / Email",
        login_pass_label: "Security Password",
        btn_kickoff: "KICK OFF NOW",
        no_account: "No account yet?",
        reg_now: "REGISTER NOW",

        // Trang Register (Recruit)
        label_name: "Recruit Name",
        label_phone: "Parent's Phone",
        label_time: "Choose Training Slot",
        opt_morning: "Morning (07:30 - 09:00)",
        opt_afternoon: "Afternoon (16:30 - 18:00)",
        btn_confirm: "CONFIRM SQUAD",
        has_account: "Already have an account?",
        login_now: "LOGIN NOW",
        footer_location_title: "TRAINING GROUND",
        footer_location_desc: "Thanh Nien Stadium - Go Vap, HCMC",
        footer_contact_title: "CONTACT COACH OLA",

        // Trang Home (Dashboard)
        logout: "LOGOUT",
        hero_h1: "LEVEL UP YOUR SKILLS",
        hero_p: "Welcome to LEO Academy. A place to train real field warriors through professional systems.",
        skill_h: "ELITE TECHNIQUES",
        eng_h: "FOOTBALL ENGLISH",
        team_h: "STAMINA & TEAMWORK",
        coach_h: "PRO COACH OLA",
        coach_p: '"Led by Coach Ola - A professional coach with years of youth training experience."'
    }
};

// Hàm chuyển đổi ngôn ngữ và lưu vào localStorage
function changeLanguage() {
    let currentLang = localStorage.getItem('lang') || 'vi';
    let newLang = currentLang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('lang', newLang);
    location.reload(); 
}

// Tự động quét và dịch các thẻ có thuộc tính data-i18n khi trang web load xong
document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem('lang') || 'vi';
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang] && i18n[lang][key]) {
            // Sử dụng innerHTML để hỗ trợ cả các chuỗi có chứa thẻ xuống dòng hoặc icon
            el.innerHTML = i18n[lang][key];
        }
    });
});