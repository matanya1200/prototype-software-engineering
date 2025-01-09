// נתונים לדוגמה
const cardsData = [
    {
        type: "מסלול",
        subType: "יותר מיום",
        name: "שביל ישראל",
        location: "כל הארץ",
        description: "שביל הליכה המחבר את כל חלקי המדינה מנחל דן בצפון ועד אילת בדרום.",
        length: 1100,
        highlights: [
            "מעבר דרך נופים מרהיבים בגליל העליון.",
            "ביקור באתרים היסטוריים כמו מצדה ומצפה רמון.",
            "חוויה ייחודית של טבע ואנשים לאורך כל הדרך."
        ],
        tips: [
            "מומלץ לחלק את המסלול למקטעים וליהנות מכל חלק בנפרד.",
            "יש לוודא נקודות מים ונקודות חניה לאורך המסלול.",
            "מתאים למטיילים מנוסים עם ציוד מתאים למסע."
        ]
    }
];

// שליפת שם המסלול מ-URL
const urlParams = new URLSearchParams(window.location.search);
const cardName = urlParams.get('name');

// מציאת המסלול לפי השם
const cardDetails = cardsData.find(card => card.name === cardName);

if (cardDetails) {
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = `
        <h2>${cardDetails.name}</h2>
        <p><strong>סוג:</strong> ${cardDetails.type} (${cardDetails.subType})</p>
        <p><strong>מיקום:</strong> ${cardDetails.location}</p>
        <p><strong>תיאור:</strong> ${cardDetails.description}</p>
        <p><strong>אורך מסלול:</strong> ${cardDetails.length} ק"מ</p>
        <h3>דגשים לאורך המסלול:</h3>
        <ul>
            ${cardDetails.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
        <h3>טיפים למטיילים:</h3>
        <ul>
            ${cardDetails.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
    `;
} else {
    alert('לא נמצאו פרטים על המסלול!');
    window.location.href = 'cards.html';
}

document.getElementById('return').addEventListener('click', () => {
    window.location.href = 'search.html'; // חזרה לעמוד החיפוש
});