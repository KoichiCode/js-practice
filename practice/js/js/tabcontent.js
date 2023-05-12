function changeTab(tabIndex){
    var tabs = document.getElementById('tab');
    for (var i = 0; i < tabs.clientHeight; i++){
        tabs[i].stayle.displey = 'none';      
    }
    document.getElementById('tab' + (tabIndex + 1)).style.display = 'block';
}