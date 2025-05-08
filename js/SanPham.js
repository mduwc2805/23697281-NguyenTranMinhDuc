$(document).ready(function() {
    function checkScreenSize() {
        if ($(window).width() <= 1140) {
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
    $(".add-to-cart").click(function() {
    const product = {
        id: $(this).data("id"),
        name: $(this).data("name"),
        price: parseInt($(this).data("price")),
        image: $(this).data("image"),
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("🛒 Đã thêm vào giỏ hàng!");
    });
    $("#batdau").on("click", ".add-to-cart", function () {
        const id = $(this).data("id");
        const name = $(this).data("name");
        const price = $(this).data("price");
        const image = $(this).data("image");
      
        // Ví dụ đơn giản: thêm vào localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ id, name, price, image });
        localStorage.setItem("cart", JSON.stringify(cart));
      
        alert(`Đã thêm "${name}" vào giỏ hàng!`);
      });      
    checkScreenSize(); // Kiểm tra ngay khi tải trang
    $(window).resize(checkScreenSize); // Kiểm tra lại khi thay đổi kích thước cửa sổ
});