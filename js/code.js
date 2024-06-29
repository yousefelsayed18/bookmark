var siteName = document.getElementById("siteName");
var linkSite = document.getElementById("linkSite");

var siteList = []

if (localStorage.getItem("siteContainer") !== null) {
    siteList = JSON.parse(localStorage.getItem("siteContainer"));
    displayData();
}
function addSite() {
if(validationName()==true&&validationLink()==true){
    siteData = {
        name: siteName.value,
        link: linkSite.value
    }
    siteList.push(siteData)
    console.log(siteList)
    clear()
    displayData()
    localStorage.setItem("siteContainer", JSON.stringify(siteList))
}
else{
    errorBox.classList.remove("d-none");

}
}
closeBtn.addEventListener("click", function() {
    errorBox.classList.add("d-none");
});



function clear() {
    siteName.value = null;
    linkSite.value = null;
    siteName.classList.remove("is-valid")
    linkSite.classList.remove("is-valid")
}

function displayData() {
    cartona = "";
    for (var i = 0; i < siteList.length; i++) {
        cartona += `<tr>
                            <td>${i + 1}</td>
                            <td>${siteList[i].name}</td>
                            <td>${siteList[i].link}</td>
                            <td>
                            <a href="${siteList[i].link}" target="_blank"><button class="border-0 rounded-2 py-2 px-4 btn-visit   text-center"><i class="fa-solid fa-eye"></i> Visit</button></a>
                            </td>
                            <td>
                                <button onclick="deletItem(${i})" class="border-0 rounded-2 py-2 px-4 btn-delete text-center"><i class="fa-solid fa-trash"></i> Delete</button>
                            </td>
                            </tr>`
    }
    document.getElementById("siteBody").innerHTML = cartona;
}
function deletItem(indexItem) {
    siteList.splice(indexItem, 1)
    displayData()
    localStorage.setItem("siteContainer", JSON.stringify(siteList))
}

function validationLink() {
    var text = linkSite.value;
    var regex = /^https:\/\/(www\.)?[a-z]+\.[a-z]+(\/[a-zA-Z0-9._~:\/?#[@\]!$&'()*+,;=]*)?$/;

    var msgLinkInput = document.getElementById("msgLink");
    if (regex.test(text) == true) {
        linkSite.classList.add("is-valid");
        linkSite.classList.remove("is-invalid");
        msgLinkInput.classList.add("d-none")
        return true;
    }
    else {

        linkSite.classList.add("is-invalid");
        linkSite.classList.remove("is-valid");
        msgLinkInput.classList.remove("d-none")
        return false;
    }
}





function validationName() {
    var text = siteName.value;
    var regex = /^[a-zA-Z]{3,}$/;

    var msgNameInput = document.getElementById("msgName");
    if (regex.test(text) == true) {
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");
        msgNameInput.classList.add("d-none")
        return true;
    }
    else {

        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");
        msgNameInput.classList.remove("d-none")
        return false;
    }
}




