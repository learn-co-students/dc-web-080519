class ApplicationController < Sinatra::Base
  set(:views, "app/views")

  get "/" do
    # Embedded RuBy
    erb(:home)
  end

  get "/books" do
    # send the client HTML with all the books
    @books = Book.all
    #erb method goes through books_index.erb and builds the HTML from that file
    x = erb(:index)
    # the built HTML then gets 'served' to the client
    x
  end

  get("/books/new") do
    erb(:new)
  end

  #build book 'show' page
  get('/books/:id') do
    book_id = params["id"]
    # binding.pry
    @book = Book.find(book_id)
    erb(:show)
  end

  # create a new book
  post("/books") do
    title = params["title"]
    author = params["author"]
    snippet = params["snippet"]

    book = Book.create(title: title, author: author, snippet: snippet)

    redirect "/books/#{book.id}"
  end

  patch("/books/:id") do
    # find the book
    book_id = params["id"]
    book = Book.find(book_id)
    #update it ! using params
    new_author_info = params["author"]
    new_title_info = params["title"]
    new_snippet_info = params["snippet"]
    book.update(author: new_author_info, title: new_title_info, snippet: new_snippet_info)

    redirect("/books/#{book.id}")
  end

  get("/books/:id/edit") do
    book_id = params["id"]
    @book = Book.find(book_id)
    erb(:edit)
  end

  delete("/books/:id") do
    # find by id
    book_id = params["id"]
    book = Book.find(book_id)
    #destroy it
    book.destroy
    # redirect to index
    redirect "/books"
  end

end
