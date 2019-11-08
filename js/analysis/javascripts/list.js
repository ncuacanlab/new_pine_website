function appear(a) {
            if (a === 1) {
                let obj = document.getElementById("stage1");
                obj.style.display = "inline";
            } else {
                let obj;
                let i = 2
                for (let stage = "stage"; i<=8;i++) {
                    obj = document.getElementById(stage+i);
                    obj.style.display = "inline";
                }
            }
        }