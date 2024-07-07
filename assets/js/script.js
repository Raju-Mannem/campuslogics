document.getElementById("tja1").href="../internships/microsoft-sf-internship.html";
document.getElementById('tjp1').innerHTML="Microsoft Internship 2024";
document.getElementById('tja2').href="../jobs/tcs-smart-hiring.html";
document.getElementById('tjp2').innerHTML="TCS Smart Hiring";
document.getElementById('tja3').href="../jobs/appsc-group-1.html";
document.getElementById('tjp3').innerHTML="APPSC Group 1";
document.getElementById('tja4').href="../jobs/alcon-software-engineer.html";
document.getElementById('tjp4').innerHTML="Alcon - Software Engineer";
document.getElementById('tja5').href="../jobs/deloitte-associate-analyst.html";
document.getElementById('tjp5').innerHTML="Deloitte Associate Analyst";
document.getElementById('tja6').href="../scholarships/helpone-pg-scholarship.html";
document.getElementById('tjp6').innerHTML="HelpOne PG Scholarship";
document.getElementById('sm-yt').href="https://www.youtube.com/@Campuslogics";
document.getElementById('sm-wh').href="https://www.whatsapp.com/channel/0029VaArlbZJ3juzEnjiMH2J";
document.getElementById('sm-in').href="https://www.youtube.com/@Campuslogics";
document.getElementById('sm-te').href="https://t.me/campuslogics";
let nf = document.getElementById("nofound");
function renderCards(query) {
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.getElementsByClassName('card');
    Array.from(cards).forEach(card => {
        const searchData = card.getAttribute('data-search').toLowerCase();
        const isVisible = searchData.includes(query.toLowerCase());
        // card.style.display = isVisible ? 'block' : 'none';
        if (isVisible==true) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }       
    });
}
function filterCards() {
    const searchInput = document.getElementById('sh-input');
    const searchQuery = searchInput.value.trim();
    renderCards(searchQuery);
}
function mobileFilterCards(){
    const mobileSearchInput = document.getElementById('mobile-sh-input');
    const mobileSearchQuery = mobileSearchInput.value.trim();
    renderCards(mobileSearchQuery);
}
renderCards('');