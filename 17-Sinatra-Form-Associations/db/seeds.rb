Book.destroy_all

martin_adapter = GoogleBooks::Adapter.new("George RR Martin")
martin_adapter.fetch_books

# collins_adapter = GoogleBooks::Adapter.new("Suzanne Collins")
# collins_adapter.fetch_books

seuss_adapter = GoogleBooks::Adapter.new("Dr Seuss")
seuss_adapter.fetch_books

shakespeare_adapter = GoogleBooks::Adapter.new("William Shakespeare")
shakespeare_adapter.fetch_books
