// ========== แบบทดสอบที่ 2.3: การควบคุมการทำงาน (Conditionals & Loops) ==========

// โปรแกรมที่ 1: ตรวจสอบเลขคู่/เลขคี่
function checkEvenOdd() {
    const number = parseInt(document.getElementById('evenOddNumber').value);

    if (isNaN(number)) {
        document.getElementById('evenOddOutput').innerHTML = '<span style="color: red;">กรุณากรอกตัวเลข</span>';
        return;
    }

    let result = `<strong>ผลการตรวจสอบตัวเลข: ${number}</strong><br>`;
    if (number % 2 === 0) {
        result += `<span style="color: blue;">${number} เป็นเลขคู่</span>`;
    } else {
        result += `<span style="color: green;">${number} เป็นเลขคี่</span>`;
    }

    document.getElementById('evenOddOutput').innerHTML = result;
}

// โปรแกรมที่ 2: ตารางสูตรคูณ แม่ 2 (for loop) และแม่ 3 (while loop)
function showMultiplicationTables() {
    let result = '=== สูตรคูณแม่ 2 (for loop) ===\n';

    // for loop - แม่ 2
    for (let i = 1; i <= 12; i++) {
        result += `2 × ${i} = ${2 * i}\n`;
    }

    result += '\n=== สูตรคูณแม่ 3 (while loop) ===\n';

    // while loop - แม่ 3
    let j = 1;
    while (j <= 12) {
        result += `3 × ${j} = ${3 * j}\n`;
        j++;
    }

    document.getElementById('tablesOutput').innerHTML = result;
}

// โปรแกรมที่ 3: นับถอยหลัง 10-1
function countdown() {
    let result = '<strong>นับถอยหลังจาก 10 ถึง 1:</strong><br>';
    for (let i = 10; i >= 1; i--) {
        result += `<span style="font-size: 18px; color: ${i % 2 === 0 ? 'blue' : 'red'};">${i}</span> `;
    }
    result += '<br><span style="color: green; font-weight: bold;">Finished!</span>';

    document.getElementById('countdownOutput').innerHTML = result;
}

// โปรแกรมที่ 4: ตรวจสอบช่วงวัย
function checkAgeGroup() {
    const age = parseInt(document.getElementById('ageInput').value);

    if (isNaN(age) || age < 0) {
        document.getElementById('ageOutput').innerHTML = '<span style="color: red;">กรุณากรอกอายุที่ถูกต้อง</span>';
        return;
    }

    let ageGroup = '';
    let color = '';

    // ตรวจสอบช่วงวัย
    if (age < 6) {
        ageGroup = 'วัยเด็ก (0-5 ปี) - เด็กวัยพ่อแม่';
        color = '#FFB6C1';
    } else if (age < 13) {
        ageGroup = 'วัยเด็ก (6-12 ปี) - เด็กประศูนย์';
        color = '#87CEEB';
    } else if (age < 18) {
        ageGroup = 'วัยรุ่น (13-17 ปี) - เด็กชั้นมัธยม';
        color = '#98FB98';
    } else if (age < 60) {
        ageGroup = 'วัยผู้ใหญ่ (18-59 ปี) - ผู้ใหญ่';
        color = '#FFD700';
    } else {
        ageGroup = 'ผู้สูงอายุ (60+ ปี) - ผู้สูงอายุ';
        color = '#DEB887';
    }

    let result = `<strong>ผลการตรวจสอบ</strong><br>`;
    result += `อายุ: ${age} ปี<br>`;
    result += `<span style="color: white; background-color: ${color}; padding: 10px; border-radius: 5px; display: inline-block;">${ageGroup}</span>`;

    document.getElementById('ageOutput').innerHTML = result;
}

// ========== แบบทดสอบที่ 2.4.1: Functions (ฟังค์ชันทัวไป) ==========

// โปรแกรมที่ 1: คำนวณ BMI (ดัชนีมวลกาย)
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // ตรวจสอบว่ากรอกข้อมูลครบถ้วน
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmiOutput').innerHTML = '<span style="color: red;">กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง</span>';
        return;
    }

    // คำนวณ BMI: น้ำหนัก / (ส่วนสูง^2)
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let category = '';
    let color = '';

    // ปัดชัน BMI
    if (bmi < 18.5) {
        category = 'ผอม';
        color = '#87CEEB';
    } else if (bmi < 24.9) {
        category = 'สมส่วน';
        color = '#90EE90';
    } else if (bmi < 29.9) {
        category = 'อ้วน';
        color = '#FFD700';
    } else {
        category = 'อ้วนกว่า';
        color = '#FF6347';
    }

    let result = `<strong>ผลการคำนวณ BMI</strong><br>`;
    result += `น้ำหนัก: ${weight} kg<br>`;
    result += `ส่วนสูง: ${height} cm<br>`;
    result += `<strong>BMI: ${bmi.toFixed(2)}</strong><br>`;
    result += `<span style="color: white; background-color: ${color}; padding: 8px 12px; border-radius: 5px; display: inline-block;">สถานภาพ: ${category}</span>`;

    document.getElementById('bmiOutput').innerHTML = result;
}

// โปรแกรมที่ 2: ทักทายตามอายุ
function greetByAge() {
    const name = document.getElementById('greetingName').value;
    const age = parseInt(document.getElementById('greetingAge').value);

    if (!name || isNaN(age) || age < 0) {
        document.getElementById('greetingOutput').innerHTML = '<span style="color: red;">กรุณากรอกชื่อและอายุ</span>';
        return;
    }

    let greeting = '';
    let emoji = '';

    if (age < 6) {
        greeting = `สังขรรค์ เด็กน้อย ${name} ครับ`;
        emoji = '👶';
    } else if (age < 13) {
        greeting = `สังขรรค์ เด็กโปรแกรม ${name} ครับ`;
        emoji = '👧👦';
    } else if (age < 18) {
        greeting = `สังขรรค์เกวิล ${name} ครับ`;
        emoji = '🎒';
    } else if (age < 60) {
        greeting = `สังขรรค์ผู้ใหญ่ ${name}`;
        emoji = '👨👩';
    } else {
        greeting = `สังขรรค์์ผู้ใหญ่วิทยาช่ ${name}`;
        emoji = '👴👵';
    }

    let result = `<strong style="font-size: 18px; color: #2c3e50;">${emoji} ${greeting} ${emoji}</strong><br>`;
    result += `<span style="color: #7f8c8d; font-size: 14px;">อายุ: ${age} ปี</span>`;

    document.getElementById('greetingOutput').innerHTML = result;
}

// โปรแกรมที่ 3: ตรวจสอบรหัสผ่าน
function validatePassword() {
    const password = document.getElementById('password').value;

    let result = '<strong>ผลการตรวจสอบรหัสผ่าน</strong><br>';
    result += `ความยาว: ${password.length} ตัวอักษร<br>`;

    if (password.length === 0) {
        result += '<span style="color: red;">\u26a0 กรุณาหอละเปรุทรัฮัส</span>';
    } else if (password.length < 8) {
        result += `<span style="color: red;">\u274c ไม่ปลอดภัย (ต้องมีอย่าง 8 ตัว)</span>`;
    } else if (password.length === 8) {
        result += '<span style="color: #FF8C00;">⚠ หมเดพัอ (ตรง 8 ตัวแปน)</span>';
    } else if (password.length < 12) {
        result += '<span style="color: #90EE90;">✓ ปลอดภัยคฤณ</span>';
    } else {
        result += '<span style="color: #00AA00; font-weight: bold;">✓✓ ปลอดภัยมากมาย!</span>';
    }

    document.getElementById('passwordOutput').innerHTML = result;
}

