// קריאת שם המשתמש מ-localStorage
window.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('currentUser'); // שליפת שם המשתמש

    if (username) {
        const usernameDisplay = document.getElementById('usernameDisplay');
        usernameDisplay.textContent = username; // הצגת השם
    } else {
        alert('אין משתמש מחובר! הפניה לעמוד הכניסה.');
        window.location.href = 'login.html'; // הפניה חזרה לעמוד הכניסה
    }
});


document.querySelector('.primary-btn').addEventListener('click', () => {
    // שליפת הערכים מהטופס
    const locationText = document.getElementById('locationtext').value;
    const locationSelect = document.getElementById('location').value;

    const activityChoices = [];
    document.querySelectorAll('input[name="choice"]:checked').forEach((checkbox) => {
        activityChoices.push(checkbox.value);
    });

    // יצירת URL עם פרמטרים
    const queryParams = new URLSearchParams({
        location: locationText || locationSelect,
        activities: activityChoices.join(',')
    });

    // מעבר לעמוד הבא עם הפרמטרים
    window.location.href = `cards.html?${queryParams.toString()}`;
});
