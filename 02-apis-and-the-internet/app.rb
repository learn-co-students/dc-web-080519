require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="


# response = make_request("www.reddit.com/.json")
# reddit_hash = parse_into_hash(response)

# response = RestClient.get(url)
# json = JSON.parse(response)


def get_search_terms
    # get a search term from a user
    puts "What would you like to search for?"
    search_terms = gets.chomp
end

# find the top ten books about that search term
    # build the url
def build_url(search_terms)
    url = GOOGLE_BOOKS_API_BASE_URL + search_terms.gsub(" ", "+")
end

def get_book_json(url)
    response = RestClient.get(url)
    json = JSON.parse(response)
end

def parse_books(json)
    # get first ten items
    first_ten = json["items"][0...10]
    first_ten.each do |book|
        puts book["volumeInfo"]["title"]
        puts book["volumeInfo"]["authors"]
        puts "*********"
    end

end

def run
    search_terms = get_search_terms
    url = build_url(search_terms)
    json = get_book_json(url)
    parse_books(json)
end

run

# for each item print title and author