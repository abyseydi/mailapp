document.addEventListener("deviceready", getMailList);
document.getElementById("create").addEventListener("click", createContact);


function getMailList() {
   var myMails = [
        {"sender":"Mansour", "message" : "Bonjour vous allez bien, Bonjour vous allez bien, comment ca va"},
        {"sender":"Modou", "message":"Bonjour vous allez bien, Bonjour vous allez bien" },
        {"sender":"Fatou", "message":"Bonjour vous allez bien" }, {"sender":"FatouS", "message":"Bonjour vous allez bien" }];

        //alert(contacts);
        let codeHTML = '';
        for (let i = 0; i < myMails.length; i++) {
            codeHTML +=   `<li>
            <a onClick='showMail("${myMails[i].sender}", "${myMails[i].message}")' href="#show-mail">
                <img src="./img/logo.png" alt="my contact">
                <h1>${myMails[i].sender}</h1>
                <p>${myMails[i].message.substring(0, 30)}</p>
            </a>
        </li>`;

        }
        //console.log())
        mailList.innerHTML = codeHTML;
        $(mailList).listview('refresh');
}

function showMail(mailSender, message){
    //alert(mail)
    nameMail.innerHTML = mailSender;
    mailContent.innerHTML = message;
    }
