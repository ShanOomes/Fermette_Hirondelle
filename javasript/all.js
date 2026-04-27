// Open and close sidebar
function openNav() {
document.getElementById("mySidebar").style.width = "60%";
document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
document.getElementById("mySidebar").style.display = "none";
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    var favicon = document.querySelector('link[rel="icon"]');
    favicon.href = "images/favicon-l-32x32.png";
}

function toggleText(paragraphId, button) {
var paragraph = document.getElementById(paragraphId);

if (paragraph.classList.contains("limited-text")) {
    paragraph.classList.remove("limited-text");
    button.textContent = "Verberg tekst";
} else {
    paragraph.classList.add("limited-text");
    button.textContent = "Lees verder";
}
}

window.onload = function() {
flkty = new Flickity('.gallery', {
});

flkty.resize();
};

var customIcon = L.icon({
iconUrl: 'images/marker.png',
iconSize: [32, 32],
iconAnchor: [16, 32],
});

var map = L.map('map').setView([50.08327285622026, 1.7151861244350335], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Imagery &copy; Esri'
}).addTo(map);

L.marker([50.08327285622026, 1.7151861244350335], { icon: customIcon, title: 'Fermette Hirondelle' }).addTo(map);



class CharacterCounter {
constructor(textareaId, countId) {
    this.textarea = document.getElementById(textareaId);
    this.countDisplay = document.getElementById(countId);
    
    this.textarea.addEventListener("input", this.countCharacters.bind(this));
}

countCharacters() {
    const text = this.textarea.value;
    const characterCount = text.length;
    
    this.countDisplay.textContent = `${characterCount} / 250`;
}
}

// Create instances for each textarea and count display
const counter1 = new CharacterCounter("message1", "count1");
const counter2 = new CharacterCounter("message2", "count2");


$(function() {
    // Functie om te controleren of een datum een zaterdag is
    function isSaturday(date) {
        return date.day() === 6; // 6 staat voor zaterdag (zondag = 0, maandag = 1, enz.)
    }

    // Opties voor de datumkiezer
    var options = {
        locale: {
        format: 'DD-MM-YYYY',
        separator: ' - ',
        applyLabel: 'Toepassen',
        cancelLabel: 'Annuleren',
        fromLabel: 'Van',
        toLabel: 'Tot',
        customRangeLabel: 'Aangepast',
        weekLabel: 'W',
        daysOfWeek: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
        monthNames: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
        firstDay: 1
        },
        minDate: moment().startOf('day'),
        maxDate: moment().add(1, 'year').endOf('day'),
        isInvalidDate: function(date) {
        return !isSaturday(date);
        },
        showWeekNumbers: true,
        isCustomDate: function(date) {
        return isSaturday(date) ? 'bold' : '';
        },
        autoUpdateInput: false
    };

    // Initialiseer de datumbereikkiezer
    var dateRangePicker = $('#dateRangePicker').daterangepicker(options);

    // Event listener voor het toepassen van de geselecteerde datumrange
    dateRangePicker.on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD-MM-YYYY') + ' - ' + picker.endDate.format('DD-MM-YYYY'));
    });
    });

const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('children');

adultsInput.addEventListener('input', updateChildrenMax);
childrenInput.addEventListener('input', updateAdultsMax);

function updateChildrenMax() {
    const adultsCount = parseInt(adultsInput.value, 10);
    childrenInput.max = 4 - adultsCount;
}

function updateAdultsMax() {
    const childrenCount = parseInt(childrenInput.value, 10);
    adultsInput.max = 4 - childrenCount;
}

const reviewsPerPage = 4; // Number of reviews to display per page
let currentPage = 1;

function showPage(page) {
    const reviews = document.querySelectorAll('.review');
    const startIndex = (page - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;

    reviews.forEach((review, index) => {
        if (index >= startIndex && index < endIndex) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
    
    currentPage = page;
}

// Call the function to display the initial page on load
showPage(currentPage);