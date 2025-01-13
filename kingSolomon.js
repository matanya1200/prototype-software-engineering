// נתוני המלון
const hotelData = {
    name: "מלון המלך שלמה",
    description: "מלון המלך שלמה הוא מלון יוקרתי במרכז ירושלים, המציע חווית אירוח מפנקת ומיוחדת. המלון ממוקם בלב העיר ומציע גישה נוחה לאתרים היסטוריים ומרכזי קניות.",
    location: "רחוב המלך שלמה 5, ירושלים",
    priceRange: "700-1500 ש\"ח ללילה",
    website: "https://www.king-solomon-hotel.com"
};

// שליפת האלמנט שאליו יוזנו הפרטים
const detailsContainer = document.getElementById("detailsContainer");

// הוספת תוכן המלון לדף
detailsContainer.innerHTML = `
    <section>
        <h2>תיאור המקום</h2>
        <p>${hotelData.description}</p>
    </section>

    <section>
        <h2>מיקום</h2>
        <p>${hotelData.location}</p>
    </section>

    <section>
        <h2>טווח מחירים</h2>
        <p>${hotelData.priceRange}</p>
    </section>

    <section>
        <h2>קישור לאתר</h2>
        <a href="${hotelData.website}" target="_blank">לאתר הרשמי של מלון המלך שלמה</a>
    </section>
`;

// כפתור חזרה לעמוד הקודם
document.getElementById('backToCards').addEventListener('click', () => {
    window.history.back();
});
