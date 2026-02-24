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
