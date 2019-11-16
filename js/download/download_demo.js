var Download = {
    items: [],
    selectedAttributes: [],
    toptitle: [],
    filteredItems: [],
    paginatedItems: [],
    // datetime: {
    //     start: undefined,
    //     end: undefined
    // },
    pagination: {
        range: 5,
        currentPage: 1,
        itemPerPage: 8,
        items: [],
        filteredItems: [],
    }
}

// 表格內搜尋資料
function Download_searchInTheList(searchText, currentPage) {
    if (searchText == undefined) {
        Download.filteredItems = Download.items;
    } else {
        Download.filteredItems = Download.items.filter(function(v) {
            if (searchText.search('=') === -1) {
                for (let i in v) {
                    if (v[i].toString().toUpperCase().search(searchText.toUpperCase()) > -1) {
                        return v;
                    }
                }
            } else {
                let t = searchText.split('=');
                for (let i in v) {
                    try {
                        if (v[t[0]].toString().toUpperCase().search(t[1].toUpperCase()) > -1) {
                            return v;
                        }
                    } catch (err) {
                        return v;
                    }
                }
            }
        })
    }
    Download_buildPagination();

    if (currentPage == undefined) {
        Download_selectPage(1);
    } else {
        Download_selectPage(currentPage);
    }
}

// 產生表格頁數
function Download_buildPagination() {
    var numberOfPage = Math.ceil(Download.filteredItems.length / Download.pagination.itemPerPage);
    Download.pagination.items = [];
    for (var i = 0; i < numberOfPage; i++) {
        Download.pagination.items.push(i + 1);
    }
}

// 選擇表格頁數
function Download_selectPage(page) {
    Download.pagination.currentPage = page;

    var start = 0;
    var end = 0;
    if (Download.pagination.currentPage < Download.pagination.range - 2) {
        start = 1;
        end = start + Download.pagination.range - 1;
    } else if (Download.pagination.currentPage <= Download.pagination.items.length && Download.pagination.currentPage > Download.pagination.items.length - Download.pagination.range + 2) {
        start = Download.pagination.items.length - Download.pagination.range + 1;
        end = Download.pagination.items.length;
    } else {
        start = Download.pagination.currentPage - 2;
        end = Download.pagination.currentPage + 2;
    }
    if (start < 1) {
        start = 1;
    }
    if (end > Download.pagination.items.length) {
        end = Download.pagination.items.length;
    }

    Download.pagination.filteredItems = [];
    for (var i = start; i <= end; i++) {
        Download.pagination.filteredItems.push(i);
    }
    Download_refreshPage();

    Download.paginatedItems = Download.filteredItems.filter(function(v, k) {
        return Math.ceil((k + 1) / Download.pagination.itemPerPage) == Download.pagination.currentPage;
    });
    console.log(Download.paginatedItems);
    Download_tabulate();
}

// 更新頁數選單
function Download_refreshPage() {
    var previous = document.getElementById("Download_previous");
    var nextPage = document.getElementById("Download_nextPage");
    var first = document.getElementById("Download_first");
    var last = document.getElementById("Download_last");

    previous.setAttribute("class", "button is-disabled");
    nextPage.setAttribute("class", "button is-disabled");
    first.setAttribute("class", "button is-disabled");
    last.setAttribute("class", "button is-disabled");

    if (Download.pagination.items.length != 0) {
        if (Download.pagination.currentPage != Download.pagination.items[0]) {
            previous.setAttribute("class", "button");
            first.setAttribute("class", "button");
        }
        if (Download.pagination.currentPage != Download.pagination.items[Download.pagination.items.length - 1]) {
            nextPage.setAttribute("class", "button");
            last.setAttribute("class", "button");
        }

        var page_block = document.getElementById("Download_page");
        for (var i = 0; i < page_block.children.length;) {
            if (page_block.children[i].value == 0) {
                page_block.removeChild(page_block.children[i]);
            } else {
                i++;
            }
        }

        for (var i = 0; i < Download.pagination.filteredItems.length; i++) {
            var item = Download.pagination.filteredItems[i];
            var page = document.createElement('li');
            var pageNumber = document.createElement('a');
            if (item == Download.pagination.currentPage) {
                pageNumber.setAttribute("class", "button is-info");
            } else {
                pageNumber.setAttribute("class", "button");
            }
            pageNumber.setAttribute("onclick", "Download_selectPage(" + parseInt(item) + ")");
            pageNumber.setAttribute("Value", "0");
            pageNumber.innerText = parseInt(item);
            page.append(pageNumber);
            page_block.insertBefore(page, page_block.children[2 + i]);
        }
    }
}

// Select attributes下方第二個combobox內選取table之欄位
function Download_selectItem() {
    var table = document.getElementById("Download_selectItem");
    var item = table.options[table.selectedIndex].value;
    if (Download.selectedAttributes.indexOf(item) == -1) {
        Download.selectedAttributes.push(item);
        table.remove(table.selectedIndex);
        Download_refreshSelectedAttributes();
    }
    table.options[0].selected = true;
}

// 刪除顯示於Attributes selected區塊中的欄位
function Download_removeSelectedItem(item) {
    var index = Download.selectedAttributes.indexOf(item);
    if (index > -1) {
        Download.selectedAttributes.splice(index, 1);
        Download_refreshSelectedAttributes();
        var table = document.getElementById("Download_selectItem");
        var option = document.createElement("option");
        option.text = item;
        table.add(option);
    }
}

// 於Select attributes區塊中上方combobox選取table名稱
function Download_selectTable() {
    Download.selectedAttributes = [];
    document.getElementById("Download_selectItem").disabled = false;
}

// 更新Attributes selected區塊
function Download_refreshSelectedAttributes() {
    var attribute_Now = document.getElementById("Download_selectedAttributes").children;
    for (var i = 0; i < 6; i++) {
        if (Download.selectedAttributes.indexOf(attribute_Now[i].getAttribute("value")) == -1) {
            attribute_Now[i].style.display = "none";
        } else {
            attribute_Now[i].style.display = '';
        }
    }

    document.getElementById("Download_attributeNumber").innerText = Download.selectedAttributes.length;
    if (Download.selectedAttributes.length > 0) {
        document.getElementById("Download_searchBtn").disabled = false;
    } else {
        document.getElementById("Download_searchBtn").disabled = true;
    }
}

// "Select attributes"以及"Attribute selected"區塊中search按鈕功能
function Download_search() {
    document.getElementById("Download_downloadBtn").disabled = false;
    document.getElementById("Download_searchItem").disabled = false;
    document.getElementById("Download_searchItemBtn").disabled = false;
    d3.csv("js/download/demo.csv")
        .then(function(result) {
            if (result.length <= 0) {
                return 0;
            }

            Download_clear();
            for (var i = 0; i < result.length; i++) {
                var data = {};
                for (var j = 0; j < Download.selectedAttributes.length; j++) {
                    data[Download.selectedAttributes[j]] = result[i][Download.selectedAttributes[j]];
                }
                Download.items.push(data);
            }
            for (var i = 0; i < Download.selectedAttributes.length; i++) {
                Download.toptitle.push(Download.selectedAttributes[i]);
            }
            document.getElementById("Download_totalNumber").innerText = Download.items.length;
            Download_searchInTheList(undefined);
        })
        .catch(function(error) {
            console.log(error);
        });
}

// print Table
function Download_tabulate() {
    document.getElementById("Download_myTable").innerHTML = '';
    document.getElementById("Download_searchNumber").innerText = Download.filteredItems.length;

    Download.paginatedItems.unshift({});
    var data = Download.paginatedItems;
    var columns = Download.toptitle;

    var new_table = d3.select("#Download_myTable").append('table')
    new_table.attr("class", "table is-bordered is-striped is-narrow");

    new_table.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .attr("class", "Download-table-index")
        .text(function(d) { return d })

    var rows = new_table.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return { column: column, value: row[column] }
            })
        })
        .enter()
        .append('td')
        .text(function(d) { return d.value })

    return new_table;
}

function Download_clear() {
    Download.toptitle = [];
    Download.items = [];
    Download.filteredItems = [];
    Download.paginatedItems = [];
    Download.currentPage = 1;
}

// 將Select attributes區塊中表格匯出CSV檔
function Download_exportToCsv(filename, rows) {
    self = this;
    var _window = window;
    self.isDownloading = true;
    let attribute = [];
    let temp = [];
    let temp2 = [];
    let temp3 = [];
    let Img = false;
    for (let i = 0; i < Download.toptitle.length; i++) {
        if (Download.toptitle[i] != 'raw' && Download.toptitle[i] != undefined) {
            attribute.push(Download.toptitle[i]);
        }
    }
    temp.push(attribute);
    for (var m = 0; m < rows.length; m++) {
        for (let i in rows[m]) {
            if (i != 'raw' && i != 'undefined') {
                temp2.push(rows[m][i]);
            }
        }
        temp.push(temp2);
        temp2 = [];
    }
    console.log(temp);
    var process = function(rows) {
        let csvfile = ''
        for (var i = 0; i < rows.length; i++) {
            var finalVal = '';
            for (var j = 0; j < rows[i].length; j++) {
                var innerValue = rows[i][j] === null ? '' : rows[i][j].toString();
                if (rows[i][j] instanceof Date) {
                    innerValue = rows[i][j].toLocaleString();
                };
                var result = innerValue.replace(/"/g, '""');
                if (result.search(/("|,|\n)/g) >= 0)
                    result = '"' + result + '"';
                if (j > 0)
                    finalVal += ',';
                finalVal += result;
            }
            csvfile += finalVal + '\n';
        }
        return new P(function(resolve) {
            resolve(csvfile);
        })
    };
    process(temp)
        .then(function(resp) {
            var zip = new JSZip()
            var testcontecnt = '\ufeff' + resp
            zip.file("download.csv", testcontecnt, { base64: false });
            zip.generateAsync({ type: "blob" })
                .then(function(content) {
                    saveAs(content, "download.zip")
                })
            self.isDownloading = false;
            console.log("downloaded")
        })
}

// 下載CSV檔案
function Download_downloadFile() {
    Download_exportToCsv('download.csv', Download.filteredItems)
}