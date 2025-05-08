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
                    <div class="Anh-chinh" data-toggle="modal" data-target="#${item.id}s"></div>
                    <div class="name mt-2">${item.name}</div>
                    <div class="price">${item.price}                 <i class="fa-solid fa-arrow-up"></i></div>
                    <button class="add-to-cart" 
                        data-id="${item.id}"
                        data-name="${item.name}"
                        data-price="${item.price}"
                        data-image="${item.img}">Thêm Vào Giỏ Hàng
                    </button>

                    <div class="modal fade" id="${item.id}s" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                        
                        <div class="modal-header">
                          <h5 class="modal-title" id="productModalLabel">Giới thiệu sản phẩm</h5>
                        </div>
                  
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6 text-center">
                              <img src="${item.img}" alt="Sản phẩm" class="img-fluid rounded">
                            </div>
                            <div class="col-md-6">
                              <h4>Tên sản phẩm: ${item.name}</h4>
                              <p>Mô tả: Thiết kế hiện đại, chống tia UV, phù hợp với mọi gương mặt.</p>
                              <p><strong>Giá:</strong> ${item.price}</p>
                            </div>
                          </div>
                        </div>
                  
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                          <button class="add-to-cart btn btn-success" 
                                data-id="${item.id}"
                                data-name="${item.name}"
                                data-price="${item.price}"
                                data-image="${item.img}">Thêm Vào Giỏ Hàng
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               `
            );
          });
        }
      });

      // Kiểm tra trạng thái đăng nhập khi vào trang
      window.onload = function () {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            
            const dangKyElement = document.getElementById("DangKy");
            const logoutButton = document.getElementById("logoutButton");
            if (currentUser) {
                dangKyElement.innerHTML = `Chào ${currentUser.username}!`;
            }

            if (logoutButton) {
            logoutButton.style.display = "block";
            }
        }
        };

    
        // Xử lý sự kiện đăng xuất
        const logoutBtn = document.getElementById("logoutButton");

        if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
            alert("Đăng xuất thành công!");
            window.location.href = "DangNhap.html";
        });
        }
    checkScreenSize(); // Kiểm tra ngay khi tải trang
    $(window).resize(checkScreenSize); // Kiểm tra lại khi thay đổi kích thước cửa sổ
    $("#SanPham").click(clickDropDownSanPham);
});