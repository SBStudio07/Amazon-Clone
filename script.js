let body = document.getElementsByTagName("body")
let SideBar = document.querySelector(".sidebaropen")
let hamb = document.querySelector(".hamburger")
let closeSideBar = document.querySelector(".close-sidebar")
let overlay = document.querySelector(".overlay")
let product = document.querySelector(".product-overlay")
let closeProduct = document.querySelector(".Product-close")

hamb.addEventListener("click", sideBarOpen)
closeSideBar.addEventListener("click", sideBarClose)
closeProduct.addEventListener("click", productClose)

function sideBarOpen() {
    overlay.setAttribute('class', 'overlay');
    SideBar.setAttribute('class', 'sidebaropen');
    SideBar.style.display = "flex";
    overlay.style.display = "flex";
    overlay.addEventListener("click", sideBarClose)
}
function sideBarClose () {
    overlay.setAttribute('class', 'hidden');
    SideBar.setAttribute('class', 'sidebarclose');
}
function product1() {
    product.style.display = "flex";
    document.body.classList.add('no-scroll');
    
}

function product2() {
    product.setAttribute('id', '')
    product.style.display = "flex";
    document.body.classList.add('no-scroll');
    document.getElementById('product-heading').textContent = 'Health & Personal Care';
    document.getElementById('product-img').setAttribute("src", "img/box2_image.jpg")
    document.getElementById('product-h1').textContent = 'Health & Personal Care';
    document.getElementById('product-p').textContent = 'Top quality Health & Personal Care Products here. 8 in one! Buy Now!!';
    document.getElementById('product-discount').textContent = '-65%';
    document.getElementById('product-price-amount').textContent = '2,699';
    document.getElementById('removed-product-price').textContent = '₹7,699';
}

function product3() {
    product.setAttribute('id', '')
    product.style.display = "flex";
    document.body.classList.add('no-scroll');
    document.getElementById('product-heading').textContent = 'Furniture & Home Decor';
    document.getElementById('product-img').setAttribute("src", "img/box3_image.jpg")
    document.getElementById('product-h1').textContent = 'Furniture & Home Decor';
    document.getElementById('product-p').textContent = 'Top quality Furniture & Home Decor Products here. Best Deal this week. Buy Now!!';
    document.getElementById('product-discount').textContent = '-25%';
    document.getElementById('product-price-amount').textContent = '1,45,999';
    document.getElementById('removed-product-price').textContent = '₹1,94,999';
}

function product4() {
    product.setAttribute('id', '')
    product.style.display = "flex";
    document.body.classList.add('no-scroll');
    document.getElementById('product-heading').textContent = 'Electronics Items';
    document.getElementById('product-img').setAttribute("src", "img/box4_image.jpg")
    document.getElementById('product-h1').textContent = 'Samsung Galaxy S23 Ultra';
    document.getElementById('product-p').textContent = 'Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)';
    document.getElementById('product-discount').textContent = '-51%';
    document.getElementById('product-price-amount').textContent = '79,999';
    document.getElementById('removed-product-price').textContent = '₹1,49,999';
    document.getElementById('buyNow').setAttribute('href', 'https://www.amazon.in/Samsung-Galaxy-Ultra-Phantom-Storage/dp/B0BT9FDZ8N/ref=pd_ci_mcx_mh_mcx_views_0_title?pd_rd_w=dOJTj&content-id=amzn1.sym.fa0aca50-60f7-47ca-a90e-c40e2f4b46a9%3Aamzn1.symc.ca948091-a64d-450e-86d7-c161ca33337b&pf_rd_p=fa0aca50-60f7-47ca-a90e-c40e2f4b46a9&pf_rd_r=PA23FDRKMDHVZGX6Y7SQ&pd_rd_wg=IZ5ML&pd_rd_r=9ef55ed4-d9dd-4e6d-b377-3f77449d2672&pd_rd_i=B0BT9FDZ8N')
}

function product5() {
    product.setAttribute('id', '')
    product.style.display = "flex";
    document.body.classList.add('no-scroll');
    document.getElementById('product-heading').textContent = 'Beauty Products';
    document.getElementById('product-img').setAttribute("src", "https://images.squarespace-cdn.com/content/v1/5e39f7105daebd362d414cbc/1598933167784-NU8YUGJT6V1V7E5QU7J6/rare-beauty-first-look-products.jpeg")
    document.getElementById('product-h1').textContent = 'Beauty Products';
    document.getElementById('product-p').textContent = 'Top quality Beauty Products here. Best Deal this week. Buy Now!!';
    document.getElementById('product-discount').textContent = '-70%';
    document.getElementById('product-price-amount').textContent = '9,999';
    document.getElementById('removed-product-price').textContent = '₹33,299';
}

function product6() {
    product.setAttribute('id', '')
    product.style.display = "flex";
    document.body.classList.add('no-scroll');
    document.getElementById('product-heading').textContent = 'Pets & Animals';
    document.getElementById('product-img').setAttribute("src", "https://www.wayfaith.com/wp-content/uploads/2019/09/Pedigree-Adult-Dry-Dog-Food-Roasted-Chicken-Rice-Vegetable-Flavor-P1.jpg")
    document.getElementById('product-h1').textContent = 'Pets Foods';
    document.getElementById('product-p').textContent = 'Keep your loving and cute pets safe and healthy with this products. 5 Packs in one order!';
    document.getElementById('product-discount').textContent = '-20%';
    document.getElementById('product-price-amount').textContent = '999';
    document.getElementById('removed-product-price').textContent = '₹4,999';
}

function productClose(){
    product.setAttribute('id', 'fade-out')
    document.body.classList.remove('no-scroll');
    product.style.display = "none";
}