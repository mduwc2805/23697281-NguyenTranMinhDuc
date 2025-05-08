$(document).ready(function() {
    function checkScreenSize() {
        if ($(window).width() <= 1140) {
            $("#navbar-nav ul").css({
                "align-items":"start"
            });
            $("#navbar-nav ul li .dropdownSanPham").css({
                "width":"350px",
                "height":"800px",
                "top":"6px",
                "padding":"0px"
            });
        } else {
            $("#navbar-nav ul li .dropdownSanPham").css({
                "width":"800px",
                "height":"400px",
                "top":"10px"
            });
        }
    }
    $("#search-input").focus(function(){
        $(this).css({
            "outline": "none",
        });
    })
    function clickDropDownSanPham(){
        $('#navbar-menu ul li .dropdownSanPham').css(
            "display", $("#navbar-menu ul li .dropdownSanPham").css("display") == "block" ? "none" : "block"
        );
    }
    $("#search-box").on("submit", function(e) {
        e.preventDefault();
        const keyword = $("#search-input").val().trim();
        if (keyword) {
          window.location.href = "search.html?q=" + encodeURIComponent(keyword);
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q')?.toLowerCase() || "";

      $("#resultTitle").text("Kết quả cho: " + keyword);

      
      $.getJSON("data.json", function(data) {
        const results = data.filter(item =>
          item.name.toLowerCase().includes(keyword)
        );

        if (results.length === 0) {
          $("#batdau").html("<p>Không tìm thấy kết quả phù hợp.</p>");
        } else {
          results.forEach(item => {
            $("#batdau").append(
              `
              <div id="${item.id}" class="Card col-xl-3 col-md-6 col-12">
                    <div class="Anh-chinh"></div>
                    <div class="name mt-2">${item.name}</div>
                    <div class="price">${item.price}                 <i class="fa-solid fa-arrow-up"></i></div>
                    <button class="add-to-cart" 
                        data-id="${item.id}"
                        data-name="${item.name}"
                        data-price="${item.price}"
                        data-image="${item.img}">Thêm Vào Giỏ Hàng
                    </button>
                </div>
               `
            );
          });
        }
      });
    checkScreenSize(); // Kiểm tra ngay khi tải trang
    $(window).resize(checkScreenSize); // Kiểm tra lại khi thay đổi kích thước cửa sổ
    $("#SanPham").click(clickDropDownSanPham);
});