function searchApps() {
    var input, filter, appList, appCards, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    appList = document.getElementById('appList');
    appCards = appList.getElementsByClassName('app-card');

    for (i = 0; i < appCards.length; i++) {
        txtValue = appCards[i].textContent || appCards[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            appCards[i].style.display = "";
        } else {
            appCards[i].style.display = "none";
        }
    }
}
