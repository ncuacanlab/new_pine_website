var Management = {
    dyn_Table: undefined,
    SelectUser: 0,
    UsersName: ["User1@test.com", "User2@test.com"],
    UserRoles: ["group_1,group_3", "group_2,group_3"],
    dynatable: []
}

function Management_Edit(SelectUser) { //在 Management_page 點擊用戶時, 更新 Edit_page, 並切換頁面
    Management.SelectUser = SelectUser;
    var options = document.getElementById("roles").children;

    var userInfo = Management.UserRoles[SelectUser].split(',');
    for (var i = 0; i < 3; i++) {
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
    Management.dynatable[Management.SelectUser].Roles = temp_roles.sort().toString();
}

$(document).ready(function() { // 載入 fSelect 模組
    $("#roles").fSelect({
        placeholder: "Select some roles",
        numDisplayed: 0,
        overflowText: "{n} selected",
        noResultsText: "No results found",
        searchText: "Search",
        showSearch: true
    });
    Management.dyn_Table = $("#my-table").dynatable().data('dynatable');
    Management.dynatable = Management.dyn_Table.records.getFromTable();
});

function Management_refreshSelect() { // 更新 Select table
    $("#roles").fSelect('reload');
}

function Management_refreshTable() {
    Management.dyn_Table.settings.dataset.originalRecords = Management.dynatable;
    Management.dyn_Table.process();
}