document.getElementById('healthForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // الحصول على القيم المدخلة
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;

    // حساب المؤشر الجسم (BMI)
    const bmi = weight / ((height / 100) ** 2);

    // تحديد الوجبة بناءً على المدخلات
    let meal;
    if (bmi < 18.5) {
        meal = 'وجبة عالية السعرات الحرارية مثل الأرز والدجاج.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        meal = 'وجبة متوازنة مثل السلطة مع السمك.';
    } else {
        meal = 'وجبة منخفضة السعرات الحرارية مثل الخضروات المشوية.';
    }

    // عرض النتيجة
    document.getElementById('result').textContent = `نقترح عليك ${meal}`;
});
