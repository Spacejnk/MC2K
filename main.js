// fetch issues from FORM and add to local storage func
function fetchIssues() {
    let issues = JSON.parse(localStorage.getItem('issues'));
    let issuesList = document.getElementById('issuesList');

    // set content of div element issuesList to empty string
    issuesList.innerHTML = '';

    // generate text with for loop to localStorage
    for (let i = 0; i < issues.length; i++){
        let id = issues[i].id;
        let desc = issues[i].description;
        let severity = issues[i].severity;
        let assingedTo = issues[i].assingedTo;
        let status = issues[i].status;
    }
}
