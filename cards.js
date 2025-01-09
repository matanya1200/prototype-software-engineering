// נתונים לדוגמה
const cardsData = [
    { type: "שינה", subType: "בתי מלון", name: "מלון המלך שלמה", location: "ירושלים", description: "מלון מפואר במרכז העיר." },
    { type: "שינה", subType: "צימרים", name: "צימר ביער", location: "גליל", description: "צימר שקט בלב היער." },
    { type: "שינה", subType: "לינה בשטח", name: "קמפינג בים", location: "אילת", description: "אתר קמפינג על שפת הים האדום." },
    { type: "שינה", subType: "Airbnb", name: "דירת נופש במרכז", location: "תל אביב", description: "דירה מעוצבת בלב תל אביב." },
    { type: "אטרקציה", subType: "פארקי אקסטרים", name: "אקסטרים פארק", location: "מרכז", description: "פארק אקסטרים ענק לכל המשפחה." },
    { type: "אטרקציה", subType: "פארקי מים", name: "פארק המים הגדול", location: "צפון", description: "בריכות ומגלשות מים מגוונות." },
    { type: "אטרקציה", subType: "צניחה", name: "צניחה חופשית בשמיים", location: "דרום", description: "חוויה עוצרת נשימה מעל הנופים." },
    { type: "אטרקציה", subType: "קייאקים", name: "שייט בירדן", location: "גליל", description: "חוויה מושלמת בשייט קייאקים." },
    { type: "אטרקציה", subType: "חיות", name: "ספארי רמת גן", location: "מרכז", description: "פגוש חיות בר מסביב לעולם." },
    { type: "אטרקציה", subType: "מוזיאונים", name: "מוזיאון ישראל", location: "ירושלים", description: "מוזיאון אומנות והיסטוריה בינלאומי." },
    { type: "אטרקציה", subType: "מסעדות", name: "מסעדת נוף הים", location: "חיפה", description: "מסעדת גורמה עם נוף מרהיב." },
    { type: "אטרקציה", subType: "קטיף", name: "קטיף עצמי במושב", location: "שפלה", description: "קטיף עצמי של פירות העונה." },
    { type: "אטרקציה", subType: "קייאקים", name: "שייט כינרת", location: "צפון", description: "שייט משפחתי בכינרת." },
    { type: "אטרקציה", subType: "מוזיאונים", name: "מוזיאון המדע", location: "תל אביב", description: "חוויה לימודית לכל המשפחה." },
    { type: "מסלול", subType: "מסלולי שטח", name: "שביל הגולן", location: "צפון", description: "מסלול מאתגר עם נוף מרהיב.", length: 20 },
    { type: "מסלול", subType: "מסלולי מים", name: "נחל שניר", location: "גליל", description: "מסלול קסום מלא מים.", length: 6 },
    { type: "מסלול", subType: "יותר מיום", name: "שביל ישראל", location: "כל הארץ", description: "מסלול הליכה לאורך כל המדינה.", length: 1100 },
    { type: "מסלול", subType: "עבור משפחה", name: "שביל עמק המעיינות", location: "צפון", description: "מסלול קצר ומושלם למשפחות.", length: 4 },
    { type: "מסלול", subType: "מתאים לזוגות צעירים", name: "נחל כזיב", location: "גליל", description: "מסלול רומנטי לצד המים.", length: 8 },
    { type: "מסלול", subType: "מתאים לבעלי חיים", name: "שביל החוף", location: "מרכז", description: "מסלול קליל ליד הים.", length: 3 },
    { type: "מסלול", subType: "מסלולי מים", name: "נחל ערוגות", location: "דרום", description: "חוויה ייחודית בנחל מדברי.", length: 7 },
    { type: "מסלול", subType: "יותר מיום", name: "מסלול מצדה", location: "דרום", description: "אתגר מיוחד למטיילים.", length: 12 },
    { type: "מסלול", subType: "מסלולי שטח", name: "הרי אילת", location: "אילת", description: "מסלול קשה אך מספק.", length: 15 },
    { type: "מסלול", subType: "עבור משפחה", name: "נחל השופט", location: "גליל", description: "מסלול קל ונגיש.", length: 2 },
    { type: "מסלול", subType: "מתאים לזוגות צעירים", name: "שביל הר עמשא", location: "דרום", description: "מסלול רומנטי עם נופים יפים.", length: 10 }
];
// פונקציה למעבר לעמוד פרטים או הצגת הודעה
function viewDetails(cardName) {
    if (cardName === "שביל ישראל") {
        // מעבר לעמוד "details.html" עם שם המסלול ב-URL
        window.location.href = `details.html?name=${encodeURIComponent(cardName)}`;
    } else {
        // הודעה על פיתוח
        alert('עמוד זה עדיין בפיתוח. חזור בקרוב!');
    }
}

// קריאת פרמטרים מ-URL
const urlParams = new URLSearchParams(window.location.search);
const selectedLocation = urlParams.get('location') || 'all';
const selectedActivities = urlParams.get('activities')?.split(',') || [];

// סינון הכרטיסים
const filteredCards = cardsData.filter(card => {
    // התאמת מיקום - חייב להתאים
    const matchesLocation =
        selectedLocation === 'all' || card.location.includes(selectedLocation);

    // התאמת סוגי הפעילויות - אם לא נבחרה שום פעילות, כל הפעילויות מתאימות
    const matchesActivity =
        selectedActivities.length === 0 || selectedActivities.some(activity => card.subType.toLowerCase().includes(activity));

    // החזרה רק של כרטיסים שממוקמים ומכילים לפחות אחת מהפעילויות או את כולן
    return matchesLocation && matchesActivity;
});

// הצגת הכרטיסים
const cardsContainer = document.getElementById('cardsContainer');
if (filteredCards.length === 0) {
    cardsContainer.innerHTML = `<p>לא נמצאו כרטיסים התואמים לחיפוש. נסה לבחור מיקום או סוג פעילות שונה.</p>`;
} else {
    filteredCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${card.name}</h3>
            <p>סוג: ${card.type} (${card.subType})</p>
            <p>מיקום: ${card.location}</p>
            <p>${card.description}</p>
            ${card.length ? `<p>אורך מסלול: ${card.length} ק"מ</p>` : ''}
            <button onclick="viewDetails('${card.name}')">פרטים נוספים</button>
        `;
        cardsContainer.appendChild(cardElement);
    });
}

document.getElementById('return').addEventListener('click', () => {
    window.location.href = 'search.html'; // חזרה לעמוד החיפוש
});