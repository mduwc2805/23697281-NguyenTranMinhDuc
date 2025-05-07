$(document).ready(function() {
    function checkScreenSize() {
        if ($(window).width() <= 1140) {
            $("#navbar-menu ul").css({
                "align-items":"start"
            });
            $("#navbar-menu ul li .dropdownSanPham").css({
                "width":"350px",
                "height":"800px",
                "top":"6px",
                "padding":"0px"
            });
            $(".FirstLine").css({
                "flex-direction":"column"
            })
            $(".FirstLine .KetQua").css({
                "margin":"2% 0",
            })
            $(".content .line").css({
                "flex-direction":"column",
            })
            $(".content .line .SanPham").css({
                "margin":"auto",
                "margin-top":"5%"
            })
            $(".content .line .LocMau").css({
                "width":"250px",
                "margin":"auto"
            })
        } else {
            $("#navbar-menu ul li .dropdownSanPham").css({
                "width":"800px",
                "height":"400px",
                "top":"10px"
            });
            $(".FirstLine").css({
                "flex-direction":"row"
            })
            $(".FirstLine .KetQua").css({
                "margin":"0",
            })
            $(".content .line").css({
                "flex-direction":"row"
            })
            $(".content .line .SanPham").css({
                "margin":"0px"
            })
            $(".content .line .LocMau").css({
                "width":"20%",
                "margin":"0"
            })
        }
    }
    function clickDropDownSanPham(){
        $('#navbar-menu ul li .dropdownSanPham').css(
            "display", $("#navbar-menu ul li .dropdownSanPham").css("display") == "block" ? "none" : "block"
        );
    }
    
    checkScreenSize(); // Kiểm tra ngay khi tải trang
    $(window).resize(checkScreenSize); // Kiểm tra lại khi thay đổi kích thước cửa sổ
    $("#SanPham").click(clickDropDownSanPham);
});