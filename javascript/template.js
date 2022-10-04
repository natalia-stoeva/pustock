const context = {
    products: [
      {
        autor: "Sally Rooney",
        title: "Bangladesh Power",
        image: "resources/images/books/book-2.jpg",
        price: "$ 20.99",
        sale: true,        
        discount: "20%",
        salePrice: "$ 10.99"
      },
      {
        autor: "Torrey Peters",
        title: "Time Travel",
        image: "resources/images/books/book-3.jpg",
        price: "20.99",
        sale: true,
        discount: "30%",
        salePrice: "$ 10.99"
      },
      {
        autor: "Elin Hilderbrand",
        title: "Enlight Yourself",
        image: "resources/images/books/book-4.jpg",
        price: "$ 20.99",
        sale: false
      },
      {
        autor: "Tracey Lange",
        title: "UX Research",
        image: "resources/images/books/book-5.jpg",
        price: "$ 20.99",
        sale: false
      },
      {
        autor: "Richard Powers",
        title: "Clean is Design",
        image: "resources/images/books/book-6.jpg",
        price: "$ 20.99",
        sale: true,
        discount: "30%",
        salePrice: "$ 10.99"
      },
      {
        autor: "Louise Erdrich",
        title: "Cats Language",
        image: "resources/images/books/book-7.jpg",
        price: "$ 20.99",
        sale: false
      }
    ]
  };

const templateElement = document.getElementById('productsTemplate');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);
document.getElementById('insertProduct').innerHTML = compiledHTML;

// blog
const blog = {
  blogArticle: [
    {
      image: "resources/images/blog-1.jpg",
      day: "30",
      month: "oct",
      title: "How to Travel Spontaneously",
      author: "Hastech",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour ..."
    },
    {
      image: "resources/images/blog-2.jpg",
      day: "16",
      month: "oct",
      title: "How to Transfer Contacts from iPhone to iPhone",
      author: "Inna",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ..."
    },
    {
      image: "resources/images/blog-1.jpg",
      title: "Tone Your Abs",
      day: "22",
      month: "sep",
      author: "Rado",
      content: "Latin words, combined with a handful of model sentence structures ..."
    }

  ]
};

const blogElement = document.getElementById('blog');
const blogSource = blogElement.innerHTML;
const blogTemplate = Handlebars.compile(blogSource);
const compiledBlog = blogTemplate(blog);
document.getElementById('insertBlog').innerHTML = compiledBlog;

//books

const bestSellers = {
  bestSeller: [
    {
      author: "Richard Powers",
      title: "Clean is Design",
      image: "resources/images/books/book-6.jpg",
      price: "$ 20.99",
      sale: true,
      discount: "30%",
      salePrice: "$ 10.99"
    },
    {
      author: "Richard Powers",
      title: "Clean is Design",
      image: "resources/images/books/book-6.jpg",
      price: "$ 20.99",
      sale: true,
      discount: "30%",
      salePrice: "$ 10.99"
    },
    {
      author: "Richard Powers",
      title: "Clean is Design",
      image: "resources/images/books/book-6.jpg",
      price: "$ 20.99",
      sale: true,
      discount: "30%",
      salePrice: "$ 10.99"
    },
    {
      author: "Richard Powers",
      title: "Clean is Design",
      image: "resources/images/books/book-6.jpg",
      price: "$ 20.99",
      sale: true,
      discount: "30%",
      salePrice: "$ 10.99"
    }
  ]
};

const bestSellerElement = document.getElementById('bestSellers');
const bestSellerSource = bestSellerElement.innerHTML;
const bestSellerTemplate = Handlebars.compile(bestSellerSource);
const compiledBestSeller = bestSellerTemplate(bestSellers);
document.getElementById('insertBestSellers').innerHTML = compiledBestSeller;