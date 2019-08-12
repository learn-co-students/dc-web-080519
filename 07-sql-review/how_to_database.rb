require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')

db.execute("select * from artists")

multi_line = <<-SQL
    SELECT DISTINCT artists.name FROM artists
    JOIN albums ON albums.artist_id = artists.id
    JOIN tracks ON tracks.album_id = albums.id
    JOIN genres ON tracks.genre_id = genres.id WHERE genres.name = "Pop";
SQL

db.execute(multi_line)

