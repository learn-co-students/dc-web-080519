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
    erb(:books_index)
    # the built HTML then gets 'served' to the client
  end

  #build book 'show' page
  get('/books/:id') do
    book_id = params["id"]
    @book = Book.find(book_id)
    erb(:book_show)
  end


end
