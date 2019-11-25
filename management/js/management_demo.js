var Management = {
    dyn_Table: undefined,
    SelectUser: -1,
    SelectPage: 0,
    UsersName: ["User1_1@test.com", "User1_2@test.com", "User1_3@test.com",
        "User2_1@test.com", "User2_2@test.com", "User2_3@test.com",
        "User3_1@test.com", "User3_2@test.com", "User3_3@test.com",
        "User4_1@test.com", "User4_2@test.com", "User4_3@test.com"],
    UserRoles: ["group_1", "group_1,group_2", "group_1,group_2,group_3",
        "group_2", "group_1,group_2", "group_1,group_2,group_3",
        "group_3", "group_1,group_3", "group_1,group_2,group_3",
        "group_4", "group_1,group_4", "group_1,group_2,group_4"],
    // dynatable: []
}

function Management_Edit(SelectUser) { //在 Management_page 點擊用戶時, 更新 Edit_page, 並切換頁面
    Management.SelectPage = Management_checkPage();
    Management.SelectUser = SelectUser;
    var options = document.getElementById("roles").children;

    var userInfo = Management.UserRoles[SelectUser].split(',');
    for (var i = 0; i < options.length; i++) {
        if (userInfo.indexOf(options[i].value) == -1) {
            options[i].selected = false;
        } else {
            options[i].selected = true;
        }
    }
    document.getElementById("Edit_page_Username").value = Management.UsersName[SelectUser];
    document.getElementById("Management_page").style.display = 'none';
    document.getElementById("Edit_page").style.display = '';
    Management_refreshSelect();
}

function Management_Update() { //在 Edit_page 點擊 Update, 更新 User_Roles 和 Management_page, 並切換頁面
    Management_getMultipleSelectedValue();
    Management_refreshTable();
    Management_Cancel();
}

function Management_Cancel() {
    var options = document.getElementById("roles").children;
    for (var i = 0; i < 3; i++) {
        options[i].selected = false;
    }
    Management_refreshSelect();
    document.getElementById("Management_page").style.display = '';
    document.getElementById("Edit_page").style.display = "none";
}

function Management_getMultipleSelectedValue() {
    var x = document.getElementById("roles");
    var temp_roles = [];
    for (var i = 0; i < x.options.length; i++) { // 將勾選的 roles 加入 User 的 roles
        if (x.options[i].selected == true) {
            temp_roles.push(x.children[i].value);
        }
    }
    Management.UserRoles[Management.SelectUser] = temp_roles.sort().toString();
    // Management.dynatable[Management.SelectUser].Roles = temp_roles.sort().toString();
}

function Management_refreshSelect() { // 更新 Select table
    $("#roles").fSelect('reload');
}

function Management_refreshTable() {
    var userRoles = document.getElementById("my-table").children[1].children[(Management.SelectUser%Management.SelectPage)].children[1].children;
    var userInfo = Management.UserRoles[Management.SelectUser].split(',');
    for (var i = 0; i < userRoles.length; i += 2) {
        if (userInfo.indexOf(userRoles[i].innerText) == -1) {
            userRoles[i].style.display = "none";
            userRoles[i + 1].style.display = "none";
        } else {
            userRoles[i].style.display = "inline";
            if (userInfo.indexOf(userRoles[i].innerText) == userInfo.length - 1) {
                userRoles[i + 1].style.display = "none";
            } else {
                userRoles[i + 1].style.display = "inline";
            }
        }
    }
    // Management.dyn_Table.settings.dataset.originalRecords = Management.dynatable;
    // Management.dyn_Table.process();
}


$(document).ready(function () { // 載入 fSelect 模組
    $("#roles").fSelect({
        placeholder: "Select some roles",
        numDisplayed: 0,
        overflowText: "{n} selected",
        noResultsText: "No results found",
        searchText: "Search",
        showSearch: true
    });
    Management.dyn_Table = $("#my-table").dynatable().data('dynatable');
    // Management.dynatable = Management.dyn_Table.records.getFromTable();
});

function Management_checkPage(){
    var pageSelect = document.getElementById("dynatable_page").children[2].children[1];
    return(pageSelect.options[pageSelect.selectedIndex].value);
}