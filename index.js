const allProductsDataContainer = document.querySelector('.products_data_container')

let allProducts = [
    {
        image: 'products_11.jpeg',
        title: 'Bogus Pants Modern Blend',
        price: 50.00,
        color: 'Only Milk-white',
        size: 'S, L, XL, XXL, XXXL',
    },
    {
        image: 'hero_section_1.jpeg',
        title: 'U-Neck T-Shirt',
        price: 50.00,
        color: 'All in display',
        size: 'S, L, XL, XXL, XXXL',
    },
    {
        image: 'products_3 (2).jpeg',
        title: 'Uniqlo Vintage Denim Jacket',
        price: 50.00,
        color: 'All in display',
        size: 'S, L, XL, XXL, XXXL',
    },
    {
        image: 'products_4.jpeg',
        title: 'Side Hand Bag',
        price: 50.00,
        color: 'All in display',
        size: 'S, L, XL, XXL, XXXL',
    },
]

allProducts.forEach((product) => {
    allProductsDataContainer.innerHTML += `
        <div class="products_data">
            <div class="products_img_1">
                <img src="./imgs/${product.image}" alt="" class="products_img">
            </div>
            <div class="products_sub_data">
                <h2 class="products_img_title">${product.title}</h2>
                <div class="products_sub">
                    <p class="price">Price: <span>$${product.price}</span></p>
                    <p class="color">Colours: <span>${product.color}</span></p>
                    <p class="size">Size: <span>${product.size}</span></p>
                    <button class="products_btn btn"><i class="ri-shopping-cart-line products_icon"></i> Add To Cart</button>
                    <span><i class="ri-arrow-right-line products_icon arrow"></i></span>
                </div>
            </div>
        </div>
    `
})

const review_data = document.getElementById("review_data")

allReviews = [
    {
        account_icon : "ri-account-circle-fill",
        account_name: "Samantha T.",
        rating: "ri-star-fill",
        star_4: "ri-star-fill",
        star_5: "ri-star-fill",
        comment: "I'm thrilled with my Purchase of clothe from UNIQLO! The fabric feels premium, and the fit is just right. I've received so many compliments already. Worth every penny!"
    },
    {
        account_icon : "ri-account-circle-fill",
        account_name: "Micheal B.",
        rating: "ri-star-fill",
        star_4: "ri-star-fill",
        star_5: "ri-star-fill",
        comment: "The wear exceeded my expectations. It's stylish, comfortable and versatile. Perfect for layering. Highly recommended!"
    },    
    {
        account_icon : "ri-account-circle-fill",
        account_name: "Lisa K.",
        rating: "ri-star-fill",
        star_4: "ri-star-fill",
        star_5: "ri-star-line",
        comment: "Great quality and stylish design. The size options were spon-on, and the color choices are fantastic. I'll definitely be buying more from this brand"
    },
    {
        account_icon : "ri-account-circle-fill",
        account_name: "James R.",
        rating: "ri-star-fill",
        star_4: "ri-star-line",
        star_5: "ri-star-line",
        
        comment: "Excellent jacket! THe material is durable, and the craftsmanship is top-notch. It's become a staple in my wardrobe. Will be recommending it to friends and family"
    },
    {
        account_icon : "ri-account-circle-fill",
        account_name: "Emily S.",
        rating: "ri-star-fill",
        star_4: "ri-star-line",
        star_5: "ri-star-line",
        comment: "I love the feel of this piece. The only reason i didn't give it 5-star is the color is slightly different from what i expected. Otherwise, a fantastic product!"
    }
]

allReviews.forEach((review) => {
    review_data.innerHTML += `
    <div class="review_accnt_container">
        <div class="review_accnt">
            <div class="accnt_profile_link">
                <div class="accnt_dp"><i class="${review.account_icon}"></i></div>
                <div class="accnt_name">${review.account_name}</div>
            </div>
            <div class="rating">
                <div>
                    <i class="${review.rating}"></i>
                    <i class="${review.rating}"></i>
                    <i class="${review.rating}"></i>
                    <i class="${review.star_4}"></i>
                    <i class="${review.star_5}"></i>
                </div>
            </div>
        </div>

        <div class="review_comment_container">
            <p class="review_comment">${review.comment}</P>
        </div>
    </div>
    `   
})


// document.addEventListener("DOMContentLoaded", () => {

        // menu.classList.toggle("show_menu")

        // if (!menu.classList.contains("show_menu")){
        //     menu.classList.add("show_menu")
        // } else {
        //     menu.classList.remove("show_menu")
        // }

// })

const menu = document.getElementById("nav_menu")
const menuIcon = document.getElementById("show_menu")
const closeMenuIcon = document.getElementById("cancel_menu")
const navLinks = document.querySelectorAll(".nav_link")
const body = document.body

menuIcon.addEventListener("click", () => {
    if (menu.style.display = "none") {
        menu.style.display = "block"
        body.classList.add("no_scroll")
        go_top.style.display = "none"
    } 
})

closeMenuIcon.addEventListener("click", () => {
    if (menu.style.display == "block") {
        menu.style.display = "none"
        body.classList.remove("no_scroll")
        go_top.style.display = "block"
    }
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (menu.style.display == "block") {
            menu.style.display = "none"
            body.classList.remove("no_scroll")
            go_top.style.display = "block"
        } else {
            menu.style.display == "block"
            body.classList.add("no_scroll")
            go_top.style.display = "none"
        }
    })
})

// go top
const go_top = document.getElementById("go_top")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
        go_top.classList.add("display_arrow")
    } else {
        go_top.classList.remove("display_arrow")
    }
})

go_top.addEventListener("click", () => {
    window.scrollTo(0, 0)
});

const sections = document.querySelectorAll(".section")
const section_links = document.querySelectorAll(".section_nav")

let current_section = 'home'
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        // let current_section = window.scrollY
        // let offset = section.offsetTop
        // let height = section.offsetHeight
        // let id = section.getAttribute("id")

        // if (current_section >= offset && current_section < offset + height) {
        //     section_links.forEach(link => {
        //         link.classList.remove("active")
        //         document.querySelector("section_nav[href*=" + id + "]").classList.add("active")
        //     }) 
        // }


        if (window.scrollY >= (section.offsetTop - section.clientHeight / 2)) {
            current_section= section.id
            
        }

        section_links.forEach(link => {
            if (link.href.includes(current_section)) {
                document.querySelector(".active").classList.remove("active")
                link.classList.add("active")
            }

        })
    })
})